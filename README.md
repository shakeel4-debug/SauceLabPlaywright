# Sauce Demo Test Cases

I have created four basic test cases of Sauce Demo in this directory. I used Page object model where each page is seperated and its locators are saved in its object.

## Test Cases Overview
1. **Login Test** – Verifies that a user can log in with valid credentials.
2. **Add to Cart Test** – Ensures products can be added to the shopping cart.
3. **Checkout Test** – Confirms that a user can successfully complete the checkout process.
4. **Logout Test** – Verifies that a user can log out successfully.

## Tools & Technologies
- Playwright
- Typescript

## How to Run
1. Clone this repository.
2. Open the project in your preferred IDE.
3. Install dependencies using Maven.
4. Run the test suite from the test runner class or via command
npx playwright test
npx playwright test --ui
npx playwright test --headed

