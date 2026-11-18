import type { ReactNode } from "react";
import "./ServicePageTheme.css";

export const ServicePageBand = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <div className={`service-band ${dark ? "service-band-dark" : "service-band-light"}`}>{children}</div>
);