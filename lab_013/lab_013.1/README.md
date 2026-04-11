# lab_013.1

Expo React Native приложение с навигацией по стеку.

## Что реализовано

- Экран Home
- Экран Profile с route params
- Экран Settings
- Глобальный Dark Mode (переключается в Settings и влияет на все экраны)

## Требования

- Node.js 18+
- npm

## Установка

```bash
npm install
```

## Запуск

```bash
npm run start
```

Для платформ:

```bash
npm run web
npm run android
npm run ios
```

## Проверка

```bash
npx tsc --noEmit
npx expo-doctor
```

## Структура

- App.tsx — корневой контейнер навигации
- src/theme/ThemeContext.tsx — глобальная тема и Dark Mode
- src/navigation/types.ts — типы навигации
- src/screens/* — экраны приложения
