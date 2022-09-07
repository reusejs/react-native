import { StyleSheet, View } from 'react-native';
import { TextBase } from 'reusable-react-native-components/components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default function App() {
    return (
        <View style={styles.container}>
            <TextBase>Heelllllo</TextBase>
        </View>
    );
}
