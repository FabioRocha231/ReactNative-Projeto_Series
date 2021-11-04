import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles';
import { FormRow } from '../../components/FormRow';

class LoginPage extends React.Component {
  render() {
    return (
      <View>
        <FormRow>
          <TextInput />
        </FormRow>
      </View>
    );
  }
}

export { LoginPage };
