import React, { Children } from 'react';

import { View } from 'react-native';

import { styles } from './styles';

const FormRow = (props) => {
  const { children } = props;
  return <View>{children}</View>;
};

export { FormRow };
