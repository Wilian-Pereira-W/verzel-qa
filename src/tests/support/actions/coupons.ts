import { expect, Page } from '@playwright/test';

export async function applyCoupon(page: Page, couponCode: string) {
  await page.fill('#campo-cupom', couponCode);
  await page.getByRole('button', { name: 'Aplicar Cupom' }).click();
}
