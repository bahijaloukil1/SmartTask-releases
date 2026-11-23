import React from 'react';
import { View, Text, ScrollView, Pressable, Alert } from 'react-native';
import styles from '../styles/styles';
import { useTasks } from '../context/TaskContext';
import { getCategory } from '../constants/categories';
import { formatDate, isOverdue } from '../utils/taskHelpers';

export default function TaskDetailScreen({ route, navigation }) {
  const { taskId } = route.params;
  const { tasks, toggleTask, deleteTask } = useTasks();

  const task = tasks.find(t => t.id === taskId);

  // La tâche vient d'être supprimée
  if (!task) return null;

  const category = getCategory(task.category);
  const overdue = isOverdue(task);

  const handleDelete = () => {
    Alert.alert('Supprimer', `Supprimer la tâche « ${task.title} » ?`, [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Supprimer',
        style: 'destructive',
        onPress: () => {
          navigation.goBack();
          deleteTask(task.id);
        }
      }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailHeader}>
        <View
          style={[styles.detailIconBadge, { backgroundColor: category.color + '22' }]}
        >
          <Text style={styles.detailIcon}>{task.icon}</Text>
        </View>

        <Text style={[styles.detailTitle, task.completed && styles.completed]}>
          {task.title}
        </Text>

        <View style={[styles.categoryBadge, { backgroundColor: category.color }]}>
          <Text style={styles.categoryBadgeText}>
            {category.icon} {category.label}
          </Text>
        </View>
      </View>

      <View style={styles.detailCard}>
        <Text style={styles.detailLabel}>Statut</Text>
        <Text style={styles.detailValue}>
          {task.completed ? '✅ Terminée' : overdue ? '⚠️ En retard' : '⏳ En cours'}
        </Text>

        <Text style={styles.detailLabel}>Date</Text>
        <Text style={[styles.detailValue, overdue && styles.overdue]}>
          📅 {formatDate(task.dueDate)}
        </Text>

        <Text style={styles.detailLabel}>Description</Text>
        <Text style={styles.detailValue}>
          {task.description !== '' ? task.description : 'Aucune description'}
        </Text>
      </View>

      <Pressable
        style={styles.primaryButton}
        onPress={() => navigation.navigate('TaskForm', { taskId: task.id })}
      >
        <Text style={styles.primaryButtonText}>✏️ Modifier la tâche</Text>
      </Pressable>

      <Pressable
        style={styles.successButton}
        onPress={() => toggleTask(task.id)}
      >
        <Text style={styles.primaryButtonText}>
          {task.completed ? '↩️ Marquer comme non terminée' : '✅ Marquer comme terminée'}
        </Text>
      </Pressable>

      <Pressable style={styles.dangerButton} onPress={handleDelete}>
        <Text style={styles.primaryButtonText}>🗑️ Supprimer la tâche</Text>
      </Pressable>
    </ScrollView>
  );
}