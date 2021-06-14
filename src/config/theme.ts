export interface ITheme {
  [key: string]: {
    bgColor?: string,
    textColor?: string
  }
}

const THEME: ITheme = {
  dark: {
    bgColor: "#000",
    textColor: "#fff"
  },
  light: {
    bgColor: "#fff",
    textColor: "#333"
  }
}

export default THEME;