import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  title: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#0F1225' 
  },
  paginationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    justifyContent: 'center',
    paddingVertical: 8,
  },
  circleBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDisabled: { 
    opacity: 0.5 
  },
  chev: { 
    fontSize: 18, 
    fontWeight: '700', 
    color: '#4B55F7' 
  },
  pageText: { 
    fontSize: 12, 
    fontWeight: '700', 
    color: '#0F1225' 
  },
});
