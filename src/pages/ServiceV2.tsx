import { useLocation } from "react-router-dom";
import { ServiceV2Page } from "@/components/landing/ServiceV2Page";
import { serviceV2Pages } from "@/data/serviceV2Pages";
import NotFound from "./NotFound";

const ServiceV2 = () => {
  const { pathname } = useLocation();
  const config = serviceV2Pages.find((p) => p.path === pathname.replace(/\/$/, ""));
  return config ? <ServiceV2Page key={config.path} c={config} /> : <NotFound />;
};
export default ServiceV2;
