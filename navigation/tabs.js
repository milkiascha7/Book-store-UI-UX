import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from 'react-native'
import {  Setting, Notification, Search, Home } from "../screens";
import { icons, COLORS } from "../constants";
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();



const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                style: styles.tabBar,
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.lightGray,
                showLabel: false,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.black
                }
            }}
      
        >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ color, focused }) => <Entypo name="home" size={32} color={color}  />,
          }}
        />
        <Tab.Screen name="Search" component={Search}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={32} color={color} />,
          }}
        />
        <Tab.Screen name="notification" component={Notification}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="notifications" size={32} color={color} />,
            
          }}
        />
        <Tab.Screen name="setting" component={Setting}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={32} color={color} />,  
          }}
        />
      </Tab.Navigator>
    )
    
}

export default Tabs;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: COLORS.black,
        width: 25,
        height: 25,
    },
  })

 