# Technical design workflow reference
Version 1.0. Common apparel practice used for this proposed pilot. WHBM must confirm its own stage names, responsibilities and approval gates. This is domain reference material; the agent Instructions and enforced company configuration govern behavior.

## WIP and PLM mean different things
WIP means work in progress. A WIP often tracks styles, owners, sample rounds, dates, blockers and action status. Its format could be a spreadsheet, a list, an enterprise application or a PLM view. Confirm the team's actual system.

PLM means product lifecycle management. It may hold style records, tech packs, POM specifications, BOMs, construction details, fit history, sample requests, approvals and released documents. Actual modules and permissions vary. Reading a static export is not a live PLM integration, and retrieval access does not imply write access.

Map authority by field. Operational due dates may belong to the WIP while approved fit comments belong to the PLM. If both show different values for the same authoritative field, preserve both and send the conflict to its owner. Email establishes what the vendor reported; it does not itself change the approved specification or accepted critical path.

## Terms to recognize
POM: point of measurement, with method, location, unit and tolerance defined by the approved specification. BOM: bill of materials. Fit sample: sample evaluated for fit, balance, construction and execution. Prototype, development, fit, size set, preproduction and top of production samples may serve different purposes; their sequence and approval meaning are company-defined. A PP or TOP label never implies automatic approval. Use the team's glossary and size nomenclature.

Color, fabric, wash, trim, construction and testing dependencies may prevent a sample from being representative. Surface the documented dependency and owner. Do not approve a substitute, testing exception or bulk shipment. Distinguish sample delivery dates from bulk ex-factory or distribution center dates.

## Sample stages and responsible party
The canonical stages below are pilot vocabulary. Map WHBM's actual values before integration.
| Canonical stage | Responsible party | Appropriate next action |
| --- | --- | --- |
| AWAITING_SHIP_COMMITMENT | Vendor | Confirm dispatch and expected in-house arrival |
| AWAITING_DISPATCH | Vendor | Confirm actual handoff and tracking when due |
| IN_TRANSIT | Vendor/logistics | Fill missing shipment details; resolve overdue arrival |
| DELIVERED_PENDING_INTAKE | Internal receiving | Verify which sample lines physically arrived |
| PARTIAL_RECEIPT | Receiving and vendor/logistics | Reconcile received and outstanding quantities |
| RECEIVED_AWAITING_FIT | Technical design | Confirm readiness for the fit; no vendor arrival chase |
| AWAITING_INTERNAL_COMMENTS | Technical design | Complete/release fit comments internally |
| COMMENTS_RELEASED_AWAITING_ACK | Vendor | Acknowledge exact released version |
| AWAITING_RESUBMISSION | Vendor | Confirm next round commitment under its own sample ID |
| CLOSED | Owner | Stop reminders |
| CANCELED | Owner | Stop reminders |
| PAUSED | Owner | Hold until explicitly resumed |

Risk is separate from stage. A sample can be IN_TRANSIT and AT_RISK simultaneously. Next action, next owner and due time must also be separate fields; a status label alone is not an action plan.

## Date semantics
Required in-house date is the team's approved need-by date. Planned fit date is the intended fitting. Vendor-promised ship date is a reported commitment. Vendor-reported dispatch date requires an explicit dispatch statement. Carrier acceptance is separate evidence. ETA is an estimate. Carrier delivery is not internal receipt. Receiving confirmation identifies the sample lines and quantities checked into the team.

Store ISO dates or timezone-qualified timestamps after validating raw wording. Keep raw wording and source. Preserve a revision log instead of replacing date history. Do not fill missing dates with today's date. Ambiguous dates such as 11/12, 'Friday' without clear context or 'next week' require clarification when timing matters. A date-only ship commitment is not overdue at 9 am solely because that day has begun.

## Fit comments and physical returns
The designer fits/evaluates the sample and authorizes fit outcome and comments. The agent may package the exact released comment document and draft the transmittal after release verification. Acknowledgment must identify the version or be unambiguously tied to the correct release thread. 'Noted' on a mixed thread may need confirmation. Request a next-round commitment when appropriate.

If physical sample return is required, create a separate outbound shipment record with direction TO_VENDOR, contents, return authorization, courier/tracking and vendor receipt. Do not reuse the inbound tracking fields, undo in-house receipt or assume that comment release proves physical return. No courier bookings or freight commitments in this pilot.

## Identity and quantity
Use one immutable sample_id per tracked sample line/round. Matching attributes include season, vendor, style, color, sample type, round and size. A multi-size request may need separate lines. A consolidated shipment links many lines through shipment contents; split shipments can link several shipments to one line. Retain expected, dispatched and received quantities. A partial receipt must not close the remaining quantity. Never use conversation ID alone as sample identity.

## Internal dependencies and exceptions
- Comments not yet released: internal reminder, not vendor follow-up.
- Shipment late for fit: escalate internally and ask for a recovery proposal; no acceptance of new deadline.
- Customs, missing carton or wrong size: log the reported issue and route to the responsible owner.
- POM, grade, construction, materials, testing or fit questions: designer decision.
- Freight upgrade, charge, PO or bulk delivery change: authorized commercial/logistics decision.
- Vendor asks to send to a new address: hold the recipient change for directory approval.
- Lost access, stale export or missed mail event: hold affected actions and reconcile; never infer completion.

## Email patterns for approved use
Populate only verified facts. Omit unavailable clauses rather than send placeholders. Keep the current appropriate subject/thread. Use exact style/color/type/round labels and the permitted signature. These patterns are drafting references, not permission to send.

Ship commitment request: 'Please confirm the dispatch date and expected arrival at our office for [identified sample]. Our required in-house date is [approved date, if present]. Please flag any blocker affecting that timing.'

Dispatch request: 'Please confirm whether [identified sample] has been handed to the carrier. If dispatched, please send the dispatch date, courier, tracking reference and expected arrival. If pending, please confirm the revised dispatch proposal and blocker.'

Incomplete reply: 'Thank you for confirming [fact]. Please also confirm [unanswered item] for [identified sample].' Do not repeat questions the vendor answered.

Comments acknowledgment request: 'Please confirm receipt of the released fit comments [verified version/date] for [identified sample] and advise the proposed dispatch date for the next sample round.'

Delay acknowledgment: 'Thank you for the update. I have recorded your proposed arrival date of [date] for review by our technical design team. Please confirm [missing recovery detail].' Never say a new deadline is accepted without approval.

Physical return status: 'Please confirm receipt of the returned sample [identity], dispatched under [verified return tracking].' Use only when return is authorized and the follow-up is due.

## Daily digest
Group by decisions needed, fit/in-house risks, routine work completed and failures. Each exception shows sample ID, source link/ID, owner and next action. Do not send a second copy of every vendor message to the designer. Report action outcomes from the durable log, not from the model's intention.
