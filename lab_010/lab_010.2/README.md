# Lab 010.2

Учебный проект на React + TypeScript + Vite с тестами, CI и деплоем на Vercel.

## Что реализовано

- Главная страница с кастомной версткой и счетчиком.
- Компонент TodoList:
  - добавление задачи;
  - переключение статуса выполнено;
  - удаление задачи;
  - подсчет общего числа и числа выполненных задач.
- Unit-тесты на Jest и Testing Library.
- CI workflow в GitHub Actions:
  - прогон тестов с coverage;
  - сборка проекта.
- Конфигурация деплоя на Vercel.

## Стек

- React 19
- TypeScript
- Vite 8
- Jest + @testing-library/react
- ESLint
- Vercel

## Запуск проекта

1. Установить зависимости:

   npm install

2. Запустить dev-сервер:

   npm run dev

3. Собрать production-версию:

   npm run build

4. Запустить preview после сборки:

   npm run preview

## Тесты

- Запуск тестов:

  npm test

- Запуск тестов с покрытием:

  npm run test:coverage

## CI

Workflow расположен в .github/workflows/ci.yml и выполняет:

- npm ci
- npm test -- --coverage
- npm run build

## Деплой на Vercel

Проект настроен через vercel.json.

- Production URL: https://lab-010-2.vercel.app

Проверка деплоя локально:

1. Проверка сборки:

   npm run build

2. Деплой в production:

   vercel --prod

## Структура

- src/components/TodoList.tsx - компонент TodoList
- src/components/TodoList.test.tsx - тесты TodoList
- .github/workflows/ci.yml - pipeline CI
- vercel.json - конфиг Vercel

## Полезно

Если build падает, проверьте:

- актуальную версию зависимостей после npm install;
- наличие terser (используется в minify);
- корректность vite.config.ts (manualChunks в формате функции для Vite 8).
