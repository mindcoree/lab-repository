# Лабораторная работа 7.2

Расширение проекта 7.1 на **React + TypeScript + Vite** с обработкой ошибок UI:
- ленивые маршруты через `React.lazy`;
- загрузка через `Suspense`;
- защита интерфейса с помощью `ErrorBoundary`.

## Реализовано

- Динамический импорт страниц:
  - `Dashboard`
  - `Settings`
  - `Profile`
  - `BuggyPage`
- `Suspense` показывает `LoadingSpinner`, пока загружаются чанки.
- `ErrorBoundary` оборачивает `Suspense` и маршруты, перехватывая ошибки рендера.
- Компонент `ErrorFallback` отображает понятное сообщение при падении.
- Кнопка `Try Again` в `ErrorBoundary` сбрасывает состояние ошибки и повторяет рендер.
- Добавлен маршрут `/buggy` для демонстрации и теста обработки ошибок.

## Как проверить Error Boundary

1. Запустить проект.
2. Перейти на страницу **Buggy Page** (`/buggy`).
3. Убедиться, что приложение не «ломается» целиком, а показывает fallback-интерфейс.
4. Нажать **Try Again** для повторной попытки рендера.

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
│  ├─ Spinner.css
│  ├─ ErrorBoundary.tsx
│  └─ ErrorFallBack.tsx
├─ pages/
│  ├─ Home.tsx
│  ├─ Dashboard.tsx
│  ├─ Settings.tsx
│  ├─ Profile.tsx
│  └─ BuggyPage.tsx
├─ App.tsx
└─ main.tsx
```
