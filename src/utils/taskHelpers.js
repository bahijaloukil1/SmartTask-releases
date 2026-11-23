import { CATEGORIES } from '../constants/categories';

// Ajouter une tâche
export const addTaskHelper = (tasks, data) => {
  const newTask = {
    id: Date.now().toString(),
    title: data.title.trim(),
    description: data.description.trim(),
    dueDate: data.dueDate,
    category: data.category,
    icon: data.icon,
    completed: false
  };
  return [...tasks, newTask];
};

// Modifier une tâche
export const editTaskHelper = (tasks, id, data) =>
  tasks.map(task =>
    task.id === id
      ? {
          ...task,
          title: data.title.trim(),
          description: data.description.trim(),
          dueDate: data.dueDate,
          category: data.category,
          icon: data.icon
        }
      : task
  );

// Terminer / réactiver
export const toggleTaskHelper = (tasks, id) =>
  tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );

// Supprimer
export const deleteTaskHelper = (tasks, id) =>
  tasks.filter(task => task.id !== id);

// Tâches restantes
export const countRemainingTasks = (tasks) =>
  tasks.filter(task => !task.completed).length;

// Recherche par nom (et description) + filtre catégorie + tri par date
export const getVisibleTasks = (tasks, query, category) => {
  const q = (query || '').trim().toLowerCase();

  const filtered = tasks.filter(task => {
    const matchCategory = category === 'all' || task.category === category;
    const matchSearch =
      q === '' ||
      (task.title || '').toLowerCase().includes(q) ||
      (task.description || '').toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  return [...filtered].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  );
};

// HISTORIQUE : toutes les tâches, les plus récentes en premier
// status : 'all' | 'active' | 'done'
export const getHistoryTasks = (tasks, query, status) => {
  const q = (query || '').trim().toLowerCase();

  const filtered = tasks.filter(task => {
    const matchStatus =
      status === 'all' ||
      (status === 'active' && !task.completed) ||
      (status === 'done' && task.completed);
    const matchSearch =
      q === '' ||
      (task.title || '').toLowerCase().includes(q) ||
      (task.description || '').toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  // L'id est la date de création : le plus grand = le plus récent
  return [...filtered].sort((a, b) => Number(b.id) - Number(a.id));
};

// Regrouper par catégorie : une catégorie inconnue va dans « Personnel »
// (plus aucune tâche ne disparaît)
export const groupByCategory = (tasks) => {
  const knownIds = CATEGORIES.map(c => c.id);

  return CATEGORIES
    .map(cat => ({
      category: cat,
      data: tasks.filter(task =>
        task.category === cat.id ||
        (cat.id === 'personnel' && !knownIds.includes(task.category))
      )
    }))
    .filter(section => section.data.length > 0);
};

// Format jj/mm/aaaa
export const formatDate = (isoString) => {
  const d = new Date(isoString);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  return `${day}/${month}/${d.getFullYear()}`;
};

// En retard : date passée et non terminée
export const isOverdue = (task) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return !task.completed && new Date(task.dueDate) < today;
};