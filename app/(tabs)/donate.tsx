import React, { useState } from "react";
import { View, Alert, Image, Text } from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import * as ImagePicker from "expo-image-picker"; // Import expo-image-picker
import { styles } from "@/styles"; // Reusing the same styles

export default function DonateScreen() {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [imageUri, setImageUri] = useState<string | null | undefined>(null); // State to hold the image URI
  const [imageName, setImageName] = useState<string | null | undefined>(null); // State to hold the image name
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const handleDonate = () => {
    // Basic validation
    if (!itemName) {
      Alert.alert("Missing Information", "Please enter the item name.");
      return;
    }
    if (!description) {
      Alert.alert("Missing Information", "Please enter a description.");
      return;
    }
    if (!address) {
      Alert.alert("Missing Information", "Please enter an address.");
      return;
    }
    if (!imageUri) {
      Alert.alert("Missing Information", "Please select an image.");
      return;
    }

    setLoading(true);

    // Submit form data here (you can implement your donation submission logic)
    console.log("Item Name:", itemName);
    console.log("Description:", description);
    console.log("Address:", address);
    console.log("Image URI:", imageUri); // The image URI selected by the user

    Alert.alert("Donation Submitted", "Thank you for your donation!");

    setLoading(false);
  };

  // Function to open the image picker and select an image
  const openImagePicker = async () => {
    try {
      // Ask for permission to access media library
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "We need permission to access your media library.");
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5, // Set quality of the image (adjust as necessary)
      });

      // Log the result for debugging purposes
      console.log("ImagePicker Result:", result);

      if (result.canceled) {
        Alert.alert("No image selected", "You canceled the image selection.");
        return;
      }

      // If image selection is successful
      if (result.assets?.length) {
        setImageUri(result.assets[0].fileName); // Set the image URI if an image is selected

        // Extract image name from URI if URI is defined
        const fileName = result.assets[0].fileName;
        setImageName(fileName); // Set the image name
      } else {
        Alert.alert("No image selected", "Please select a valid image.");
      }
    } catch (error) {
      console.error("Error selecting image:", error);
      Alert.alert("Error", "An error occurred while selecting the image.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Donate Medical Equipment
      </Text>

      {/* Button to select image */}
      <Button
        mode="contained"
        onPress={openImagePicker}
        style={styles.button}
        buttonColor={theme.colors.primary}
      >
        Select Equipment Image
      </Button>

      {/* Show selected image preview */}
      {imageUri && (
        <View>
          <Image source={{ uri: imageUri }} style={{ width: 100, height: 100, marginTop: 10 }} />
          {/* Display image name */}
          <Text style={{ marginTop: 10 }}>{imageName}</Text>
        </View>
      )}

      <TextInput
        label="Item Name"
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        style={styles.input}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={setAddress}
        multiline
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={handleDonate}
        style={styles.button}
        buttonColor={theme.colors.primary}
        loading={loading}
        disabled={loading}
      >
        Submit Donation
      </Button>
    </View>
  );
}
