import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const AddSerieCard = ({ serie, isFirstColumn, onNavigate }) => (
  <TouchableOpacity
    onPress={onNavigate}
    style={[
      styles.container,
      isFirstColumn ? styles.firstColumn : styles.lastColumn,
    ]}
  >
    <View style={styles.card}>
      {/*<Image source={{ uri: serie.img }} aspectRatio={1} resizeMode="cover" />*/}
      <Text>Aqui vai nosso botao</Text>
    </View>
  </TouchableOpacity>
);

export { AddSerieCard };
