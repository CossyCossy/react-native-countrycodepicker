import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    success: '#B5D7B8',
    error: '#FFE1E1',
    black: "#000000",
    white: '#FFFFFF',
    blue: '#2BA2CA',
    gray:"#DCDCDC",
};

export const SIZES = {
    radius: 12,
    padding: 24,
    width,
    height
};

const appTheme = { COLORS, SIZES};

export default appTheme;