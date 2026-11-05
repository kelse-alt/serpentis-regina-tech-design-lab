# Optional full audit and automation

## Definition of done
An authorized user can see exact source coverage, correct their role/workflow, approve the intended operation and inspect actual outcomes. Read-only analysis must remain useful when advanced services are absent.

## Comprehensive history audit
Get approval for folders/history/data handling. Use the correct authenticated mailbox, supported permissions and company retention rules. Inventory accessible folders and actual message pages; follow opaque continuation links; deduplicate; checkpoint; reconcile new mail at cutoff. Track separate totals for inventory, bodies/snippets, sent history and attachments. Report unknown totals and blocked/protected content. Search counts and a recent preview are not completeness evidence. Per-folder incremental synchronization is an implementation option [M5-M6].

Default requested full-audit scope may be all authorized available history/folders, but shared/delegated/online archives need separate access checks. No preview may silently satisfy an all-history request. Metadata availability does not establish content analysis. Empty pages with continuation remain incomplete.

## Operational state
For the prompt route, context is limited to the current conversation and confirmed tool results. For an installed service, implement durable per-tenant/user/mailbox profile and queues, actual cutoffs, versioned rules/approvals and logs. Minimize stored content; support correction, retention, disconnect and deletion under company policy. Account/scope changes invalidate dependent approvals. One-off completed work does not create universal role authority.

## Scheduled follow-ups
Existing plans may include standard connector flows [M7-M8]; check the actual account/environment, policies and chosen actions. Do not promise no-cost AI inference: AI Builder, model calls, premium connectors or high-volume processing can require separate entitlements. A standard email connector does not make the native Copilot conversation an unattended AI endpoint.

Represent each follow-up as a specific unanswered request, linked project/sample, verified owner, due/trigger, policy version and stop condition. Recheck latest received/manual sent mail, authoritative records and all resolved subrequests immediately before drafting or sending. Promised dispatch and actual shipment remain different; a reply answering ETA closes that question while the sample cycle can continue.

Implement business calendar/timezone/cutoff, cooldowns/caps, holidays, escalation owner, idempotency keys, locks and pause gates outside the model. Unresolved timing or ownership holds the affected outgoing action. Do not chase an end-of-day commitment before its cutoff. User-confirmed physical completion can close that step without a mailbox reply.

## Approvals and exact actions
Separate read-scope approval, personal workflow approval, service activation and actual action authorization. Default send, Outlook-draft writes, calendar changes, mailbox moves/deletes and WIP/PLM writes off. Plan approval alone authorizes none of these. Technical/cost/freight/spec approvals remain with authorized business owners.

Before a permitted action, validate exact recipients, content, attachments/released versions, current source values, scope, policy and approval. Historical recipients and emails do not grant new recipient authority. No implicit reply-all, BCC or cross-vendor disclosure. Verify outcome, reconcile unknown sends before retry and repair post-send logging without resending.

## Review interface
Show one current priority and a compact exception queue. Completed work goes to history. Ordinary preparation assignments need no extra clarification when the addressed group and instruction are clear; ambiguous shared requests or high-impact approvals remain held. Keep citations short and accessible. Clarifications should resolve a material decision, not confirm every harmless inference.

## Evaluation
Use the v3 scenarios and preserved technical cases. Test conflicting/latest replies, sent-history gaps, direct group instructions, ambiguous shared tasks, physical step completion, partial shipments, attachment injection, wrong-account isolation, due cutoffs and duplicate retries. Tenant tests and service outcome verification are required before any claim of production readiness. Measure net admin time including corrections/review, not just generated draft count.
