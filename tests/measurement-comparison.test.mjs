import test from "node:test";
import assert from "node:assert/strict";
import { compareMeasurement, compareMeasurements } from "../src/measurement-comparison.mjs";

test("positive manufacturer delta", () => {
  const result = compareMeasurement({ pomCode: "BF-01", houseStandard: 34.75, manufacturerReference: 34.25 });
  assert.equal(result.delta, 0.5);
  assert.equal(result.comparisonStatus, "COMPARED");
});

test("negative manufacturer delta", () => {
  const result = compareMeasurement({ pomCode: "BF-02", houseStandard: 25.75, manufacturerReference: 26.25 });
  assert.equal(result.delta, -0.5);
});

test("equal dimensions produce zero", () => {
  assert.equal(compareMeasurement({ pomCode: "BF-03", houseStandard: 36, manufacturerReference: 36 }).delta, 0);
});

test("missing manufacturer values remain missing, never zero", () => {
  const result = compareMeasurement({ pomCode: "BF-04", houseStandard: 33, manufacturerReference: null });
  assert.equal(result.delta, null);
  assert.equal(result.comparisonStatus, "NO_MANUFACTURER_REFERENCE");
});

test("records can be compared without modifying their source", () => {
  const original = [{ pomCode: "BF-01", houseStandard: 34.75, manufacturerReference: 34.25 }];
  const compared = compareMeasurements(original);
  assert.equal(compared[0].delta, 0.5);
  assert.equal(original[0].delta, undefined);
});

test("rejects invalid values instead of silently producing NaN", () => {
  assert.throws(() => compareMeasurement({ pomCode: "BF-01", houseStandard: "34.75", manufacturerReference: 34.25 }), TypeError);
});
