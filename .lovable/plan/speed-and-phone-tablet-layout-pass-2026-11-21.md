# Speed and phone/tablet layout pass

## 1. Speed
- Measure first: look at real visitors' loading times for each page and list the slowest ones.
- Images: 30 photos are over 500 KB, and the image folders add up to about 250 MB. Shrink them and convert them to a lighter modern format, with no visible loss in quality.
- Load photos lower down the page only when the visitor scrolls near them. Load the top banner photo first.
- Reserve each image's space in advance, so the page doesn't jump while it loads.
- Load the fonts and tracking tools so they don't hold up the first view of the page.
- Pages already load one at a time; check that nothing extra gets bundled in.

## 2. Phone and tablet test
- Test every page in the menu and footer at three phone sizes and one tablet size.
- Check each section's spacing, text wrapping, buttons, tap size, images, forms, menus, pop-ups and any sideways scrolling, then fix what's wrong.
- Desktop stays as it is.

## 3. Final check
- Re-check speed and screenshots, then share a before/after summary.

## Technical details
- Use sharp to produce WebP images at the size they're actually shown. Keep the same file names and update the code that uses them.
- Set lazy loading, decoding="async" and width/height on images. Use fetchpriority="high" on the top banner photo.
- Preconnect to the font and tracking sites, and delay the tag manager until the page is idle.
- Use Playwright at 360, 393, 430 and 768 px. All layout fixes stay at screen widths below 1024 px.
