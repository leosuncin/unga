import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PRIMARY_COLOR } from '../constants/colors';

type HeaderProps = {
  title: string;
};
const Header: React.FC<HeaderProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 18,
  },
});

export default Header;
