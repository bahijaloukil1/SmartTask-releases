import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/styles';
import { formatDate, isOverdue } from '../utils/taskHelpers';
import { getCategory } from '../constants/categories';

export default function TaskItem({ item, onPress, onToggle, onEdit, onDelete }) {
  const overdue = isOverdue(item);
  const category = getCategory(item.category);

  return (
    <View style={styles.taskCard}>
      <Pressable onPress={onToggle} style={styles.checkButton}>
        <Text style={styles.check}>{item.completed ? '✅' : '⬜'}</Text>
      </Pressable>

      {/* Toucher la tâche ouvre la page de détails */}
      <Pressable style={styles.taskInfo} onPress={onPress}>
        <View
          style={[styles.taskIconBadge, { backgroundColor: category.color + '22' }]}
        >
          <Text style={styles.taskIconText}>{item.icon}</Text>
        </View>

        <View style={styles.taskTexts}>
          <Text
            style={[styles.taskTitle, item.completed && styles.completed]}
            numberOfLines={1}
          >
            {item.title}
          </Text>
          <Text style={[styles.taskDate, overdue && styles.overdue]}>
            📅 {formatDate(item.dueDate)}{overdue ? '  • En retard' : ''}
          </Text>
        </View>
      </Pressable>

      <Pressable onPress={onEdit} style={styles.iconButton}>
        <Text style={styles.editText}>✏️</Text>
      </Pressable>

      <Pressable onPress={onDelete} style={styles.iconButton}>
        <Text style={styles.deleteText}>✕</Text>
      </Pressable>
    </View>
  );
}