export type ThemeUtilType = {
  [key: string]: string;
};

export interface IThemeVariables {
  header?: {
    titleColor: string;
    subTitleColor: string;
    logoAccept: boolean;
  };
  light: ThemeUtilType;
  dark: ThemeUtilType;
}
