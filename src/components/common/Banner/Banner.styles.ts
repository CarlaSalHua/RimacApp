import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  linearGradient: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textContainer: {
    flexShrink: 1,
    width: '60%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 16,
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
    paddingTop: 8,
  },
  imageContainer: {
    flexShrink: 1,
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  image: {
    width: '100%',
    minWidth: 136,
    height: 160,
    borderRadius: 14,
  },
});