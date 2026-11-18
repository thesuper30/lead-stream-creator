/**
 * The Super 30 — Website forms → Google Sheets (POST web app)
 *
 * SETUP
 * 1. Open (or create) the Google Sheet that should receive leads.
 * 2. Extensions → Apps Script. Delete any code there and paste this whole file. Save.
 * 3. Deploy → New deployment → gear icon → "Web app".
 *      Description:     Website forms
 *      Execute as:      Me
 *      Who has access:  Anyone
 *    Click Deploy and allow the permissions Google asks for.
 * 4. Copy the "Web app URL" (ends with /exec) and paste it into the secure box
 *    in Lovable chat (GOOGLE_SHEETS_WEBAPP_URL).
 * 5. If you edit this script later: Deploy → Manage deployments → Edit (pencil)
 *    → Version: "New version" → Deploy. The URL stays the same.
 *
 * WHAT IT DOES
 * - Every submission is added as a new row in the "All Leads" tab.
 * - The same row is also added to a tab named after the form (e.g. "Contact Page Form").
 * - Columns are created automatically: when a form sends a new field, a new column is added.
 * - All cells are stored as plain text, so phone numbers keep their +91 and nothing is
 *   run as a formula.
 */

const ALL_LEADS_TAB = 'All Leads';
const CREATE_TAB_PER_FORM = true;

// These columns always come first, in this order.
const CORE_HEADERS = [
  'Submitted At (IST)', 'Form Name', 'Form ID', 'Form Type',
  'Name', 'Email', 'Phone', 'Company', 'Website', 'Service', 'Role', 'Monthly Revenue', 'Message',
  'Page URL', 'Page Title', 'Traffic Source', 'Traffic Medium',
  'UTM Source', 'UTM Medium', 'UTM Campaign', 'UTM Term', 'UTM Content',
  'First Traffic Source', 'First Landing Page', 'First Referrer',
  'Device Type', 'Browser', 'Operating System', 'City', 'State', 'Country', 'IP Address',
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);

    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ status: 'error', message: 'No data received' });
    }

    const payload = JSON.parse(e.postData.contents);
    // Accept { row: {...} } from the website, or a flat object if posted directly.
    const row = payload && typeof payload.row === 'object' && payload.row !== null ? payload.row : payload;
    if (!row || typeof row !== 'object' || Array.isArray(row)) {
      return jsonResponse_({ status: 'error', message: 'Invalid data' });
    }
    if (!row['Submitted At (IST)']) {
      row['Submitted At (IST)'] = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd MM yyyy hh:mm a') + ' IST';
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    appendRow_(getTab_(ss, ALL_LEADS_TAB), row);

    const formName = payload.form_name || row['Form Name'];
    if (CREATE_TAB_PER_FORM && formName) {
      appendRow_(getTab_(ss, safeTabName_(formName)), row);
    }

    return jsonResponse_({ status: 'success' });
  } catch (err) {
    return jsonResponse_({ status: 'error', message: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (ignored) {}
  }
}

// Opening the /exec URL in a browser shows this — handy to check the deployment works.
function doGet() {
  return jsonResponse_({ status: 'ok', message: 'Form endpoint is live. Send form data with POST.' });
}

function getTab_(ss, name) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, CORE_HEADERS.length).setValues([CORE_HEADERS]);
    styleHeader_(sheet);
  }
  return sheet;
}

function appendRow_(sheet, row) {
  const lastCol = Math.max(sheet.getLastColumn(), 1);
  let headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(String);

  const missing = Object.keys(row).filter(function (key) { return headers.indexOf(key) === -1; });
  if (missing.length) {
    sheet.getRange(1, headers.length + 1, 1, missing.length).setValues([missing]);
    headers = headers.concat(missing);
    styleHeader_(sheet);
  }

  const values = headers.map(function (h) {
    const v = row[h];
    return v === undefined || v === null ? '' : String(v);
  });

  const range = sheet.getRange(sheet.getLastRow() + 1, 1, 1, headers.length);
  range.setNumberFormat('@'); // plain text: keeps +91 and blocks formulas
  range.setValues([values]);
}

function styleHeader_(sheet) {
  const header = sheet.getRange(1, 1, 1, sheet.getLastColumn());
  header.setFontWeight('bold').setBackground('#FF5A00').setFontColor('#FFFFFF');
  sheet.setFrozenRows(1);
}

function safeTabName_(name) {
  return String(name).replace(/[\[\]\*\?\/\\:]/g, ' ').trim().slice(0, 90) || 'Website Form';
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// Run this once from the editor (select testPost → Run) to check rows appear.
function testPost() {
  const res = doPost({ postData: { contents: JSON.stringify({
    form_name: 'Test Form',
    row: { 'Form Name': 'Test Form', Name: 'Test Lead', Email: 'test@example.com', Phone: '+919999999999', 'Page URL': 'https://example.com/contact-us', 'Traffic Source': 'Google', 'Traffic Medium': 'organic' },
  }) } });
  Logger.log(res.getContent());
}
