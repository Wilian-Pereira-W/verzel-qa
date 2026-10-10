import { Page } from '@playwright/test';

export async function openStorePage(page: Page) {
  await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');
}

export async function addProductToCart(page: Page, productId: string) {
  await page
    .locator('article', { has: page.locator(`#nome-${productId}`) })
    .getByRole('button', { name: 'Adicionar ao carrinho' })
    .click();
}
