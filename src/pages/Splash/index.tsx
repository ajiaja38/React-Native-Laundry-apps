import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import {SplashBackground, logo} from '../../assets';

const Splash: React.FC = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={SplashBackground} style={style.background}>
      <Image source={logo} style={style.logo} />
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 222,
    height: 105,
  },
});

export default Splash;
