export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string }; // Передаем параметр userId
  Settings: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

