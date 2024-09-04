import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";  // Corrigi os imports para incluir Text e ActivityIndicator

const FontContext = createContext({});

export function FontProvider({ children }) {
    const [loaded, error] = useFonts({
        regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
        bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
        black: require("../../assets/fonts/Montserrat-Black.ttf"),
        semibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
        light: require("../../assets/fonts/Montserrat-Light.ttf"),
        blackItalic: require("../../assets/fonts/Montserrat-BlackItalic.ttf"),
        boldItalic: require("../../assets/fonts/Montserrat-BoldItalic.ttf"),
        extraBold: require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
        extraBoldItalic: require("../../assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
        extraLight: require("../../assets/fonts/Montserrat-ExtraLight.ttf"),
        extraLightItalic: require("../../assets/fonts/Montserrat-ExtraLightItalic.ttf"),
        italic: require("../../assets/fonts/Montserrat-Italic.ttf"),
        lightItalic: require("../../assets/fonts/Montserrat-LightItalic.ttf"),
        medium: require("../../assets/fonts/Montserrat-Medium.ttf"),
        mediumItalic: require("../../assets/fonts/Montserrat-MediumItalic.ttf"),
        semiBoldItalic: require("../../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
        thinItalic: require("../../assets/fonts/Montserrat-ThinItalic.ttf"),
        thin: require("../../assets/fonts/Montserrat-Thin.ttf")
    });

    if (!loaded && !error) {
        return (  
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 28 }}>Carregando as Fontes</Text> 
                <ActivityIndicator size={28} color="00ff00" />  
            </View>
        );
    }

    return (
        <FontContext.Provider value={{}}>
            {children}
        </FontContext.Provider>
    );
}

export function useFont() {
    const context = useContext(FontContext);
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}
