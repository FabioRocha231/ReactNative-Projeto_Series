import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const SerieCard = ({ serie, isFirstColumn, onNavigate }) => (
  <TouchableOpacity
    onPress={onNavigate}
    style={[
      styles.container,
      isFirstColumn ? styles.firstColumn : styles.lastColumn,
    ]}
  >
    <View style={styles.card}>
      {serie.img ? (
        <Image source={{ uri: serie.img }} aspectRatio={1} resizeMode="cover" />
      ) : null}
      <View style={styles.cardTitleWrapper}>
        <Text style={styles.cardTitle}>{serie.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export { SerieCard };
