import React from "react";
import { SafeAreaView, View, Text, Image, Pressable, FlatList, StyleSheet } from "react-native";

const DUMMY_FEED = [
  {
    id: "01FZT7R1JG8B0B3X0Q9T8Z1A2B", // sample ULID-like string
    clubName: "Robotics Club",
    title: "Robotics Workship: Build a Line-following robot",
    summary: "Hands-on workshop building a line-following robot.",
    coverURL: "https://picsum.photos/800/400?random=1",
    tags: ["workshop", "robotics", "hands-on"],
    startsAt: Date.now() + 1000*60*60*24
  }
];

export default function App(){
  const renderItem = ({ item }: { item: typeof DUMMY_FEED[0] }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.coverURL }} style={styles.cover} />
      <View style={styles.cardBody}>
        <Text style={styles.club}>{item.clubName}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.summary}>{item.summary}</Text>
        <View style={styles.actionsRow}>
          <Pressable style={styles.button}><Text>Save</Text></Pressable>
          <Pressable style={styles.button}><Text>Register</Text></Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DUMMY_FEED} keyExtractor={(i) => i.id} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  card: { margin: 12, borderRadius: 12, overflow: "hidden", backgroundColor: "#f8f8f8", elevation: 2 },
  cover: { width: "100%", height: 160 },
  cardBody: { padding: 12 },
  club: { color: "#666", fontSize: 12 },
  title: { fontSize: 18, fontWeight: "700", marginTop: 6},
  summary: { color: "#333", marginTop: 6 },
  actionsRow: {flexDirection: "row", marginTop: 12, gap: 8 },
  button: {paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8, backgroundColor: "#e8e8e8"}
});