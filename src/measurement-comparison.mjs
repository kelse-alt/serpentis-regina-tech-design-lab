/**
 * Compare a manufacturer reference against an approved house standard.
 * Positive delta: house standard is larger. Negative delta: smaller.
 * Comparison is descriptive only; it is NOT a pass/fail fit tolerance.
 */
export function compareMeasurement(record) {
  if (!record || typeof record !== "object" || Array.isArray(record)) {
    throw new TypeError("Measurement must be an object");
  }
  if (typeof record.pomCode !== "string" || record.pomCode.trim() === "") {
    throw new TypeError("A POM code is required");
  }
  if (typeof record.houseStandard !== "number" || !Number.isFinite(record.houseStandard)) {
    throw new TypeError("houseStandard must be a finite number");
  }

  const reference = record.manufacturerReference;
  if (reference === null || reference === undefined) {
    return { ...record, delta: null, comparisonStatus: "NO_MANUFACTURER_REFERENCE" };
  }
  if (typeof reference !== "number" || !Number.isFinite(reference)) {
    throw new TypeError("manufacturerReference must be a finite number or null");
  }

  const delta = Number((record.houseStandard - reference).toFixed(3));
  return { ...record, delta, comparisonStatus: "COMPARED" };
}

export function compareMeasurements(records) {
  if (!Array.isArray(records)) {
    throw new TypeError("Expected an array of measurement records");
  }
  return records.map(compareMeasurement);
}
