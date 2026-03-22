# Lab 010.1

Учебный проект на React + TypeScript + Vite.

## Что реализовано

- Приложение с базовым экраном и кнопкой-счетчиком.
- Компонент TodoList:
  - добавление задачи;
  - переключение статуса выполнено;
  - удаление задачи;
  - отображение счетчика общего количества и выполненных задач.
- Unit-тесты на Jest и Testing Library для основных сценариев TodoList.

## Стек

- React 19
- TypeScript
- Vite 8
- Jest + @testing-library/react
- ESLint

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

## Структура

- src/components/TodoList.tsx - компонент TodoList
- src/components/TodoList.test.tsx - тесты для TodoList
- src/App.tsx - основной экран приложения

## Полезно

Если сборка не проходит, проверьте:

- версию Node.js (рекомендуется 20+);
- наличие установленного node_modules;
- отсутствие ошибок TypeScript и ESLint.
