import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { connect } from 'react-redux';
import { styles } from './styles';

import { FormRow } from '../../components/FormRow';
import { setField, saveSerie, setWholeSerie, resetForm } from '../../actions';

class SerieFormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    const { navigation, setWholeSerie, resetForm } = this.props;
    const { params } = navigation.state;

    params && params.serieToEdit
      ? setWholeSerie(params.serieToEdit)
      : resetForm();
  }

  render() {
    const { serieForm, setField, saveSerie, navigation } = this.props;
    return (
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
            {this.state.isLoading ? (
              <ActivityIndicator size="small" color="#0000ff" />
            ) : (
              <Button
                onPress={async () => {
                  this.setState({ isLoading: true });
                  try {
                    await saveSerie(serieForm);
                    navigation.goBack();
                  } catch (error) {
                    Alert.alert('Erro!', error.message);
                  } finally {
                    this.setState({ isLoading: false });
                  }
                }}
                title="Salvar"
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state) {
  return {
    serieForm: state.serieForm,
  };
}

const mapDispatchToProps = {
  setField,
  saveSerie,
  setWholeSerie,
  resetForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);
