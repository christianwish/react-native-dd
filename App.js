import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Example1 } from './react-components/Example_1';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center',
    },
    h2: {
        color: '#fff',
        fontSize: 30,
        marginLeft: 30,
        marginRight: 30,
        textAlign: 'center',
        fontWeight: '900',
    }
});

const App = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
        state: {
            pressed: 0,
        },
    };

    const handlePress = () => $.setState({ pressed: ($.state.pressed + 1) });

    $.render = () => {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Text style={styles.h1}>Example 1</Text>
                    <Text style={styles.h2}>Der springende Punkt</Text>
                </View>
                <View style={styles.container}>
                    <Example1 pressed={ $.state.pressed } />
                </View>
                <View style={styles.container}>
                    <Button title={'animate'} onPress={handlePress} />
                </View>
            </React.Fragment>
        );
    };

    return $;
};

export default App;
