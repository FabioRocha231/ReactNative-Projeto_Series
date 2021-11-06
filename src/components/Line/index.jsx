import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Line = ({ label = '', content = '-' }) => {
  return (
    <View style={line}>
      <Text style={[cell, negrito, label.length > 8 ? longLabel : null]}>
        {label}
      </Text>
      <Text style={[cell, conteudo]}>{content}</Text>
    </View>
  );
};

const { line, cell, negrito, conteudo, longLabel } = styles;

export { Line };
