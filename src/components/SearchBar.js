import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../styles/styles';

export default function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Rechercher une tâche..."
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}