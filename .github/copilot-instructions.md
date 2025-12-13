<!-- Copilot / AI agent instructions for the QKart Playwright test repo -->
# How to be productive in this repository

This repository contains Playwright end-to-end tests for the QKart demo site. Below are focused, actionable notes for an AI coding assistant to be immediately useful when editing, extending, or troubleshooting tests here.

1) Big picture
- Tests are Playwright Test (package: `@playwright/test`) located in `./tests` and use a simple Page Object Model under `./pages`.
- Page classes (e.g. `pages/HomePage.js`, `pages/LoginPage.js`, `pages/RegisterPage.js`) export a default class whose constructor receives Playwright's `page` object and stores commonly-used locators and actions.
- Tests import these page objects and initialize them in `test.beforeEach` (see `tests/*.spec.js`). Typical flow: open home URL -> click register/login -> interact with the page object methods.

2) Key files / patterns to reference
- `playwright.config.js` — test runner config: testDir set to `./tests`, `reporter: 'html'`, `fullyParallel: false`, `workers: 1`, `headless: false`, `trace: 'on-first-retry'`, and `projects` defines `chromium`. Use this file to understand default test behavior.
- `package.json` — currently minimal and no test scripts are defined; tests are run with the Playwright CLI (examples below).
- `pages/*.js` — each page file follows this pattern:
  - constructor(page) { this.page = page; this.someLocator = page.getByRole(...) }
  - methods perform small reusable actions, e.g. `registerUser()` returns the created username (see `pages/RegisterPage.js`).
- `tests/*.spec.js` — tests follow Playwright Test idioms: `test.beforeEach`, `test('name', async ({ page }) => { ... })` and import page objects at the top.

3) Important conventions discovered in code (use these exactly)
- Locator APIs: code uses Playwright's `getByRole`, `getByPlaceholder` heavily (do not introduce XPath or fragile CSS selectors unless necessary).
- Page methods are small and return values when needed (example: `registerUser()` in `pages/RegisterPage.js` returns a generated username string).
- Tests rely on `page.pause()` for manual debugging during development — treat `page.pause()` as an intentional dev breakpoint when you see it.
- URL under test: `https://crio-qkart-frontend-qa.vercel.app/` (referenced in `pages/HomePage.js`).

4) How to run tests locally (examples)
- Run all tests (uses local Playwright installation):
  npx playwright test
- Run a single spec file (use the repo root path):
  npx playwright test tests/LoginTest.spec.js
- Open the HTML report after a run:
  npx playwright show-report

Notes: `package.json` currently has no `scripts` entry for tests; CI or maintainers may prefer adding a `test` script like `playwright test`.

5) Quick warnings and environment quirks
- The code uses ES module `import` syntax (e.g. `import { test, expect } from '@playwright/test'`) while `package.json` currently sets `type: "commonjs"`. That mismatch can cause runtime/module resolution errors in Node — validate `package.json` or the Node/Playwright runner in your environment if imports fail.
- `playwright.config.js` sets `headless: false` and `launchOptions.args: ['--start-maximized']` — CI runs may want `headless: true` or environment-specific overrides. Use Playwright CLI flags or a project-specific config for CI.

6) Typical change patterns and small edits that are safe to suggest or implement
- Add a test script to `package.json` (non-breaking):
  "scripts": { "test": "playwright test" }
- When adding new pages, follow the existing POM pattern: constructor(page) + small action methods + export default class.
- When generating usernames in tests, follow `RegisterPage.registerUser()` approach (random integer suffix) so tests remain idempotent.

7) Debugging tips
- Use `page.pause()` from tests to open Playwright Inspector (already used in `tests/LoginTest.spec.js`).
- To capture traces on failure, the config enables `trace: 'on-first-retry'` — reproduce failing test with `--retries=1` to generate a trace.

8) Files to look at for examples or to extend
- `pages/RegisterPage.js` — shows how tests generate a username and return it.
- `tests/LoginTest.spec.js` — shows the typical test flow and `page.pause()` usage.
- `playwright.config.js` — change this to tune parallelism, headless, or browser projects.

If any of these areas need clarification (for example: CI commands, expected Node version, or desired package.json scripts), tell me what you want me to add or confirm and I'll iterate.
