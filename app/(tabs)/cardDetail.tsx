import React from "react";
import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCardContext } from "@/context/cardContext";
export default function CardDetail() {
  const { cardState } = useCardContext();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="bag-outline" size={24} color="red" />
        <Text style={styles.headerText}>DaanBox</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          {cardState.imageUri && (
            <Image source={{ uri: cardState.imageUri }} style={styles.image} />
          )}
        </View>
        <Text style={styles.title}>{cardState.title}</Text>
        <Text style={styles.location}>{cardState.location}</Text>
        <Text style={styles.descriptionText}>{cardState.description}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Request Item" color="#E74C3C" onPress={() => alert("Item Requested!")} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  donor: {
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
  },
  location: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#555",
  },
  descriptionText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  buttonContainer: {
    width: "60%",
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    color: "red",
    marginLeft: 8,
    fontWeight: "bold",
  },
});
