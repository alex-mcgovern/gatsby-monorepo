import { Metric } from "web-vitals";

function reportHandler(metric: Metric) {
  console.log(metric);
}

export default reportHandler;
