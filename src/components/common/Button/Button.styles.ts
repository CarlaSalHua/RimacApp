import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.black,
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { 
    color: colors.white, 
    fontWeight: "700" 
  },
  disabled: { 
    opacity: 0.5 
  },
});