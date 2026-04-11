# lab_013.2

Expo React Native приложение с Tab Navigation + Stack Navigation.

## Что реализовано

- Bottom tabs: Home, Search, Notifications, Profile
- Вложенные стеки для Home и Profile
- Экран Settings
- Глобальный Dark Mode (переключается в Settings и применяется к навигатору и экранам)

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

Если порт занят, можно явно указать другой:

```bash
npx expo start --web --port 8082
```

## Проверка

```bash
npx tsc --noEmit
npx expo-doctor
```

## Структура

- App.tsx — корневой контейнер и тема
- src/navigation/AppNavigator.tsx — tab/stack навигация
- src/theme/ThemeContext.tsx — глобальная тема
- src/screens/* — экраны приложения
