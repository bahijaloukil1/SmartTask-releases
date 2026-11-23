import React from 'react';
import { ScrollView, Pressable, Text } from 'react-native';
import styles from '../styles/styles';
import colors from '../styles/colors';
import { CATEGORIES } from '../constants/categories';

// includeAll = true : affiche le bouton « Toutes » (écran d'accueil)
export default function CategoryFilter({ selected, onSelect, includeAll }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.chipsScroll}
      keyboardShouldPersistTaps="handled"
    >
      {includeAll && (
        <Pressable
          style={[
            styles.chip,
            selected === 'all' && { backgroundColor: colors.primary }
          ]}
          onPress={() => onSelect('all')}
        >
          <Text
            style={[styles.chipText, selected === 'all' && styles.chipTextActive]}
          >
            📋 Toutes
          </Text>
        </Pressable>
      )}

      {CATEGORIES.map(cat => {
        const active = selected === cat.id;
        return (
          <Pressable
            key={cat.id}
            style={[styles.chip, active && { backgroundColor: cat.color }]}
            onPress={() => onSelect(cat.id)}
          >
            <Text style={[styles.chipText, active && styles.chipTextActive]}>
              {cat.icon} {cat.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}