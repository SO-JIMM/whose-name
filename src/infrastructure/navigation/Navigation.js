import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { WhoseNameScreen } from "../../features/whose-name/WhoseNameScreen"
import { AboutScreen } from "../../features/about/AboutScreen"
import { NicknamesScreen } from "../../features/nicknames/NicknamesScreen"

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
          fontWeight: "600",
          letterSpacing: 0.5,
        },
      }}
      initialRouteName='Home'>
      <Drawer.Screen name='Whose Name?' component={WhoseNameScreen} />
      <Drawer.Screen name='Nicknames List' component={NicknamesScreen} />
      <Drawer.Screen name='About' component={AboutScreen} />
    </Drawer.Navigator>
  )
}
