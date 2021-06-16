export interface ITheme {
  [key: string]: {
    bgColor?: string,
    textColor?: string
  }
}

const THEME: ITheme = {
  dark: {
    bgColor: "#212121",
    textColor: "#f1f1f1"
  },
  light: {
    bgColor: "#f1f1f1",
    textColor: "#212121"
  }
}

export default THEME;