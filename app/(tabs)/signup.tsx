import React, { useState } from "react";
import { View, Alert } from "react-native";
import { TextInput, Button, Text, useTheme } from "react-native-paper";
import { auth, firestore } from "@/firebaseConfig"; // Import auth from your Firebase config
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { router } from "expo-router";
import { styles } from "@/styles";
export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleSignUp = () => {
    // Validation
    if (email !== confirmEmail) {
      Alert.alert("Email Mismatch", "Email addresses do not match.");
      return;
    }
    if (!phone || phone.length < 10) {
      Alert.alert("Invalid Phone Number", "Please enter a valid phone number.");
      return;
    }
    if (!password || password.length < 6) {
      Alert.alert("Weak Password", "Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    // Firebase Sign Up
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Save additional user info to Firestore
        setDoc(doc(firestore, "users", user.uid), {
          email: email,
          phone: phone,
          role: "user", // Default role
        });
        Alert.alert("Registration Successful", "You can now log in.");
        router.push("/(tabs)/login");
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        Alert.alert("Registration Error", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} variant="headlineMedium">
        Sign Up
      </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        label="Confirm Email"
        value={confirmEmail}
        onChangeText={(text) => setConfirmEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        label="Phone Number"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        autoCapitalize="none"
        style={styles.input}
      />
      <Button
        mode="contained"
        onPress={handleSignUp}
        style={styles.button}
        buttonColor={theme.colors.primary}
        loading={loading}
        disabled={loading}
      >
        Sign Up
      </Button>
    </View>
  );
}
