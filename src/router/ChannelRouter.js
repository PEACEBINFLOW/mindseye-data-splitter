import { FormatConverter } from "./FormatConverter.js";
import { Logger } from "../utils/Logger.js";

export class ChannelRouter {
  static async route(parts) {
    const routed = [];

    for (const part of parts) {
      const converted = FormatConverter.convert(part.payload, part.format);

      Logger.debug("Routing part", {
        target: part.target,
        format: part.format
      });

      routed.push({
        target: part.target,
        format: part.format,
        payload: converted
      });

      // In real system: here you'd HTTP POST, push to Pub/Sub, etc.
    }

    return routed;
  }
}
