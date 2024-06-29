import React from 'react';
import {HeaderProps} from './props';
import {Text, TouchableOpacity, View} from 'react-native';
import IcoBack from '../../image/icon/Ico-Back.svg';
import {black} from '../color';
import {Metrics} from '../metrics';

const Header: React.FunctionComponent<HeaderProps> = props => {
  const {
    onPress = () => {},
    title,
    color = black,
    iconContainerStyle,
    textStyle,
  } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignContent: 'center',
        width: Metrics.screenWidth,
        height: 35,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          width: Metrics.screenWidth,
        }}>
        {!!title ? (
          <Text
            style={[
              textStyle,
              {color: color, textAlign: 'center', fontWeight: '700'},
            ]}>
            {title}
          </Text>
        ) : null}
      </View>
      <TouchableOpacity
        style={[iconContainerStyle, {padding: 5, position: 'absolute'}]}
        onPress={onPress}>
        <IcoBack height={30} width={30} stroke={color} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
