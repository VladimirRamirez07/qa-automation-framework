# QA Automation Framework 🚀

![CI/CD Pipeline](https://github.com/VladimirRamirez07/qa-automation-framework/actions/workflows/qa-pipeline.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-v24-green.svg)
![Playwright](https://img.shields.io/badge/playwright-v1.52-orange.svg)

A complete QA automation framework built from scratch, covering E2E testing, API testing, performance testing, and CI/CD integration.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev/) | E2E testing across Chromium, Firefox and WebKit |
| [Newman](https://learning.postman.com/docs/collections/using-newman-cli/command-line-integration-with-newman/) | API testing via Postman collections |
| [k6](https://k6.io/) | Performance, load and stress testing |
| [GitHub Actions](https://github.com/features/actions) | CI/CD pipeline automation |
| [Allure](https://allurereport.org/) | Test reporting |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |

---

## 📁 Project Structure
qa-automation-framework/
├── .github/
│   └── workflows/
│       └── qa-pipeline.yml       # CI/CD pipeline
├── api/
│   ├── collections/
│   │   └── api-tests.json        # Newman test collection
│   └── environments/
│       └── env.json              # Environment variables
├── e2e/
│   ├── fixtures/                 # Test data
│   ├── pages/                    # Page Object Models
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   └── ProductsPage.js
│   └── tests/                    # Test suites
│       ├── home.spec.js
│       ├── login.spec.js
│       └── products.spec.js
├── performance/
│   ├── load-test.js              # Normal load simulation
│   ├── spike-test.js             # Spike traffic testing
│   └── stress-test.js            # Stress testing
├── .env.example                  # Environment template
├── package.json
└── playwright.config.js
---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- k6 installed globally → [Install k6](https://k6.io/docs/get-started/installation/)

### Installation

```bash
git clone https://github.com/VladimirRamirez07/qa-automation-framework.git
cd qa-automation-framework
npm install
npx playwright install
```

### Environment Setup

Create a `.env` file in the root:

```env
BASE_URL=https://automationexercise.com
USER_EMAIL=your@email.com
USER_PASSWORD=yourpassword
API_BASE_URL=https://automationexercise.com/api
```

---

## 🧪 Running Tests

### E2E Tests
```bash
# Run all tests headless
npm run test:e2e

# Run with browser visible
npm run test:e2e:headed
```

### API Tests
```bash
npm run test:api
```

### Performance Tests
```bash
# Load test - normal traffic
k6 run performance/load-test.js

# Stress test - push to the limit
k6 run performance/stress-test.js

# Spike test - sudden traffic burst
k6 run performance/spike-test.js
```

### Run Everything
```bash
npm run test:all
```

---

## 📊 Reports

### Allure Report
```bash
npm run report:generate
npm run report:open
```

### Playwright HTML Report
```bash
npx playwright show-report reports/html-report
```

---

## 🔄 CI/CD Pipeline

Every push to `main` automatically triggers 3 parallel jobs:
push to main
│
├── E2E Tests (Playwright)
│     └── Chromium + Firefox + WebKit
│
├── API Tests (Newman)
│     └── 14 assertions across 5 requests
│
└── Performance Tests (k6)
└── Load test with 10 virtual users
---

## 📈 Test Results

| Suite | Tests | Status |
|-------|-------|--------|
| E2E - Home Page | 4 | ✅ Passing |
| E2E - Login Page | 3 | ✅ Passing |
| E2E - Products Page | 5 | ✅ Passing |
| API - Products | 3 | ✅ Passing |
| API - Brands | 1 | ✅ Passing |
| API - Auth | 1 | ✅ Passing |
| Performance - Load | 1536 checks | ✅ 100% |

---

## 👨‍💻 Author

**Vladimir Ramirez**  
GitHub: [@VladimirRamirez07](https://github.com/VladimirRamirez07)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).