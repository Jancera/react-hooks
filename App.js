import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { MainContextProvider } from "./src/context/MainContext";

import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainContextProvider>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabelStyle: { fontSize: 12 },
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="home-sharp"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabelStyle: { fontSize: 12 },
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </MainContextProvider>
    </NavigationContainer>
  );
};

export default App;
