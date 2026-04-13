# Lab 9.1 - React Performance Optimization

Лабораторная работа демонстрирует базовые техники оптимизации рендеринга в React:

- memo для предотвращения лишних перерисовок компонентов
- useCallback для стабилизации ссылок на обработчики
- useMemo для кеширования тяжелых вычислений

## Технологии

- React 19
- TypeScript
- Vite
- ESLint

## Реализовано

- Дашборд с компонентами:
  - UserCard (оптимизация через memo)
  - Button (memo + useCallback в родителе)
  - AnalyticsChart (тяжелое вычисление с useMemo)
  - ActivityFeed (memo, компонент без пропсов)
- Логирование рендеров в консоль для визуальной проверки оптимизаций

## Установка и запуск

```bash
npm install
npm run dev
```

Приложение будет доступно по адресу, который покажет Vite в терминале (обычно http://localhost:5173).

## Скрипты

```bash
npm run dev      # запуск в режиме разработки
npm run build    # production-сборка
npm run preview  # предпросмотр production-сборки
npm run lint     # проверка линтером
```

## Структура

```text
src/
  components/
    ActivityFeed.tsx
    AnalyticsChart.tsx
    Button.tsx
    Dashboard.tsx
    UserCard.tsx
  App.tsx
  main.tsx
```
