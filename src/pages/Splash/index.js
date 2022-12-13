import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Logo, LogoCooking} from '../../assets';
import {Gap} from '../../components';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Logo /> */}
      <Image source={LogoCooking} style={{width: 200, height: 120}} />
      <Gap height={20} />
      <Text style={styles.text}>Resep Menu Masakan Indonesia</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e25327',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'NotoSerif-Bold',
    textAlign: 'center',
    maxWidth:200
  },
});
