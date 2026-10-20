# Learning Journal — JavaScript Foundations

**Real business problem:** Convert paper/spreadsheet-style mannequin measurements into structured records that software can compare.

**Lesson 01 — Variables**
- `const` for named values such as a form ID, stated reference and actual measurement
- Numeric values have no quotes; text strings do
- `console.log()` shows results
- Debugging lesson: JavaScript is case-sensitive: `actualBust` and `actualbust` are different names

**Lesson 02 — Objects**
- Group form ID, POM code, unit, reference and house standard into a single object
- Read a property with `record.houseStandard`
- The *house standard* is the approved physical mannequin measurement, not the manufacturer-stated value

**Progress checkpoint:** Early beginner; review code directly and gradually extend one practical build at a time.

**Case study:** [Mannequin Measurement Comparison](../case-studies/01-mannequin-measurement-registry/README.md)

**Next exercise:** Add another synthetic POM record to `demo.mjs` and explain its calculated delta.
