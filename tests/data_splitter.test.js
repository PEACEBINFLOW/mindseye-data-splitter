import { DataSplitter } from "../src/router/DataSplitter.js";

const rules = [
  {
    match: { type: "code_analyzed" },
    target: "binary-engine",
    format: "binary",
    fields: ["signature"]
  },
  {
    match: { type: "code_analyzed" },
    target: "moving-library",
    format: "json",
    fields: ["signature", "code_length"]
  }
];

const event = {
  type: "code_analyzed",
  code_length: 120,
  signature: { id: "pat_123" },
  extra: "ignored"
};

const splitter = new DataSplitter(rules);
console.log(splitter.split(event));
