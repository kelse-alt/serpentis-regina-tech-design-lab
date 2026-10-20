# Case Study 001 — Mannequin Measurement Comparison

**Problem:** A fashion house must distinguish manufacturer-stated dimensions from its approved house fit-form measurements.

**Purpose:** Build the first reusable JavaScript calculation for a future product lifecycle management (PLM)-style application.

**What it demonstrates**
- JavaScript variables, objects and arrays
- Points of Measure (POM) as stable identifiers
- A reusable comparison function
- Difference = house standard - manufacturer reference
- Missing references kept as `null` (not guessed, and not zero)
- Automated tests and repeatable execution

**Important:** All measurements in this demonstration are synthetic. The actual Serpentis Regina fit-form register is maintained separately in [PLM Core](https://github.com/kelse-alt/serpentis-regina-plm-core). These examples are not approved house records. House measurements are controlling standards; manufacturer values are retained for reference only. The calculated difference does not imply a fitting tolerance or a pass/fail result.

## Run

Using Node.js 20 or later at the repository root:

```bash
npm run demo
npm test
```

Expected demo differences: BF-01 = +0.5 in, BF-02 = +0.75 in; BF-04 has no available manufacturer reference.

## Learning notes
- `const` creates a binding; use capitalization consistently (`actualBust` is different from `actualbust`).
- An object groups named properties; an array collects many objects.
- Functions define reusable operations, and tests help prove their behavior.
- Data lineage and approval status matter as much as the arithmetic.

## Next build
Create a structured digital tech-pack style record, using **sample/demo data** and fields inspired by technical-design workflows (pattern card, measurements, fit/comments, graded specifications). Keep educational fixtures separate from the approved house register.
