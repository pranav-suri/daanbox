import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { auth } from "@/firebaseConfig";
import { useColorScheme } from "@/hooks/useColorScheme";
import { CardProvider } from "@/context/cardContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [logged, setlogged] = useState(true);
  useEffect(() => {
    if (loaded) {
      setTimeout(() => {}, 2000);
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CardProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <>
          <Stack screenOptions={{ headerShown: false }} />
          {logged ? <Redirect href={"/(auth)/login"} /> : <Redirect href={"/(tabs)"} />}
        </>
      </ThemeProvider>
    </CardProvider>
    // );
  );
}

