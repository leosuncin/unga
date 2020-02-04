import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

const Card: React.FC<ViewProps> = props => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};
const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
