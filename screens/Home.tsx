import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeStackParamList } from "../types";
import EntryEdit from "./EntryEdit";
import EntryList from "./EntryList";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function Home({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="EntryList">
      <Stack.Screen
        name="EntryList"
        component={EntryList}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EntryEdit" component={EntryEdit} />
    </Stack.Navigator>
  );
}
