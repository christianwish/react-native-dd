import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { Example2 } from './Example2';

const styles = {
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
    star: {
        margin: 10,
        fontSize: 30,
    },
    question: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 18,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        textAlign: 'center',
    }
};

const Star = ({ isActive, onPress }) => (
    <Text style={styles.star} onPress={onPress}>
        {isActive && '❤️'}
        {!isActive && '💛'}
    </Text>
);

export const Screen2 = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
        state: {
            stars: 0,
        },
    };

    const handlePress = (stars) => $.setState({ stars });

    $.render = () => {
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <Text style={styles.h1}>Example 2</Text>
                    <Text style={styles.h2}>Rating ({ ($.state.stars) })</Text>
                </View>
                <View style={styles.container}>
                    <Example2 stars={ $.state.stars } />
                    <Text style={styles.question}>Und? Wie wars?</Text>
                </View>
                <View style={{ ...styles.container, flexDirection: 'row' }}>
                    {
                        Array.from('a'.repeat(5)).map((e, i) => (
                            <Star
                              key={`i-${i}`}
                              onPress={() => handlePress(i + 1)}
                              isActive={((i + 1) <= $.state.stars)}
                            />
                        ))
                    }
                </View>
            </React.Fragment>
        );
    };

    return $;
};
