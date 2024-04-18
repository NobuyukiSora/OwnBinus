import {Button, Text, TouchableOpacity} from 'react-native';
import {BButtonProps} from './props';
import {blue, white} from '../color';

const BButton: React.FunctionComponent<BButtonProps> = props => {
  const {
    onPress = () => {},
    title,
    backgroundColor = blue,
    color = white,
    styleButton,
    styleText,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styleButton,
        {
          backgroundColor: backgroundColor,
          paddingHorizontal: 20,
          paddingVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20
        },
      ]}
      {...rest}>
      <Text style={[styleText, {color: color, fontSize: 20, fontWeight: '600'}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BButton;
