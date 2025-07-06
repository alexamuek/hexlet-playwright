// @ts-check
/*import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/

import { test } from '@playwright/test'
import { allure } from 'allure-playwright'
// import * as allure from 'allure-js-commons'
// import { ContentType } from 'allure-js-commons'


test('Example test', async ({ page }) => {
  await allure.step('Открытие главной страницы', async () => {
    await page.goto('https://demo.playwright.dev/todomvc/')
  })

   // Делаем скриншот и прикрепляем его автоматически
  const screenshot = await page.screenshot();
  await allure.attachment('Скриншот страницы', screenshot, 'image/png');
  // Сохраняем скриншот в папку `screenshots`
  await page.screenshot({ path: '/home/alexamuek/hexlet/hexlet-playwright/screenshots/screenshot.png' });
  console.log('Скриншот сохранён'); // 🟢 Лог 3
  // Текстовое вложение
  await allure.attachment('Текстовый файл', 'Содержимое', 'text/plain');
  /* await allure.attachmentPath('Screenshot', '/home/alexamuek/hexlet/hexlet-playwright/screens/image.png', {
    contentType: ContentType.PNG,
    fileExtension: 'png',
  })

  // Можно даже сохранять текстовые файлы
  await allure.attachment('Текстовый файл', 'Содержимое', ContentType.TEXT)*/
  await allure.step('Проверка заголовка', async () => {
    const title = await page.title()
    test.expect(title).toBe('React • TodoMVC')
  })
})

