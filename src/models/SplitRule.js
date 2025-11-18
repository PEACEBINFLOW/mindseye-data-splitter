export class SplitRule {
  constructor({ match, target, format = "json", fields = [] }) {
    this.match = match;
    this.target = target;
    this.format = format;
    this.fields = fields;
  }

  matches(event) {
    if (!this.match || !this.match.type) return true;
    return event.type === this.match.type;
  }

  extractFragment(event) {
    if (!this.fields || this.fields.length === 0) return event;

    const fragment = {};
    for (const f of this.fields) {
      if (event[f] !== undefined) fragment[f] = event[f];
    }
    return fragment;
  }
}
