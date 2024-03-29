/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
    View
} from 'react-native';
import { Text } from '../src/components';

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <Text>Cool</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
