import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
    },
    h3: {
        color: '#fff',
        fontSize: 20,
        marginTop: 50,
        textAlign: 'center',
        fontWeight: '400',
    }
});

export const Screen4 = (props) => (
    <View style={styles.container}>
        <Text style={styles.h1}>Example 4</Text>
        <Text style={styles.h2}>Native Svg Animation</Text>
        <Text style={styles.h2}>Nicht fertig...</Text>
        <Text style={styles.h2}>😴</Text>
        <Text style={styles.h3}>Sorry!</Text>
    </View>
);
