import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";

const clubs =[
    {
        id: "1",
        name: "Tech Club",
        about: "A community for tech enthusiasts",
        followers: 1200,
        visibility: "Public",
        image: "https://placekitten.com/200/200",
    },
    {
        id: "2",
        name: "Cultural Club",
        about: "For all things art and culture",
        followers: 800,
        visibility: "Private",
        image: "https://placekitten.com/201/200",
    },
];

export default function ClubsScreen() {
    const renderClub =({ item }: { item: any }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image}} style={styles.avatar}/>
            <view style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.about}>{item.about}</Text>
                <Text style={styles.meta}>
                    Follower: {item.followers} • {item.visibility0}
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        {item.visibility === "Public" ? "Follow" : "Join"}
                    </Text>
                </TouchableOpacity>
            </view>
        </View>
    );
    return <FlatList data={clubs} renderItem={renderClub} keyExtractor={(c) => c.id} />;
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowRadius: 10,
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2},
        elevation: 3,
    },
    avatar:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    name:{
        fontWeight: "bold",
        fontSize: 16.
    },
    about: {
        color: "#555",
        fontSize: 16,
    },
    meta:{
        fontSize: 12,
        color: "#777",
    },
    button:{
        marginTop: 5,
        backgroundColor: "#007bff",
        padding: 5,
        borderRadius: 5,
        alignSelf: "flex-start",
    },
    buttonText:{
        color: "#fff",
        fontSize: 12,
    },
});