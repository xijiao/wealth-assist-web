import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UserInfoContext from "./context/UserInfoContext";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  let userInfo = { id: 1 };
  const setUserInfo = (v: any) => {
    userInfo = v;
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </UserInfoContext.Provider>
    );
  }
}
