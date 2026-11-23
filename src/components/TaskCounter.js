import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function TaskCounter({ count }) {
  return (
    <View style={styles.counterCard}>
      <Text style={styles.counter}>{count}</Text>
      <Text style={styles.counterLabel}>Tâches restantes</Text>
    </View>
  );
}