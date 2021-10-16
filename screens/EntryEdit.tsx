import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import * as React from "react";
import { Button, Platform, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Text, View } from "../components/Themed";
import UserInfoContext from "../context/UserInfoContext";
import saveEntry from "../utilities/saveEntry";

export default function EntryEdit({ route, navigation }) {
  const [entry, setEntry] = React.useState(route.params.entry);

  const onChangeDate = (event, selectedDate) => {
    const occurDate = selectedDate || entry.occurDate;
    setEntry({ ...entry, occurDate });
  };

  return (
    <View style={{ flexDirection: "column" }}>
      <Text>EntryEdit{JSON.stringify(entry)}</Text>
      <TextInput
        label="Amount"
        style={styles.edit}
        value={String(entry.amount)}
        onChangeText={(strAmount) => {
          const amount = Number(strAmount);
          setEntry({ ...entry, amount });
        }}
        keyboardType="numeric"
      />
      {Platform.OS === "web" ? (
        <input
          value={moment(entry.occurDate).format("yyyy-MM-DDTHH:mm")}
          type="datetime-local"
          onChange={(event) => {
            const occurDate = moment(event.target.value).toISOString();
            setEntry({ ...entry, occurDate });
          }}
        />
      ) : (
        <>
          <Text>"{entry.occurDate}"</Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(entry.occurDate)}
            mode="date"
            display="inline"
            onChange={onChangeDate}
          />
        </>
      )}
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
