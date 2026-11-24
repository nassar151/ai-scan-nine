# ai-scan-nine

An intentionally vulnerable Express app for demoing [AI Scan Review](https://github.com/nassar151/ai-scan-review). **Do not deploy.** The signing key is fake.

What a scan should find (9 findings):

- Code (4): SQL injection, path traversal, command injection and cross-site scripting.
- Secret (1): a hard-coded JWT signing key.
- Packages (4): axios, jsonwebtoken, moment and lodash.

Expected AI reachability:

- **Reachable:** all code issues, the secret, axios (`/tools/preview` fetches a user URL), jsonwebtoken (`/auth/me` verifies a user token) and moment (`/tools/time` passes a user locale to `moment.locale`).
- **Not reachable:** lodash. Its advisories cover `_.template`, `_.unset` and similar functions, but the app only calls `_.get`.
