import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 32,
        paddingHorizontal: 24,
        backgroundColor: colors.blackNeutral,
    },
    logo: {
        width: 138,
    },
    text: {
        fontSize: 12,
        color: colors.white,
        marginTop: 8,
        letterSpacing: 0.1,
    },
})