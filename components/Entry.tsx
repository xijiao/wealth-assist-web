import React from "react";
import { Text, View } from "../components/Themed";

export default function Entry({ entry }: { entry: {} }) {
  return (
    <View>
      <Text>{JSON.stringify(entry)}</Text>
    </View>
  );
}
