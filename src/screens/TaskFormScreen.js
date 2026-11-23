import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  Platform,
  Alert
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from '../styles/styles';
import CategoryFilter from '../components/CategoryFilter';
import IconPicker from '../components/IconPicker';
import { useTasks } from '../context/TaskContext';
import { formatDate } from '../utils/taskHelpers';

export default function TaskFormScreen({ route, navigation }) {
  const taskId = route.params?.taskId;
  const { tasks, addTask, updateTask } = useTasks();

  const task = taskId ? tasks.find(t => t.id === taskId) : null;
  const isEditing = task !== null && task !== undefined;

  const [title, setTitle] = useState(isEditing ? task.title : '');
  const [description, setDescription] = useState(isEditing ? task.description : '');
  const [category, setCategory] = useState(isEditing ? task.category : 'personnel');
  const [icon, setIcon] = useState(isEditing ? task.icon : '📌');
  const [date, setDate] = useState(isEditing ? new Date(task.dueDate) : new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    if (Platform.OS === 'android') setShowPicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  const handleSave = () => {
    if (title.trim() === '') {
      Alert.alert('Attention', 'Le titre de la tâche est obligatoire !');
      return;
    }

    const data = {
      title,
      description,
      category,
      icon,
      dueDate: date.toISOString()
    };

    if (isEditing) {
      updateTask(task.id, data);
    } else {
      addTask(data);
    }
    navigation.goBack();
  };

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.label}>Titre *</Text>
      <TextInput
        style={styles.formInput}
        placeholder="Ex : Réviser JavaScript"
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.formInput, styles.textArea]}
        placeholder="Détails de la tâche..."
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Catégorie</Text>
      <CategoryFilter selected={category} onSelect={setCategory} />

      <Text style={styles.label}>Icône</Text>
      <IconPicker selected={icon} onSelect={setIcon} />

      <Text style={styles.label}>Date</Text>
      <Pressable style={styles.dateButton} onPress={() => setShowPicker(true)}>
        <Text style={styles.dateButtonText}>📅 {formatDate(date)}</Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Pressable style={[styles.primaryButton, { marginTop: 25 }]} onPress={handleSave}>
        <Text style={styles.primaryButtonText}>
          {isEditing ? '💾 Enregistrer les modifications' : '+ Ajouter la tâche'}
        </Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={() => navigation.goBack()}>
        <Text style={styles.secondaryButtonText}>Annuler</Text>
      </Pressable>
    </ScrollView>
  );
}