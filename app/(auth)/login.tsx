import React, { useState } from "react";
import { View, Alert } from "react-native";
import { styles } from "@/styles";
import { Text, TextInput, Button, useTheme } from "react-native-paper";
import { Link, useRouter } from "expo-router"; // Expo Router for navigation
import { auth } from "@/firebaseConfig"; // Import your Firebase auth instance
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Using Expo Router for navigation
  const theme = useTheme();

  const handleLogin = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successful login, navigate to the home page
        console.log("User logged in successfully:", userCredential.user);
        setLoading(false);
        router.replace("/(tabs)/explore");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setLoading(false);
        Alert.alert("Login Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} variant="headlineMedium">
        Login
      </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
        style={styles.button}
        buttonColor={theme.colors.primary}
      >
        Login
      </Button>
      <View style={styles.footer}>
        <Link href="/(auth)/signup" style={styles.link}>
          <Text>Don't have an account?</Text>
          <Text> Register Here</Text>
        </Link>
      </View>
    </View>
  );
}

