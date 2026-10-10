import { Page } from '@playwright/test';

export async function openCart(page: Page) {
  await page.getByRole('link', { name: /Carrinho/i }).click();
}
