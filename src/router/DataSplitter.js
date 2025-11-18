import { SplitRule } from "../models/SplitRule.js";
import { Logger } from "../utils/Logger.js";

export class DataSplitter {
  constructor(rules = []) {
    this.rules = rules.map(r => new SplitRule(r));
  }

  split(event) {
    Logger.debug("Splitting event", event);

    const outputs = [];

    for (const rule of this.rules) {
      if (rule.matches(event)) {
        const fragment = rule.extractFragment(event);
        outputs.push({
          target: rule.target,
          format: rule.format,
          payload: fragment
        });
      }
    }

    // default: pass-through if nothing matched
    if (outputs.length === 0) {
      outputs.push({
        target: "default",
        format: "json",
        payload: event
      });
    }

    return outputs;
  }
}
