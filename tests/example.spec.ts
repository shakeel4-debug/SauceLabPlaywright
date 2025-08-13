import { test, expect } from '@playwright/test';

test('Go to sauce demo and verify the title',async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
});

test('Go to sauce demo and verify error message in invalid credentials',async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  await page.locator("#user-name").type('standard_user');
  await page.locator('#password').type('secret');
  await page.locator('#login-button').click();
  await expect(page.locator("[data-test='error-button']")).toBeVisible();

})

test('Go to sauce demo and verify error message when user do not have data',async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  await page.locator("#user-name").click();
  await page.locator('#password').click();
  await page.locator('#login-button').click();
  await expect(page.locator("[data-test='error']")).toBeVisible();

})



test('Login with valid credentials on sauce demo',async({page})=>{

  await page.goto('https://www.saucedemo.com/');
  await page.locator("#user-name").type('standard_user');
  await page.locator('#password').type('secret_sauce');
  await page.locator('#login-button').click();
  await expect( page.locator("[data-test='shopping-cart-link']")).toBeVisible;

});

test('Login and logout with sauce demo',async({page})=>{

  await page.goto('https://www.saucedemo.com/');
  await page.locator("#user-name").type('standard_user');
  await page.locator('#password').type('secret_sauce');
  await page.locator('#login-button').click();
  await page.locator("#react-burger-menu-btn").click();
  await page.locator('#logout_sidebar_link').click();
  await expect(page.locator('#login-button')).toBeVisible();

});


test('Login and checkout',async({page})=>{

  await page.goto('https://www.saucedemo.com/');
  await page.locator("#user-name").type('standard_user');
  await page.locator('#password').type('secret_sauce');
  await page.locator('#login-button').click();
  // await expect(page).toHaveURL('inventory');
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator("[data-test='shopping-cart-link']").click();
  await page.locator('#checkout').click();
  await page.locator('#first-name').type('Ahmed');
  await page.locator('#last-name').type('Ali');
  await page.locator('#postal-code').type('72010');
  await page.locator('#continue').click();
  await page.locator('#finish').click();
  await expect(page.locator('#back-to-products')).toBeVisible();
});

test('Ensures products can be added to the shopping cart.',async({page})=>{

  await page.goto('https://www.saucedemo.com/');
  await page.locator("#user-name").type('standard_user');
  await page.locator('#password').type('secret_sauce');
  await page.locator('#login-button').click();
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  


});





// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
