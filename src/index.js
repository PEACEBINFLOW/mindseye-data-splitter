import { DataSplitter } from "./router/DataSplitter.js";
import { ChannelRouter } from "./router/ChannelRouter.js";

export function splitAndRoute(event, rules) {
  const splitter = new DataSplitter(rules);
  const parts = splitter.split(event);

  return ChannelRouter.route(parts);
}
