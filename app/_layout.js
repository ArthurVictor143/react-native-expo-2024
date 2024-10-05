import { Stack, useSegments, router, } from "expo-router";
import { AppProvider } from "../src/hooks";
import { useAuth } from "../src/hooks/Auth";
import {useEffect }from "react";


const StackLayout = () => {
  const { user } = useAuth(); 
  const segments = useSegments(); 

  useEffect(() => {
    const inAuthGroup = segments[0] === "(protected)"; 

    
    if (!user?.authenticated && inAuthGroup) {
      router.replace("/");
    } 
    
    else if (user?.authenticated) {
      router.replace("/(protected)");
    }
  }, [user, segments]); 

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(protected)" options={{ headerShown: false }} />
    </Stack>
  );
};


export default function Layout() {
  return (
    <AppProvider>
      <StackLayout /> 
    </AppProvider>
  );
}
