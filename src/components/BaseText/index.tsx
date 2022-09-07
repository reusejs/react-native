import * as React from 'react';
import { Text, View } from 'react-native';
import { type BaseTextProps } from './types';

export default function TextBase({
    children,
    containerStyle,
    style,
}: BaseTextProps): React.ReactElement {
    return (
        <View style={containerStyle}>
            <Text style={style}>{children}</Text>
        </View>
    );
}
