import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from '../styles/styles';
import { TASK_ICONS } from '../constants/categories';

export default function IconPicker({ selected, onSelect }) {
  return (
    <View style={styles.iconGrid}>
      {TASK_ICONS.map(icon => (
        <Pressable
          key={icon}
          style={[styles.iconChoice, selected === icon && styles.iconChoiceActive]}
          onPress={() => onSelect(icon)}
        >
          <Text style={styles.iconChoiceText}>{icon}</Text>
        </Pressable>
      ))}
    </View>
  );
}