// components/Card.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface CardProps {
  imageUri: string;
  title: string;
  location: string;
}

const Card: React.FC<CardProps> = ({ imageUri, title, location }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUri }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemLocation}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 12,
    backgroundColor: "#ff4d4d",
  },
  itemTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  itemLocation: {
    fontSize: 14,
    color: "#ffff",
  },
});

export default Card;

