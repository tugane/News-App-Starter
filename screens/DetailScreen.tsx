import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackType} from "../types";
import useColors from "../hooks/useColors";
import { SafeAreaView, Text } from "react-native";

type Props = NativeStackScreenProps<RootStackType, "Details">;

const DetailScreen: React.FC<Props> = ({ navigation: { goBack }, route: { params: { news } } }) => {
  const colors = useColors()

    return (
      <SafeAreaView>
        <Text>
        DetailScreen
        </Text>
      </SafeAreaView>
    );
};

export default DetailScreen;
