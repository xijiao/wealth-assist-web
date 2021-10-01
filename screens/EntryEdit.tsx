import * as React from "react";
import { Button } from "react-native";
import UserInfoContext from "../context/UserInfoContext";
import saveEntry from "../utilities/saveEntry";

export default function EntryEdit({ route, navigation }) {
  const { entry } = route.params;
  return (
    <>
      <p>EntryEdit{JSON.stringify(entry)}</p>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="Cancel"
      />

      <UserInfoContext.Consumer>
        {({ userInfo, setUserInfo }) => (
          <Button
            onPress={() => {
              entry.userId = userInfo.id;
              saveEntry(entry);
              navigation.goBack();
            }}
            title="Save"
          />
        )}
      </UserInfoContext.Consumer>
    </>
  );
}
