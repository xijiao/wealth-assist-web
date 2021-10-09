import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeStackParamList } from "../types";
import EntryList from "./EntryList";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const Drawer = createDrawerNavigator();
export default function Home({ navigation }) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="EntryList" component={EntryList} />
    </Drawer.Navigator>
  );
}
