import React from 'react';
import { Text } from 'react-native';

export const Basic = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
        state: {
            something: '',
        },
    };

    $.render = () => {
        return (<Text>Experiment</Text>);
    };

    return $;
};


export const Experiment = (props) => {
    const $ = { ...Basic(props) };

    $.render = () => <Text>{ $.state.something }</Text>

    return $;
};
