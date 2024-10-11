import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";  // Corrigi os imports para incluir Text e ActivityIndicator

const FontContext = createContext({});

export function FontProvider({ children }) {
    const [loaded, error] = useFonts({
        regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
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
        <FontContext.Provider value={{loaded}}>
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
