import { Stack } from "expo-router";
import { AppProvider } from "../src/hooks";

export default function Layout() {
    return (
    <AppProvider>
        <Stack />
        </AppProvider>
        

        );
        
}