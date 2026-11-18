/** Rewrite legacy public-bucket URLs to the public media proxy. */
export const toMediaUrl = (url?: string | null): string | undefined =>
  url
    ? url.replace(
        /\/storage\/v1\/object\/public\/blog-media\//g,
        "/functions/v1/blog-media/"
      )
    : undefined;

export const formatPublishedDate = (date: string): string => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).formatToParts(new Date(date));
  const value = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "";
  return `${value("day")} ${value("month")} ${value("year")} ${value("hour")}:${value("minute")} ${value("dayPeriod").toUpperCase()} IST`;
};
