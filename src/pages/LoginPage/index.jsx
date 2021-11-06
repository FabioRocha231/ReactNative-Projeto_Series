import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';

import { tryLogin } from '../../actions';

import { styles } from './styles';
import { FormRow } from '../../components/FormRow';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mail: '',
      password: '',
      isLoading: false,
    };
  }

  onChangeHandler(field, value) {
    this.setState({
      [field]: value,
    });
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAWPsBiJVKcA5njWcrMwsvsI9VS7fb1jCg',
      authDomain: 'series-e1ddf.firebaseapp.com',
      projectId: 'series-e1ddf',
      storageBucket: 'series-e1ddf.appspot.com',
      messagingSenderId: '752276812030',
      appId: '1:752276812030:web:8ae272b271c48eec1135af',
      measurementId: 'G-HX99F2VQCR',
    };

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  tryLogin() {
    this.setState({ isLoading: true, message: '' });
    const { mail: email, password } = this.state;

    this.props
      .tryLogin({ email, password })
      .then((user) => {
        if (user) {
          return this.props.navigation.replace('Main');
        }
        this.setState({ isLoading: false, message: '' });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          message: this.getMessageByErrorCode(error.code),
        });
      });
  }

  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Usuario ou senha incorretos!';
      case 'auth/user-not-found':
        return 'Usuario ou senha incorretos!';
      case 'auth/invalid-email':
        return 'Email invalido!';
      case 'auth/email-already-in-use':
        return 'Este email ja existe no BD';
      default:
        return 'Erro desconhecido ate o momento';
    }
  }

  renderMessage() {
    const { message } = this.state;
    if (!message) {
      return null;
    }

    return (
      <View
        style={[
          styles.Logado,
          message !== 'Usuario Logado!' ? styles.error : null,
        ]}
      >
        <Text style={styles.message}>{message}</Text>
      </View>
    );
  }

  renderButton() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="small" color="#0000ff" />;
    }

    return (
      <View style={styles.Button}>
        <Button
          color="#5D688C"
          title="Entrar"
          onPress={() => this.tryLogin()}
        />
      </View>
    );
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={-190}
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      >
        <View style={styles.background}>
          <Text style={styles.login}>Faça login para continuar</Text>
          <FormRow first>
            <TextInput
              style={styles.textInput}
              placeholder="user@email.com"
              value={this.state.mail}
              onChangeText={(value) => this.onChangeHandler('mail', value)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </FormRow>

          <FormRow last>
            <TextInput
              style={styles.textInput}
              placeholder="******"
              secureTextEntry
              value={this.state.password}
              onChangeText={(value) => this.onChangeHandler('password', value)}
            />
          </FormRow>
          {this.renderButton()}
          {this.renderMessage()}
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(null, { tryLogin })(LoginPage);
