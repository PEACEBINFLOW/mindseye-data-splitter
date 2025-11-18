export class FormatConverter {
  static convert(payload, format) {
    switch (format) {
      case "json":
        return payload;
      case "binary":
        return Buffer.from(JSON.stringify(payload));
      case "text":
        return JSON.stringify(payload, null, 2);
      default:
        return payload;
    }
  }
}
