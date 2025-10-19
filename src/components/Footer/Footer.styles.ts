import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 32,
        paddingHorizontal: 24,
        backgroundColor: colors.black100,
    },
    logo: {
        width: 138,
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: colors.grayForte,
        marginVertical: 24
    },
    text: {
        fontSize: 12,
        color: colors.white,
        marginTop: 8,
        letterSpacing: 0.1,
    },
})