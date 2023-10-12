/* eslint-disable react/no-unstable-nested-components */
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import Home from '../../assets/icons/home.svg';
import HomeActive from '../../assets/icons/home-active.svg';
import Pesanan from '../../assets/icons/pesanan.svg';
import PesananActive from '../../assets/icons/pesanan-active.svg';
import Akun from '../../assets/icons/akun.svg';
import AkunActive from '../../assets/icons/akun-active.svg';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon: any = () => {
    if (label === 'Home') {
      return isFocused ? <HomeActive /> : <Home />;
    }
    if (label === 'Pesanan') {
      return isFocused ? <PesananActive /> : <Pesanan />;
    }
    if (label === 'Akun') {
      return isFocused ? <AkunActive /> : <Akun />;
    }

    return <Home />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (isFocused: boolean) => ({
    fontSize: 13,
    color: isFocused ? '#55CB95' : '#C8C8C8',
  }),
});

export default TabItem;
