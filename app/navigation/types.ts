import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeStackParamList = {
  HomeMain: undefined;
};

export type FoldersStackParamList = {
  FoldersMain: undefined;
  FolderDetails: { id: string };
};

export type CalendarStackParamList = {
  CalendarMain: undefined;
};

export type ProfileStackParamList = {
  ProfileMain: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Folders: NavigatorScreenParams<FoldersStackParamList>;
  Calendar: undefined;
  Profile: undefined;
};
