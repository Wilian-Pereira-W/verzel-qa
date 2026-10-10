import test, { expect, Page } from '@playwright/test';
import { addProductToCart, openStorePage } from '../support/actions/store';
import { openCart } from '../support/actions/cart';
import { applyCoupon } from '../support/actions/coupons';

async function expectCouponMessage(page: Page, message: string) {
  await expect(page.locator('#mensagem-cupom')).toHaveText(message);
}

test.beforeEach(async ({ page }) => {
  await openStorePage(page);
});

test('should apply a valid coupon code', async ({ page }) => {
  await addProductToCart(page, 'P001');

  await openCart(page);

  await applyCoupon(page, 'BEMVINDO10');

  await expect(page.getByText('Cupom BEMVINDO10 aplicado.')).toBeVisible();
});

test('should not apply an expired coupon code', async ({ page }) => {
  await addProductToCart(page, 'P001');

  await openCart(page);

  await applyCoupon(page, 'VERAO2026');

  await expectCouponMessage(page, 'Cupom expirado.');
});

test('should display the correct discount amount', async ({ page }) => {
  await addProductToCart(page, 'P001');

  await openCart(page);

  await applyCoupon(page, 'BEMVINDO10');

  await expect(page.locator('[data-valor="desconto"]')).toBeVisible();
  await expect(page.locator('[data-valor="desconto"]')).toHaveText('- R$ 5,99');
});

test('should not apply an invalid coupon code', async ({ page }) => {
  await addProductToCart(page, 'P001');

  await openCart(page);

  await applyCoupon(page, 'INVALIDCOUPON');

  await expectCouponMessage(page, 'Cupom inválido.');
});
