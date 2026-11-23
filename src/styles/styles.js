import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  // Écrans
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20
  },
  homeTop: { paddingTop: 55 },
  header: { marginBottom: 18 },
  appName: { fontSize: 32, fontWeight: 'bold', color: colors.primary },
  subtitle: { fontSize: 16, color: colors.secondaryText, marginTop: 5 },

  // Compteur
  counterCard: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    padding: 14,
    marginBottom: 14,
    alignItems: 'center'
  },
  counter: { fontSize: 34, fontWeight: 'bold', color: colors.white },
  counterLabel: { color: colors.white, fontSize: 16 },

  // Recherche
  searchContainer: { marginBottom: 12 },
  searchInput: {
    backgroundColor: colors.white,
    padding: 14,
    borderRadius: 10,
    fontSize: 15,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border
  },

  // Catégories (chips)
  chipsScroll: { flexGrow: 0, marginBottom: 12 },
  chip: {
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.border
  },
  chipText: { fontSize: 14, color: colors.text, fontWeight: '600' },
  chipTextActive: { color: colors.white },

  // Bouton nouvelle tâche
  newTaskButton: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 14
  },
  newTaskButtonText: { color: colors.white, fontWeight: 'bold', fontSize: 16 },

  // Liste par sections
  sectionHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 10
  },
  taskCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center'
  },
  checkButton: { paddingRight: 8 },
  check: { fontSize: 20 },
  taskInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  taskIconBadge: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  taskIconText: { fontSize: 22 },
  taskTexts: { flex: 1 },
  taskTitle: { fontSize: 16, fontWeight: '600', color: colors.text },
  completed: {
    textDecorationLine: 'line-through',
    color: colors.placeholder
  },
  taskDate: { fontSize: 13, color: colors.primary, marginTop: 4 },
  overdue: { color: colors.danger, fontWeight: 'bold' },

  iconButton: { paddingHorizontal: 8, paddingVertical: 4 },
  editText: { fontSize: 18 },
  deleteText: { color: colors.danger, fontSize: 22, fontWeight: 'bold' },

  empty: {
    textAlign: 'center',
    color: colors.placeholder,
    marginTop: 30,
    fontSize: 16
  },

  // Page de détails
  detailHeader: { alignItems: 'center', marginBottom: 20 },
  detailIconBadge: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12
  },
  detailIcon: { fontSize: 46 },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 10
  },
  categoryBadge: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20
  },
  categoryBadgeText: { color: colors.white, fontWeight: 'bold' },
  detailCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 18,
    marginBottom: 20
  },
  detailLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.secondaryText,
    marginTop: 12
  },
  detailValue: { fontSize: 16, color: colors.text, marginTop: 4 },

  // Boutons
  primaryButton: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  successButton: {
    backgroundColor: '#22A06B',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  dangerButton: {
    backgroundColor: colors.danger,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30
  },
  primaryButtonText: { color: colors.white, fontWeight: 'bold', fontSize: 16 },
  secondaryButton: {
    backgroundColor: colors.border,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  secondaryButtonText: { color: colors.text, fontWeight: 'bold', fontSize: 16 },

  // Formulaire
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 6,
    marginTop: 14
  },
  formInput: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    fontSize: 15,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border
  },
  textArea: { height: 90, textAlignVertical: 'top' },
  dateButton: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border
  },
  dateButtonText: { fontSize: 15, color: colors.text },

  // Choix d'icône
  iconGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  iconChoice: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: colors.border
  },
  iconChoiceActive: { borderColor: colors.primary, backgroundColor: '#E8EEFF' },
  iconChoiceText: { fontSize: 24 }
});

export default styles;