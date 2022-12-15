import React, {useEffect, Fragment} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {LogoCooking} from '../../assets';
import {Gap} from '../../components';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('MainApp'), 2000);
  }, []);
  return (
    <Fragment>
      <StatusBar animated={true} backgroundColor={colors.secondary} />
      <View style={styles.container}>
        <View>{null}</View>
        <View>
          <Image source={LogoCooking} style={{width: 200, height: 120}} />
          <Gap height={20} />
          <Text style={styles.text}>Resep Menu Masakan Indonesia</Text>
          <Gap height={10} />
          <ActivityIndicator color={colors.white} />
        </View>
        <View>
          <Text
            style={
              styles.footer
            }>{`© CraftWith Naandalist ${new Date().getFullYear()}`}</Text>
          <Gap height={20} />
        </View>
      </View>
    </Fragment>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.white,
    fontFamily: 'NotoSerif-Bold',
    textAlign: 'center',
    maxWidth: 200,
  },
  footer: {
    color: colors.white,
    fontSize: 12,
  },
});
