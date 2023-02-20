import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { HomeScreen } from "../../features/HomeScreen"

const Drawer = createDrawerNavigator()

export const Navigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3f3f46",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "700",
          letterSpacing: 0.5,
        },
      }}
      initialRouteName='Home'>
      <Drawer.Screen name='Whose Name?' component={HomeScreen} />
    </Drawer.Navigator>
  )
}
