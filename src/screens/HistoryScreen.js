import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  Alert,
  Pressable
} from 'react-native';

import SearchBar from '../components/SearchBar';
import TaskItem from '../components/TaskItem';
import styles from '../styles/styles';
import colors from '../styles/colors';
import { useTasks } from '../context/TaskContext';
import { getHistoryTasks } from '../utils/taskHelpers';

const STATUS_FILTERS = [
  { id: 'all', label: '📋 Toutes' },
  { id: 'active', label: '⏳ En cours' },
  { id: 'done', label: '✅ Terminées' }
];

export default function HistoryScreen({ navigation }) {
  const { tasks, toggleTask, deleteTask } = useTasks();
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');

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

  const history = getHistoryTasks(tasks, search, status);

  return (
    <View style={[styles.container, styles.homeTop]}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.appName}>Historique</Text>
        <Text style={styles.subtitle}>
          {history.length} tâche(s) sur {tasks.length}
        </Text>
      </View>

      <SearchBar value={search} onChangeText={setSearch} />

      <View style={{ flexDirection: 'row', marginBottom: 14 }}>
        {STATUS_FILTERS.map(f => {
          const active = status === f.id;
          return (
            <Pressable
              key={f.id}
              style={[styles.chip, active && { backgroundColor: colors.primary }]}
              onPress={() => setStatus(f.id)}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>
                {f.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <FlatList
        style={{ flex: 1 }}
        data={history}
        keyExtractor={item => item.id}
        keyboardShouldPersistTaps="handled"
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
            {search || status !== 'all'
              ? 'Aucun résultat 🔎'
              : 'Aucune tâche dans l\'historique 📝'}
          </Text>
        }
      />
    </View>
  );
}