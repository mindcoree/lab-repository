# Lab 6.1 — React Router Basics (TypeScript)

Учебный проект на React + TypeScript + Vite для отработки базовой маршрутизации с помощью `react-router-dom`.

## Функциональность

- Общий layout с навигацией и `Outlet`
- Маршруты:
  - `/` — Home
  - `/courses` — список курсов
  - `/about` — страница About
  - `*` — страница 404 (NotFound)

## Структура проекта

```text
src/
  Layout.tsx
  main.tsx
  pages/
    Home.tsx
    Courses.tsx
    About.tsx
    NotFound.tsx
```

## Запуск проекта

```bash
npm install
npm run dev
```

Откройте адрес из терминала (обычно `http://localhost:5173`).

## Полезные команды

```bash
npm run build    # production build
npm run preview  # локальный просмотр production-сборки
npm run lint     # проверка eslint
```

## Технологии

- React 19
- TypeScript
- Vite
- React Router DOM
