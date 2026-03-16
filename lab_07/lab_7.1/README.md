# Лабораторная работа 7.1

Проект на **React + TypeScript + Vite**, демонстрирующий:
- маршрутизацию через `react-router-dom`;
- ленивую загрузку страниц (`React.lazy`);
- отображение загрузчика через `Suspense` fallback.

## Реализовано

- Страница `Home` подключена обычным импортом.
- Страницы `Dashboard`, `Settings`, `Profile` подключаются динамически.
- В `App.tsx` используется `Suspense` с компонентом `LoadingSpinner`.
- Добавлена навигация между маршрутами:
  - `/`
  - `/dashboard`
  - `/settings`
  - `/profile`

## Технологии

- React 19
- TypeScript
- Vite
- React Router DOM
- ESLint

## Запуск проекта

```bash
npm install
npm run dev
```

По умолчанию приложение доступно по адресу: `http://localhost:5173`.

## Доступные скрипты

- `npm run dev` — запуск в режиме разработки
- `npm run build` — сборка проекта
- `npm run preview` — предпросмотр production-сборки
- `npm run lint` — проверка линтером

## Структура `src`

```text
src/
├─ components/
│  ├─ LoadingSpinner.tsx
│  └─ Spinner.css
├─ pages/
│  ├─ Home.tsx
│  ├─ Dashboard.tsx
│  ├─ Settings.tsx
│  └─ Profile.tsx
├─ App.tsx
└─ main.tsx
```
