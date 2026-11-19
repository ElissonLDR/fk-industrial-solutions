# Architecture

- Keep lead validation, attribution and webhook transport in a browser-safe module, with capture called from the shared layout effect; this preserves tracking across pages without server-side browser access.
- Deliver this form directly to the user-selected Make webhook without adding a database; the external destination owns downstream processing.