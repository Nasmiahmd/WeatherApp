import { Stack } from "expo-router";
import { useEffect } from "react";

import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Oswald_400Regular, Oswald_700Bold } from "@expo-google-fonts/oswald";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Oswald: Oswald_400Regular,
    Oswald_Bold: Oswald_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "Nasmi" }} />
    </Stack>
  );
}
