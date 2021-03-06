import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Button, Platform, ScrollView, StyleSheet } from "react-native";
import Entry from "../components/Entry";
import Fetch from "../components/Fetch";
import { Text, View } from "../components/Themed";
import { BACKEND_BASE_URL } from "../config";
import UserInfoContext from "../context/UserInfoContext";
import createNewEntry from "../utilities/createNewEntry";

export default function Home({ navigation }) {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {isFocused && (
        <UserInfoContext.Consumer>
          {({ userInfo, setUserInfo }) => {
            return (
              <ScrollView style={styles.scrollView}>
                <Fetch
                  url={BACKEND_BASE_URL + "/" + userInfo.id + "/entry"}
                  renderSuccess={(data: Array<any>) => {
                    if (data.length == 0) {
                      return <Text>No Entry</Text>;
                    } else {
                      return data.map((entry: any) => (
                        <Entry entry={entry} key={entry.id} />
                      ));
                    }
                  }}
                  renderError={function (error: any) {
                    return <Text>{error.name + ": " + error.message}</Text>;
                  }}
                  loadingFallback={<Text>Loading...</Text>}
                />
                {/* Use a light status bar on iOS to account for the black space above the modal */}
                <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
              </ScrollView>
            );
          }}
        </UserInfoContext.Consumer>
      )}
      <View style={styles.buttonContainer}>
        <UserInfoContext.Consumer>
          {({ userInfo, setUserInfo }) => {
            return (
              <Button
                onPress={() =>
                  navigation.navigate("EntryEdit", {
                    entry: createNewEntry(userInfo.id),
                  })
                }
                title="New"
              />
            );
          }}
        </UserInfoContext.Consumer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  scrollView: {
    width: "100%",
  },
});
