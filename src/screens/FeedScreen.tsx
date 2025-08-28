import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

// Dummy events
const events = [
    {
        id: "1",
        title: "AI & ML Summit 2025",
        club: "Tech Club",
        date: "Aug 30,2025",
        venue: "Auditorium A",
        tags: ["AI", "Machine Learning"],
        image: "https://placekitten.com/400/200",
    },
    {
        id: "2",
        title: "Music Fest",
        club: "Cultural Club",
        date: "Sep 3. 2025",
        venue: "Main Stage",
        tags: ["Music", "Festival"],
        image: "https://placekitten.com/401/200",
    },
];

export default function FeedScreen(){
    const renderCard = ({ item }: { item: any }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image}/>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.club}>{item.club} • {item.date}</Text>
                <Text style={styles.venue}>📍 {item.venue}</Text>
                <View style={styles.tags}>
                    {item.tags.map((tag: string, index: number) => (
                        <Text key={index} style={styles.tag}>#{tag}</Text>
                    ))}
                </View>
                <View style={styles.actions}>
                    <TouchableOpacity><Text>❤️ Like</Text></TouchableOpacity>
                    <TouchableOpacity><Text>💾 Save</Text></TouchableOpacity>
                    <TouchableOpacity><Text>➡️ Share</Text></TouchableOpacity>
                    <TouchableOpacity><Text>📝 Register</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
    return(
        <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={styles.list}
        />
    );
}

const styles = StyleSheet.create({
    list:{
        padding: 10,
    },
    card:{
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 4,
        elevation: 3,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 150,
    },
    cardContent: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    club: {
        color: "#555",
        marginVertical: 2,
    },
    venue:{
        marginBottom: 5,
    },
    tags: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 5,
    },
    tag: {
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginRight: 5,
        fontSize: 12,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
});