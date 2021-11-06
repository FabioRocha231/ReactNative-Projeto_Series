import React from 'react';
import { Image, ScrollView } from 'react-native';

import { styles } from './styles';

import { Line } from '../../components/Line';
import { LongText } from '../../components/LongText';

class SerieDetailPage extends React.Component {
  render() {
    const { serie } = this.props.navigation.state.params;
    return (
      <ScrollView>
        <Image style={styles.image} source={{ uri: serie.img }} />
        <Line label="Titulo" content={serie.title} />
        <Line label="Genero" content={serie.gender} />
        <Line label="Nota" content={serie.rate} />
        <LongText label="Descrição" content={serie.description} />
      </ScrollView>
    );
  }
}

export { SerieDetailPage };
