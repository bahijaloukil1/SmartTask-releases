export const CATEGORIES = [
  { id: 'travail', label: 'Travail', icon: '💼', color: '#3157D5' },
  { id: 'etudes', label: 'Études', icon: '📚', color: '#8B5CF6' },
  { id: 'maison', label: 'Maison', icon: '🏠', color: '#F59E0B' },
  { id: 'sante', label: 'Santé', icon: '🏃', color: '#22A06B' },
  { id: 'courses', label: 'Courses', icon: '🛒', color: '#EC4899' },
  { id: 'finances', label: 'Finances', icon: '💰', color: '#0EA5E9' },
  { id: 'personnel', label: 'Personnel', icon: '👤', color: '#64748B' }
];

export const TASK_ICONS = [
  '📌', '💼', '📚', '🏠', '🛒', '🏃',
  '💊', '📞', '✉️', '🎂', '🚗', '🍽️',
  '💰', '🧹', '🎯', '✈️', '🛠️', '🎮'
];

export const getCategory = (id) =>
  CATEGORIES.find(c => c.id === id) || CATEGORIES[CATEGORIES.length - 1];