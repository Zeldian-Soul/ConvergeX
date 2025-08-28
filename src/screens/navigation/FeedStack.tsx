import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "../FeedScreen";
import EventScreen from "../EventScreen";

const Stack = createNativeStackNavigator();

export default function FeedStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="FeedHome" component={FeedScreen} options={{ title: "Feed" }} />
            <Stack.Screen name="EventDetail" component={EventScreen} options={{ title: "Event Detail" }} />
        </Stack.Navigator>
    );
}