import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export default function EventScreen() {
    const event = {
        title: "AI & ML Summit 2025",
        club: "Tech Club",
        date: "Aug 30, 2025",
        venue: "Auditorium A",
        description: "A deep dive into AI & Machine Learning with top speakers.",
        image: "https://placekitten.com/400/200",
        paid: false,
    };

    return(
        <ScrollView style={styles.container}>
            <Image source={{ uri: event.image }} style={styles.image}/>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.meta}>{event.club} • {event.date}</Text>
            <Text style={styles.venue}>📍 {event.venue}</Text>
            <Text style={styles.description}>{event.description}</Text>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        {event.paid ? "Pay & Register" : "Register"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.secondary]}>
                    <Text style={styles.buttonText}>Set Reminder 🔔</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
        container:{
            padding: 10,
        },
        image:{
            width: "100%",
            height: 200,
            borderRadius: 10,
            marginBottom: 10,
        },
        title:{
            fontSize:22,
            fontWeight: "bold",
        },
        meta:{
            color: "#555",
            marginVertical: 2,
        },
        venue:{
            marginBottom: 10,
        },
        description:{
            marginVertical: 10,
            fontSize: 16,
        },
        actions: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 15,
        },
        button:{
            backgroundColor: "#007bff",
            padding: 10,
            borderRadius: 5,
        },
        secondary:{
            backgroundColor: "#28a745",
        },
        buttonText:{
            color: "#fff",
            fontWeight:"bold",
        },
    });