import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Text, View } from "../components/Themed";
import UserInfoContext from "../context/UserInfoContext";
import saveEntry from "../utilities/saveEntry";

export default function EntryEdit({ route, navigation }) {
  const [entry, setEntry] = React.useState(route.params.entry);
  return (
    <View style={{ flexDirection: "column" }}>
      <p>EntryEdit{JSON.stringify(entry)}</p>
      <TextInput
        label="Amount"
        style={styles.edit}
        value={entry.amount}
        onChangeText={(amount) => {
          setEntry({ ...entry, amount });
        }}
        keyboardType="numeric"
      />
      <Text>{entry.occurDate.toString()}</Text>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            title="Cancel"
          />
        </View>
        <UserInfoContext.Consumer>
          {({ userInfo, setUserInfo }) => (
            <View
              style={{
                flex: 1,
              }}
            >
              <Button
                onPress={() => {
                  entry.userId = userInfo.id;
                  saveEntry(entry);
                  navigation.goBack();
                }}
                title="Save"
              />
            </View>
          )}
        </UserInfoContext.Consumer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  editLabel: {
    fontSize: 11,
  },
  edit: {
    fontSize: 15,
    alignSelf: "flex-end",
    minWidth: "100%",
    textAlign: "right",
  },
});
