import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 32,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.white,
    shadowColor: '#A9AFD9',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    flexShrink: 1,
    fontWeight: '800',
    fontSize: 24,
    lineHeight: 32,
  },
  subtitle: {
    marginTop: 24,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.6,
    color: colors.grayNeutral,
    textTransform: 'uppercase',
  },
  price: {
    fontSize: 20,
    marginTop: 4,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  line: {
    marginVertical: 24,
    backgroundColor: colors.line,
  },
  containerRow: { 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    gap: 8,
  },
  iconContainer: { 
    marginTop: 6 
  },
  bullet: {
    flexShrink: 1,
    fontSize: 16,
    lineHeight: 28,
    letterSpacing: 0.1,
    fontWeight: '700',
    color: colors.textBlack,
  },
  description: {
    gap: 30,
    marginVertical: 8,
  },
  button: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 24,
    maxHeight: 48,
    backgroundColor: colors.redRimac,
    fontSize: 18
  },
  btnText: { 
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: 0.4
  },
});
