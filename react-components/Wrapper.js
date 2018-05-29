import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

const dimension = Dimensions.get('window');

const containerStyle = {
    flex: 1,
    width: dimension.width,
    height: dimension.height,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
};

export const Wrapper = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
        state: {
            width: dimension.width,
            height: dimension.height,
        },
    };

    Dimensions.addEventListener('change', () => {
        const { width, height } = Dimensions.get('window');
        $.setState({ width, height });
    });

    $.render = () => {
        const style = {
            ...containerStyle,
            width: $.state.width,
            height: $.state.height,
            backgroundColor: $.props.backgroundColor || '#fff',
        }

        return (
            <View style={style}>
                { $.props.children }
            </View>
        );
    };

    return $;
};
