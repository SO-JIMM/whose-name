import React from "react"
import { NativeBaseProvider, StatusBar } from "native-base"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaBox } from "./src/components/SafeAreaBox"
import { Navigation } from "./src/infrastructure/navigation/Navigation"
import { AppContextProvider } from "./src/context/AppContext"

export default function App() {
  return (
    <NativeBaseProvider>
      <AppContextProvider>
        <NavigationContainer>
          <SafeAreaBox>
            <Navigation />
          </SafeAreaBox>
        </NavigationContainer>
      </AppContextProvider>
      <StatusBar style='auto' />
    </NativeBaseProvider>
  )
}
