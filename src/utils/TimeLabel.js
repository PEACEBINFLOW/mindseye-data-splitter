export class TimeLabel {
  static apply(evt) {
    const now = new Date();
    const block = now.toISOString().split("T")[0];
    const segment = now.toISOString().slice(0, 13);

    return {
      ...evt,
      blockId: `daily_${block}`,
      segmentId: segment
    };
  }
}
