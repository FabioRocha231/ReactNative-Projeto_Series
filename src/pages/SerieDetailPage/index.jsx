import React from 'react';
import { Image, ScrollView, Button, View } from 'react-native';
import { connect } from 'react-redux';

import { deleteSerie } from '../../actions';
import { styles } from './styles';
import { Line } from '../../components/Line';
import { LongText } from '../../components/LongText';

class SerieDetailPage extends React.Component {
  render() {
    const { navigation } = this.props;
    const { serie } = navigation.state.params;
    return (
      <ScrollView>
        {serie.img ? (
          <Image style={styles.image} source={{ uri: serie.img }} />
        ) : null}
        <Line label="Titulo" content={serie.title} />
        <Line label="Genero" content={serie.gender} />
        <Line label="Nota" content={serie.rate} />
        <LongText label="Descrição" content={serie.description} />

        <View style={styles.button}>
          <Button
            title="Editar"
            color="#4AF09B"
            onPress={() => {
              navigation.replace('SerieForm', { serieToEdit: serie });
            }}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Deletar"
            color="#8C031C"
            onPress={async () => {
              const hasDeleted = await this.props.deleteSerie(serie);
              hasDeleted ? navigation.goBack() : null;
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default connect(null, { deleteSerie })(SerieDetailPage);
