import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginVertical: 6,
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.borderNeutral,
  },
  boxChecked: { 
    backgroundColor: colors.black 
  },
  text: { 
    color: colors.blackNeutral
  },
});