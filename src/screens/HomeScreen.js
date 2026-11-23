import React, { useState } from 'react';
import {
  View,
  Text,
  SectionList,
  StatusBar,
  Alert,
  Pressable
} from 'react-native';

import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import TaskItem from '../components/TaskItem';
import TaskCounter from '../components/TaskCounter';
import styles from '../styles/styles';
import { useTasks } from '../context/TaskContext';

import {
  countRemainingTasks,
  getVisibleTasks,
  groupByCategory
} from '../utils/taskHelpers';

export default function HomeScreen({ navigation }) {
  const { tasks, toggleTask, deleteTask } = useTasks();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const handleDelete = (task) => {
    Alert.alert('Supprimer', `Supprimer la tâche « ${task.title} » ?`, [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Supprimer',
        style: 'destructive',
        onPress: () => deleteTask(task.id)
      }
    ]);
  };

  // Accueil : uniquement les tâches non terminées
  const pendingTasks = getVisibleTasks(tasks, search, filter).filter(
    t => !t.completed
  );
  const sections = groupByCategory(pendingTasks);
  const remaining = countRemainingTasks(tasks);

  return (
    <View style={[styles.container, styles.homeTop]}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.appName}>SmartTask</Text>
        <Text style={styles.subtitle}>Organisez votre journée ✨</Text>
      </View>

      <TaskCounter count={remaining} />

      <SearchBar value={search} onChangeText={setSearch} />

      <CategoryFilter selected={filter} onSelect={setFilter} includeAll />

      <Pressable
        style={styles.newTaskButton}
        onPress={() => navigation.navigate('TaskForm')}
      >
        <Text style={styles.newTaskButtonText}>+ Nouvelle tâche</Text>
      </Pressable>

      <SectionList
        style={{ flex: 1 }}
        sections={sections}
        keyExtractor={item => item.id}
        stickySectionHeadersEnabled={false}
        keyboardShouldPersistTaps="handled"
        renderSectionHeader={({ section }) => (
          <Text style={[styles.sectionHeader, { color: section.category.color }]}>
            {section.category.icon} {section.category.label} ({section.data.length})
          </Text>
        )}
        renderItem={({ item }) => (
          <TaskItem
            item={item}
            onPress={() => navigation.navigate('TaskDetail', { taskId: item.id })}
            onToggle={() => toggleTask(item.id)}
            onEdit={() => navigation.navigate('TaskForm', { taskId: item.id })}
            onDelete={() => handleDelete(item)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>
            {search || filter !== 'all'
              ? 'Aucun résultat 🔎'
              : 'Aucune tâche à faire 🎉\nVoir l\'onglet Historique'}
          </Text>
        }
      />
    </View>
  );
}