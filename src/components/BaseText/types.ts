import { StyleProp, TextProps, TextStyle, ViewStyle } from 'react-native';

export type BaseTextColorModes = 'dark' | 'light';

export interface BaseTextProps extends TextProps {
    style?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
}
