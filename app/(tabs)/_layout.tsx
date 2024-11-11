import { Tabs } from "expo-router";
import React, { useEffect } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useRouter } from "expo-router";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "home" : "home-outline"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "code-slash" : "code-slash-outline"} color={color} />
          ),
        }}
      />
      {/* Login Page Tab */}
      {/* <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "log-in" : "log-in-outline"} color={color} />
          ),
        }}
      /> */}
      {/* Donate Page Tab */}
      <Tabs.Screen
        name="donate"
        options={{
          title: "Donate",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "heart" : "heart-outline"} color={color} />
          ),
        }}
      />
      {/* Signup Page Tab */}
      {/* <Tabs.Screen
        name="signup"
        options={{
          title: "Signup",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "person-add" : "person-add-outline"} color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}

