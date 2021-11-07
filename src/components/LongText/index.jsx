import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
  NativeModules,
} from 'react-native';
import { styles } from './styles';

NativeModules.UIManager.setLayoutAnimationEnabledExperimental &&
  NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);

class LongText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  togleIsExpanded() {
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
    });
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    LayoutAnimation.spring();
  }

  render() {
    const { label = '', content = '-' } = this.props;
    const { isExpanded } = this.state;

    return (
      <View style={line}>
        <Text style={[cell, negrito]}>{label}</Text>
        <TouchableWithoutFeedback onPress={() => this.togleIsExpanded()}>
          <Text style={[cell, conteudo, isExpanded ? expanded : collapsed]}>
            {content}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const { line, cell, negrito, conteudo, collapsed, expanded } = styles;

export { LongText };
