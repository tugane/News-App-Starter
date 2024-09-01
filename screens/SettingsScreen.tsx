import {SafeAreaView, StyleSheet, Text} from "react-native";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <Text style={{ margin: Spacing.margin.lg, fontSize: FontSize.lg }}>
        SettingsScreen
      </Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
