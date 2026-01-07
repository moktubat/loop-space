import { COLORS, FONT, SIZING, RADIUS, Z } from "./variables";

export const theme = {
    colors: COLORS,
    font: FONT,
    sizing: SIZING,
    radius: RADIUS,
    z: Z,
};

export type AppTheme = typeof theme;