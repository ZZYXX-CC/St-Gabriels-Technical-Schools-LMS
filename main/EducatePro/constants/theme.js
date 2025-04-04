import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const COLORS = {
    // Primary Colors
    primary: '#1E3A8A', // Deep Blue - Primary brand color
    secondary: '#2563EB', // Royal Blue - Secondary brand color
    tertiary: "#3B82F6", // Bright Blue - Accent color
    
    // Status Colors
    success: "#10B981", // Emerald Green - Success states
    warning: "#F59E0B", // Amber - Warning states
    error: "#EF4444", // Red - Error states
    
    // Neutral Colors
    black: "#111827",
    black2: "#1F2937",
    white: "#FFFFFF",
    secondaryWhite: "#F9FAFB",
    tertiaryWhite: "#F3F4F6",
    
    // Gray Scale
    gray: "#6B7280",
    gray2: "#4B5563",
    gray3: "#374151",
    dark1: "#111827",
    dark2: "#1F2937",
    dark3: "#374151",
    
    // Additional Colors
    greyscale900: "#111827",
    greyScale800: "#1F2937",
    grayscale700: "#374151",
    grayscale400: "#9CA3AF",
    greyscale300: "#D1D5DB",
    greyscale500: "#F9FAFB",
    greyscale600: "#4B5563",
    grayscale200: "#E5E7EB",
    grayscale100: "#F3F4F6",
    
    // Transparent Colors
    tansparentPrimary: "rgba(30, 58, 138, 0.08)",
    transparentSecondary: "rgba(37, 99, 235, 0.15)",
    transparentTertiary: "rgba(59, 130, 246, 0.1)",
    transparentRed: "rgba(239, 68, 68, 0.15)",
    
    // Additional UI Colors
    blackTie: "#1F2937",
    grayTie: '#9CA3AF'
};

export const SIZES = {
    // Global SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 8,
    padding2: 12,
    padding3: 16,

    // FONTS Sizes
    largeTitle: 50,
    h1: 36,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // App Dimensions
    width,
    height,
};

export const FONTS = {
    largeTitle: { fontFamily: 'black', fontSize: SIZES.largeTitle, lineHeight: 55, color: "black" },
    h1: { fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36, color: "black" },
    h2: { fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30, color: "black" },
    h3: { fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22, color: "black" },
    h4: { fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 20 },
    body1: { fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36, color: "black" },
    body2: { fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30, color: "black" },
    body3: { fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22, color: "black" },
    body4: { fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20, color: "black" },
};



const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;