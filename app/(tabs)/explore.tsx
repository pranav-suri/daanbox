import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from "react-native";
import Card from "@/components/Cards";
import { router } from "expo-router";
import { useCardContext } from "@/context/cardContext";

const urlarray = [
  {
    id: "1",
    url: "https://media.seniority.in/catalog/product/cache/242b55c74bcaf9102cfc5599e255893a/g/a/ga1_6739.jpg",
    title: "wheelchair",
    location: "pune,pune",
    description:
      "This wheelchair is in excellent, gently used condition. It has been thoroughly cleaned and tested to ensure full functionality. The device shows minimal signs of wear, and all essential components, such as the mouthpiece, mask, and tubing, are included.",
  },
  {
    id: "2",
    url: "https://fitmaxstore.com/wp-content/uploads/2023/04/Nebulizer-machine-components-including-masks-and-tubes.jpg",
    title: "NEbula",
    location: "pune,pune",
    description:
      "This nebulizer is in excellent, gently used condition. It has been thoroughly cleaned and tested to ensure full functionality. The device shows minimal signs of wear, and all essential components, such as the mouthpiece, mask, and tubing, are included.",
  },
];

export default function TabTwoScreen() {
  const { setCardState } = useCardContext();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="bag-outline" size={24} color="red" />
        <Text style={styles.headerText}>DaanBox</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Item Card - WheelChair */}
        {urlarray.map((card_info, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                router.push("/(tabs)/cardDetail");
                setCardState({
                  id: card_info.id,
                  imageUri: card_info.url,
                  title: card_info.title,
                  location: card_info.location,
                  description: card_info.description,
                });
              }}
            >
              <Card
                imageUri={card_info.url}
                title={card_info.title}
                location={card_info.location}
                key={index}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  scrollContainer: {
    paddingVertical: 16,
  },
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
    color: "#fff",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});
