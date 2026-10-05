# Test Plan: Salesforce Core Authentication & Access Control

**Document Identifier:** `TP-SFDC-AUTH-001`  
**Application Under Test (AUT):** Salesforce CRM Login Portal  
**Target Environment / URL:** [https://login.salesforce.com/](https://login.salesforce.com/)  
**Template Standard:** RICE-POT QA Framework (Profile B — Test Plan)  
**Author / Role:** Senior QA Lead  
**Status:** Approved / Ready for Execution  

---

## 1. Test Plan ID and Title

- **Test Plan ID:** `TP-SFDC-AUTH-001`
- **Title:** Salesforce CRM Core Authentication, Field Validation, and Cross-Browser Test Plan

---

## 2. Objective and References

### 2.1 Objective
The primary objective of this test plan is to rigorously validate the functional correctness, input validation integrity, negative boundary resilience, error handling, and account lockout defenses for the standard Salesforce login portal (`https://login.salesforce.com/`) through structured manual testing across targeted modern browsers.

### 2.2 References
1. [Salesforce Help: Standard Login & Security Guidelines](https://help.salesforce.com/)
2. OWASP Top 10 (2021) — A07: Identification and Authentication Failures
3. IEEE 829 Standard for Software and System Test Documentation
4. [RICE-POT QA Generic Template](file:///c:/Users/Sukhmani/Projects/PlaywrightMyfolder/00_chapter_Prompt_Eng/04_RICE_POT_Generic_QA_Template.md)

---

## 3. In Scope and Out of Scope

### 3.1 In Scope (Core Authentication Only)
- **Valid Login Flow:** Authentication with valid username and password resulting in successful session generation and dashboard navigation.
- **Invalid Credential Handling:** Verifying appropriate generic, user-safe error messaging for incorrect passwords or non-existent usernames (`Please check your username and password...`).
- **Input Validation & Boundary Testing:**
  - Empty username / empty password handling.
  - Username format constraints (handling missing `@`, spaces, special characters, max-length boundaries).
  - Password field masking (`type="password"`) and clipboard paste behavior.
- **Account Lockout Controls:** Validating account lockout / temporary freeze behavior after consecutive failed login attempts (per Salesforce security baseline).
- **Session & UI Integrity:** Verification of page rendering, button state transitions, keyboard navigation (Tab, Enter key submission), and clear error banner states.
- **Cross-Browser Verification:** Validating consistency and visual layout across Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari.

### 3.2 Out of Scope
- Single Sign-On (SSO / SAML 2.0 / Federated IdP login).
- Multi-Factor Authentication (MFA / Salesforce Authenticator / SMS verification prompts).
- Self-service password recovery ("Forgot Your Password?" reset email delivery).
- Custom Domain logins (`*.my.salesforce.com`).
- Performance, load, and concurrency stress testing.
- Automated API authentication endpoints (`/services/oauth2/token`).

---

## 4. Requirements and Planned Coverage

| Requirement ID | Requirement Description | Priority | Test Type | Planned Coverage |
| :--- | :--- | :--- | :--- | :--- |
| **REQ-AUTH-01** | User shall successfully authenticate with active credentials and navigate to the landing page | P1 (Critical) | Functional / Positive | Valid login, session cookie generation, landing page redirect |
| **REQ-AUTH-02** | System shall reject authentication with invalid password and display secure error banner | P1 (Critical) | Negative / Security | Invalid password, generic error message display |
| **REQ-AUTH-03** | System shall validate mandatory input fields when attempting submission | P2 (High) | Validation / Boundary | Blank username, blank password, both blank |
| **REQ-AUTH-04** | Username field shall accept standard email-formatted usernames and handle syntax violations | P2 (High) | Validation / Functional | Missing `@` symbol, leading/trailing whitespaces, special characters |
| **REQ-AUTH-05** | System shall enforce account lockout or captcha challenge after specified failed attempts | P1 (Critical) | Security / Negative | Threshold testing (multiple invalid attempts), lockout message validation |
| **REQ-AUTH-06** | Authentication interface shall render correctly and behave identically across all supported browsers | P2 (High) | Compatibility | Cross-browser execution matrix across Chrome, Edge, Firefox, Safari |

---

## 5. Test Approach, Levels, and Types

### 5.1 Test Levels
- **System Testing:** End-to-end verification of the login interface directly interacting with Salesforce authentication services.
- **UI/UX Acceptance:** Ensuring accessibility standards, tab order navigation, and responsive rendering.

### 5.2 Test Types
- **Manual Functional Testing:** Verification of positive authentication paths, navigation flows, and field responses.
- **Negative & Boundary Value Testing:** Malformed inputs, exceeding character boundaries, and unexpected keystroke combinations.
- **Security Interface Testing:** Verification of credential masking, resistance to cleartext leaks, and anti-enumeration generic error responses.
- **Cross-Browser Compatibility Matrix:**
  - Google Chrome (Latest stable, Windows / macOS)
  - Microsoft Edge (Latest Chromium, Windows)
  - Mozilla Firefox (Latest stable, Windows / macOS)
  - Apple Safari (Latest stable, macOS / iOS)

---

## 6. Environment, Tools, Access, and Test Data

### 6.1 Environment and Portal Access
- **Target URL:** `https://login.salesforce.com/`
- **Network Requirements:** Standard HTTPS port 443 with direct internet access.

### 6.2 Tooling
- **Test Management:** Jira / TestRail for test case repository and execution tracking.
- **Browser Developer Tools:** Chrome/Edge DevTools (Network tab for HTTP status inspection, Console for JavaScript errors).
- **Screen Capture:** Snagit / OS Native tools for defect evidence capture.

### 6.3 Test Data Requirements
| Data Type | Identifier / Format | Purpose |
| :--- | :--- | :--- |
| **Valid Active User** | `qa.testuser@enterprise.salesforce.test` | Verify standard login success path |
| **Invalid Password User** | `qa.testuser@enterprise.salesforce.test` + `WrongPwd#2026` | Verify rejection & generic error notice |
| **Non-Existent User** | `unregistered_user_99@invalidcorp.com` | Verify user enumeration resistance |
| **Malformed Username** | `testuser_without_domain`, `user@domain`, ` ` | Verify username format boundary behavior |
| **Lockout Candidate Account** | `locked_user_test@enterprise.salesforce.test` | Verify account freeze upon threshold breaches |

---

## 7. Entry and Exit Criteria

### 7.1 Entry Criteria
1. The target URL (`https://login.salesforce.com/`) is online and returning HTTP `200 OK`.
2. Dedicated test accounts (Active, Locked, and Test-Domain users) are provisioned and accessible.
3. Test plan and test cases have completed peer review and received sign-off.
4. Target browsers (Chrome, Edge, Firefox, Safari) are updated to current stable builds.

### 7.2 Exit Criteria
1. 100% of planned test cases have been executed and logged.
2. 0 Critical (Severity 1) or Major (Severity 2) defects remain open.
3. Minimum 95% overall test case pass rate achieved.
4. All identified minor defects are documented with clear reproduction steps and assigned for triage.
5. Final Test Execution Summary Report is compiled and distributed to stakeholders.

---

## 8. Roles, Responsibilities, Estimates, and Schedule

### 8.1 Roles and Responsibilities
- **QA Lead:** Author test plan, coordinate test data readiness, oversee execution, and compile final report.
- **Senior QA Engineer(s):** Execute test cases, capture evidence, log defects, and re-test bug fixes.
- **Salesforce Administrator:** Provision/reset test accounts and configure lockout policy settings.

### 8.2 Effort Estimates & Schedule
| Phase | Activity | Estimated Effort | Schedule / Timeline |
| :--- | :--- | :--- | :--- |
| **Phase 1** | Test Plan Authoring & Review | 0.5 Day | Day 1 |
| **Phase 2** | Test Data Setup & Verification | 0.5 Day | Day 1 |
| **Phase 3** | Test Case Authoring (Functional & Boundary) | 1.0 Day | Day 2 |
| **Phase 4** | Execution: Chrome & Edge | 1.0 Day | Day 3 |
| **Phase 5** | Execution: Firefox & Safari | 1.0 Day | Day 4 |
| **Phase 6** | Defect Re-testing & Closure Reporting | 0.5 Day | Day 5 |

---

## 9. Defect Management and Reporting

### 9.1 Defect Severity Classification
- **S1 — Critical:** Complete blocker (e.g., login portal unreachable, valid credentials fail for all users, credentials exposed in plaintext in URL).
- **S2 — Major:** Key functionality broken (e.g., system crashes upon blank submission, lockout mechanism fails to trigger).
- **S3 — Medium:** Secondary functional issue (e.g., error message wording incorrect, layout misaligned on Firefox).
- **S4 — Minor:** Cosmetic or minor UI inconsistency (e.g., minor padding mismatch, favicon missing).

### 9.2 Defect Logging Protocol
Each defect logged in Jira/TestRail must include:
`Defect ID | Summary | Environment & Browser | Preconditions | Test Data | Steps to Reproduce | Expected Result | Actual Result | Screenshot/Video | Severity | Priority`

---

## 10. Risks, Dependencies, Assumptions, and Open Questions

### 10.1 Risks and Mitigation
| Risk Description | Impact | Likelihood | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **Risk 1:** Rapid failed logins trigger unexpected bot/CAPTCHA blocking test IPs | High | High | Coordinate testing windows, request IP whitelisting or staging rate-limit exemptions |
| **Risk 2:** Test credentials expire or trigger unexpected MFA challenges | High | Medium | Confirm with Salesforce Admin that test profile exemptions or sandbox settings are applied |
| **Risk 3:** Production changes pushed to login portal during testing window | Medium | Low | Monitor release schedules and conduct execution during stable window |

### 10.2 Assumptions
- Testing is performed on standard production endpoint `https://login.salesforce.com/`.
- No Single Sign-On (SSO) or corporate custom federations are enforced on the selected test accounts.
- Desktop browser display resolutions are standardized at 1920x1080 for desktop validation.

### 10.3 Open Questions
- What is the exact configured failed login threshold for the organization test domain (typically 3, 5, or 10 attempts)?
- Does the organization enforce IP restriction rules on the target test profiles?

---

## 11. Suspension and Resumption Criteria

### 11.1 Suspension Criteria
- Total downtime or 5xx server errors on `https://login.salesforce.com/`.
- Test accounts become globally locked out with no administrator availability for reset.
- Critical blocking defect preventing form submission across all browsers.

### 11.2 Resumption Criteria
- Restoration of service with verified HTTP 200 responses.
- Test accounts verified unlocked and passwords reset to baseline.
- Verification pass of basic smoke test (REQ-AUTH-01).

---

## 12. Test Deliverables and Approval

### 12.1 Deliverables
1. **Approved Test Plan:** `TP-SFDC-AUTH-001` (this document).
2. **Test Case Suite:** Formatted test cases with step-by-step actions and expected results.
3. **Execution Logs & Defect Reports:** Complete test run evidence with linked defect tickets.
4. **Final Test Summary Sign-off:** Executive sign-off document summarizing pass rate, defect metrics, and production readiness.

### 12.2 Sign-off Approval
| Role | Name | Signature | Date |
| :--- | :--- | :--- | :--- |
| **QA Lead** | Senior QA Engineer | _[Pending Sign-off]_ | 2026-10-05 |
| **Product / Security Owner** | Salesforce Test Owner | _[Pending Sign-off]_ | 2026-10-05 |
