import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import FeedStack from "./FeedStack";
import ClubsStack from "./ClubsStack";
import ProfileScreen from "../ProfileScreen";
import AdminScreen from "../AdminScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Feed" component={FeedStack} options={{ headerShown: false }} />
                <Tab.Screen name="Clubs" component={ClubsStack} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={ProfileScreen}/>
                <Tab.Screen name="Admin" component={AdminScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}