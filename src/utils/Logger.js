export class Logger {
  static debug(message, payload) {
    if (process.env.MINDSEYE_DEBUG === "1") {
      console.log("[MindsEye:DataSplitter]", message, payload || "");
    }
  }
}
