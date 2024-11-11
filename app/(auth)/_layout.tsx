import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import React from "react";
import { CardProvider } from "@/context/cardContext";
import { Stack } from "expo-router";
import { useColorScheme } from "@/hooks/useColorScheme";

function authstack() {
  const colorScheme = useColorScheme();
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
}

export default authstack;

