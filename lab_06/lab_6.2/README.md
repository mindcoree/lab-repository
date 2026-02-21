# Lab 6.2 — Advanced Routing (TypeScript)

Учебный проект на React + TypeScript + Vite с расширенной маршрутизацией:
- динамические URL-параметры
- `loader` для предзагрузки данных маршрута
- обработка ошибок невалидного маршрута
- query-параметры (`useSearchParams`) для сортировки

## Реализовано

- Базовые маршруты:
  - `/` — Home
  - `/about` — About
  - `/courses` — каталог курсов
  - `/courses/:id` — детальная страница курса
  - `*` — NotFound
- Сортировка списка курсов по query-параметру `sort` (`asc`/`desc`)
- Загрузка курса по `id` через `loader`
- `errorElement` для случая, когда курс с таким `id` не найден

## Структура проекта

```text
src/
  Layout.tsx
  data.ts
  main.tsx
  pages/
    Home.tsx
    Courses.tsx
    CourseDetail.tsx
    About.tsx
    NotFound.tsx
```

## Запуск проекта

```bash
npm install
npm run dev
```

Откройте адрес из терминала (обычно `http://localhost:5173`).

## Полезные маршруты для проверки

- `/courses`
- `/courses?sort=desc`
- `/courses/1`
- `/courses/999` (проверка `errorElement`)

## Команды

```bash
npm run build
npm run preview
npm run lint
```

## Технологии

- React 19
- TypeScript
- Vite
- React Router DOM
