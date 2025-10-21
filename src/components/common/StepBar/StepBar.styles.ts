import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backDisabled: { 
    borderColor: '#A9AFD9',
  },
  backPressed: { 
    opacity: 0.75,
    color: colors.blueberry, 
  },
  stepText: {
    fontSize: 12,
    fontWeight: '800',
    color: colors.blackNeutral,
    letterSpacing: 0.5,
  },
  progressTrack: {
    flex: 1,
    height: 8,
    backgroundColor: colors.line,
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.blueberry,
    borderRadius: 999,
  },
  nextButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.blueberry,
  },
  nextPressed: { 
    opacity: 0.85 
  },
  nextDisabled: { 
    backgroundColor: '#B7BEFF' 
  },
  nextText: { 
    color: '#FFF', 
    fontWeight: '700', 
    fontSize: 12 
  },
});