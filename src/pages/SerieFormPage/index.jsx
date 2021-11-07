import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { connect } from 'react-redux';
import { styles } from './styles';

import { FormRow } from '../../components/FormRow';
import { setField, saveSerie } from '../../actions';

const SerieFormPage = ({ serieForm, setField, saveSerie }) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
    enabled
  >
    <ScrollView>
      <FormRow first>
        <TextInput
          placeholder="Titulo"
          value={serieForm.title}
          onChangeText={(value) => setField('title', value)}
        />
      </FormRow>

      <FormRow>
        <TextInput
          placeholder="URL da imagem"
          value={serieForm.img}
          onChangeText={(value) => setField('img', value)}
        />
      </FormRow>

      <FormRow>
        <Picker
          selectedValue={serieForm.gender}
          onValueChange={(itemValue) => setField('gender', itemValue)}
        >
          <Picker.Item label="Policial" value="policial" />
          <Picker.Item label="Comedia" value="comedia" />
          <Picker.Item label="Terror" value="terror" />
          <Picker.Item label="Açao" value="açao" />
          <Picker.Item label="SciFi" value="SciFi" />
        </Picker>
      </FormRow>

      <FormRow>
        <View style={styles.sameRow}>
          <Text>Nota:</Text>
          <Text>{serieForm.rate}</Text>
        </View>
        <Slider
          onValueChange={(value) => setField('rate', value)}
          value={serieForm.rate}
          minimumValue={0}
          maximumValue={100}
          step={5}
        />
      </FormRow>

      <FormRow last>
        <TextInput
          placeholder="Descrição"
          value={serieForm.description}
          onChangeText={(value) => setField('description', value)}
          multiline={true}
          numberOfLines={5}
        />
      </FormRow>
      <View style={styles.Button}>
        <Button onPress={() => saveSerie(serieForm)} title="Salvar" />
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
);

function mapStateToProps(state) {
  return {
    serieForm: state.serieForm,
  };
}

const mapDispatchToProps = {
  setField,
  saveSerie,
};

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);
