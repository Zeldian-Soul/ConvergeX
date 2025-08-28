import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ClubsScreen from "../ClubsScreen";
import ClubDetailScreen from "./ClubDetailScreen";

const Stack = createNativeStackNavigator();

export default function ClubsStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="ClubsHome" component={ClubsScreen} options={{ title:"Clubs" }} />
            <Stack.Screen name="ClubDetail" component={ClubDetailScreen} options={{ title: "Club Detail" }} />
        </Stack.Navigator>
    );
}