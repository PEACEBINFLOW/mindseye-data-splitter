export class NetworkIntent {
  static apply(evt, overrides = {}) {
    return {
      ...evt,
      channel: overrides.channel || "splitter",
      priority: overrides.priority || "normal",
      reliability: overrides.reliability || "must_deliver",
      source: overrides.source || "data-splitter"
    };
  }
}
