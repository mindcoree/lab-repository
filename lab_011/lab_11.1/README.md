# lab_11.1

Expo React Native app with a profile card and a contact form.

## Implemented Features

- Profile card with:
- avatar image
- name and role
- short bio
- Contact form with fields:
- email
- phone
- message
- Submit button state:
- disabled while required fields are empty
- enabled when all fields are filled
- Success message after submit

## Tech Stack

- Expo
- React Native
- TypeScript

## Requirements

- Node.js 18+
- npm

## Install

```bash
npm install
```

## Run

```bash
npm run start
```

Run on specific platforms:

```bash
npm run web
npm run android
npm run ios
```

## Validate

```bash
npx tsc --noEmit
npx expo-doctor
```

## Project Structure

- App.tsx - root layout
- src/components/ProfileCard.tsx - profile card UI
- src/components/ContactSection.tsx - contact form with local state
