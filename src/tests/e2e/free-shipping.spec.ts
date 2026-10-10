import test, { expect, Page } from '@playwright/test';
import { addProductToCart, openStorePage } from '../support/actions/store';
import { openCart } from '../support/actions/cart';
import { applyCoupon } from '../support/actions/coupons';

async function expectShippingCost(page: Page, expectedText: string) {
  const shippingValue = page.locator('[data-valor="frete"]');
  await expect(shippingValue).toBeVisible();
  await expect(shippingValue).toHaveText(expectedText);
}

async function expectCartTotal(page: Page, expectedTotal: string) {
  const totalElement = page.locator('dd[data-valor="total"]');
  await expect(totalElement).toHaveText(expectedTotal);
}

test.beforeEach(async ({ page }) => {
  await openStorePage(page);
});

test(`should offer free shipping for orders with a subtotal of R$ 200.00 or more`, async ({
  page,
}) => {
  await addProductToCart(page, 'P007');
  await openCart(page);

  await expectShippingCost(page, 'Grátis');
});

test(`should not offer free shipping for orders with a subtotal less than R$ 200.00`, async ({
  page,
}) => {
  await addProductToCart(page, 'P003');
  await openCart(page);

  await expectShippingCost(page, 'R$ 19,90');
});

test('should calculate free shipping based on the subtotal before coupon discounts', async ({
  page,
}) => {
  await addProductToCart(page, 'P003');
  await addProductToCart(page, 'P006');
  await openCart(page);
  await expectShippingCost(page, 'Grátis');

  await applyCoupon(page, 'BEMVINDO10');

  await expectShippingCost(page, 'Grátis');
});

test('should not apply coupon discounts to the shipping cost', async ({
  page,
}) => {
  await addProductToCart(page, 'P003');
  await openCart(page);
  await expectShippingCost(page, 'R$ 19,90');

  await applyCoupon(page, 'BEMVINDO10');

  await expectCartTotal(page, 'R$ 190,81');
});
