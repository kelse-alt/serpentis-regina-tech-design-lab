import { compareMeasurements } from "../../src/measurement-comparison.mjs";

// SYNTHETIC demonstration only. None of these values are SR house dimensions.
const demoForm = {
  formId: "DEMO-FORM-001",
  approvalStatus: "DEMO_ONLY",
  unit: "in",
  measurements: [
    { pomCode: "BF-01", name: "Bust circumference", manufacturerReference: 34.25, houseStandard: 34.75 },
    { pomCode: "BF-02", name: "Waist circumference", manufacturerReference: 26.25, houseStandard: 27.0 },
    { pomCode: "BF-04", name: "High hip circumference", manufacturerReference: null, houseStandard: 33.0 }
  ]
};

console.log("Demo form:", demoForm.formId);
console.table(compareMeasurements(demoForm.measurements));
