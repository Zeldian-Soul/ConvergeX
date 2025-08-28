import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ClubDetailScreen({ route }: any){
    const { club } = route.params;

    return(
        <View style={styles.container}>
            <Image source={{ uri: club.image }} style={styles.banner} />
            <Text style={styles.name}>{club.name}</Text>
            <Text style={styles.about}>{club.about}</Text>
            <Text style={styles.meta}>
                Followers: {club.followers} • {club.visibility}
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    {club.visibility === "Public" ? "Follow": "Join Membership"}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: "center"},
    banner: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15},
    name: { fontSize: 22, fontWeight: "bold" },
    about: {fontSize: 16, marginVertical: 10 },
    meta: { color: "#555", marginBottom: 20 },
    button: {
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {color: "#fff", fontWeight: "bold"},
});