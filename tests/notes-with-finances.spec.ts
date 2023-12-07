import { test, expect } from '@playwright/test'
import dayjs from 'dayjs'
import { DATE_FORMAT } from '../src/shared/helpers/date-helpers'
import { makeString } from './test-helpers'

const user = {
  login: makeString(10),
  password: makeString(10)
}

const note = {
  title: 'Заголовок 1',
  date: dayjs().format(DATE_FORMAT),
  text: 'Текст заметки 1'
}

const singularOperation = {
  title: 'Название 1',
  sum: '1000',
  income: true,
  date: note.date
}

const host = 'http://localhost:5173'

test('Notes-to-finances integration', async ({ page }) => {
  // зарегистрироваться
  await page.goto(`${host}/register`);
  await page.getByLabel('Логин').click();
  await page.getByLabel('Логин').fill(user.login);
  await page.getByLabel('Пароль').click();
  await page.getByLabel('Пароль').fill(user.password);
  await page.getByRole('button', { name: 'Регистрация' }).click();

  // перейти в Заметки
  await page.waitForURL(`${host}`)
  await page.waitForURL(`${host}/notes`, { waitUntil: 'networkidle' })

  // проверка, что график целей пустой
  await page.goto(`${host}/goals`)
  await page.waitForURL(`${host}/goals`)
  const chart = page.getByRole('region').locator('path').first()
  expect(chart).not.toBeVisible()
  await page.goto(`${host}/notes`)
  await page.waitForURL(`${host}/notes`, { waitUntil: 'networkidle' })

  // создать новую заметку
  await page.locator('#root div').getByTestId('notes-calendar-page-add-button').click()
  await page.getByLabel('Заголовок').click();
  await page.getByLabel('Заголовок').fill(note.title);
  await page.locator('.ant-picker-input').click();
  await page.getByText('Сегодня').click();
  await page.getByLabel('Текст').click();
  await page.getByLabel('Текст').fill(note.text);

  // добавить фин. операцию в заметку
  await page.getByRole('tab', { name: 'Финансы' }).click();
  await page.getByLabel('Название').click();
  await page.getByLabel('Название').fill(singularOperation.title);
  await page.getByLabel('Сумма').click();
  await page.getByLabel('Сумма').fill(singularOperation.sum);
  await page.locator('span').filter({ hasText: 'Доход' }).click();
  await page.getByRole('textbox', { name: 'Выберите дату' }).click();
  await page.getByText('Сегодня').nth(1).click();
  await page.getByRole('button', { name: 'Добавить операцию' }).click();

  // проверить, что фин. операция отобразилась в форме создания
  const titleCell = await page.getByRole('cell', { name: singularOperation.title });
  expect(titleCell).toBeVisible();

  // создать заметку
  await page.getByRole('tab', { name: 'Заметка' }).click();
  await page.getByRole('button', { name: 'Создать' }).click();

  // проверка, что заметка отобразилась в календаре
  await page.getByRole('button', { name: 'Заметки' }).click();
  await page.waitForURL(`${host}/notes`, { waitUntil: 'networkidle' })
  await page.getByTitle(note.date);
  const noteButton = await page.getByRole('tab', { name: note.title })
  expect(noteButton).toBeVisible()

  // проверка, что добавленная операция повлияла на итог фин. операций
  await page.getByRole('button', { name: 'Финансы' }).click();
  await page.waitForURL(`${host}/budget`, { waitUntil: 'networkidle' })
  await page.waitForFunction(() => !!document.querySelector('.ant-table'))
  const cell = await page.getByRole('cell', { name: '1000' }).first();
  expect(cell).toBeVisible()

  // проверка, что появился график целей
  await page.getByRole('button', { name: 'Цели' }).click();
  await page.waitForURL(`${host}/goals`, { waitUntil: 'load' })
  await page.waitForFunction(() => !!document.querySelector('.ant-tooltip-inner'))
  const updatedChart = page.getByRole('region').locator('path').nth(1)
  expect(updatedChart).toBeVisible()
})