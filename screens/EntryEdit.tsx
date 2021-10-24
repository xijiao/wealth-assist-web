import moment from "moment";
import * as React from "react";
import { Button, Platform, StyleSheet, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Text, View } from "../components/Themed";
import UserInfoContext from "../context/UserInfoContext";
import saveEntry from "../utilities/saveEntry";

export default function EntryEdit({ route, navigation }) {
  const [entry, setEntry] = React.useState(route.params.entry);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [strAmount, setStrAmount] = React.useState(String(entry.amount));

  const onChangeDate = (event, selectedDate) => {
    const occurDate = selectedDate || entry.occurDate;
    setEntry({ ...entry, occurDate });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    console.warn("A date has been picked: ", date);
    const occurDate = moment(date).toISOString();
    setEntry({ ...entry, occurDate });
  };

  return (
    <View style={styles.container}>
      <Text>EntryEdit{JSON.stringify(entry)}</Text>
      <TextInput
        label="Amount"
        style={styles.edit}
        value={strAmount}
        onChangeText={(strAmount) => {
          let amount = Number(strAmount);
          if (isNaN(amount)) amount = Number(strAmount.slice(0, -1));
          if (isNaN(amount)) amount = 0;
          if (!isFinite(amount)) amount = Number(strAmount.slice(0, -1));
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
          <Text onPress={showDatePicker}>"{entry.occurDate}"</Text>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            date={new Date(entry.occurDate)}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
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
    flexDirection: "column",
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
    height: "10%",
    // height: "40px",
    textAlign: "right",
  },
});
