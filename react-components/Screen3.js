import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Example3 } from './Example3';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export const Screen3 = (props) => {
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
                    <Text style={styles.h1}>Example 3</Text>
                    <Text style={styles.h2}>^^^</Text>
                </View>
                <View style={styles.container}>
                    <Example3 pressed={ $.state.pressed } />
                </View>
                <View style={styles.container}>
                    <Button title={'animate'} onPress={handlePress} />
                </View>
            </React.Fragment>
        );
    };

    return $;
};
