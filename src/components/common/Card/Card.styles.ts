import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingTop: 16,
    padding: 24,
    paddingBottom: 40,
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
  iconContent: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  cardActive: {
    borderColor: colors.black,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: -0.2,
    color: colors.blackNeutral,
  },
  cardText: {
    color: colors.blackNeutral,
    letterSpacing: 0.2,
    marginTop: 8,
    fontSize: 12,
  },
});
