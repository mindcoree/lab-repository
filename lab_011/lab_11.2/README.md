# lab_11.2

Expo React Native app with product catalog and stack navigation.

## Implemented Features

- Product list screen:
- FlatList rendering from local mock data
- pull-to-refresh interaction
- Product list item card with image, category, and price
- Product detail screen:
- large product image and description
- Add to Cart button
- visual state change after adding (button color/text)
- confirmation alert after adding
- Navigation:
- Native Stack Navigator
- dynamic detail screen title from selected product

## Tech Stack

- Expo
- React Native
- React Navigation (native stack)
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

- App.tsx - navigation container and stack setup
- src/data/products.ts - product model and mock data
- src/components/ProductItem.tsx - product card used in list
- src/screens/ProductListScreen.tsx - catalog screen with refresh control
- src/screens/ProductDetailScreen.tsx - product details and add-to-cart interaction
