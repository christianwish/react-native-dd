import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Screen1 } from './react-components/Screen1';
import { Screen2 } from './react-components/Screen2';
import { Screen3 } from './react-components/Screen3';
import { Screen4 } from './react-components/Screen4';
import { Wrapper } from './react-components/Wrapper';

const hintStyle = {
    position: 'absolute',
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    bottom: 50,
};

const hiStyle = {
    color: '#777',
    fontWeight: '600',
    fontSize: 50,
};

const App = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
    };

    $.render = () => {
        return (
            <Wrapper>
                <ScrollView horizontal={true} pagingEnabled={true}>
                    <Wrapper backgroundColor={'#fff'}>
                        <Text style={hiStyle}>Hi!</Text>
                    </Wrapper>
                    <Wrapper backgroundColor={'blue'}>
                        <Screen1 />
                    </Wrapper>
                    <Wrapper backgroundColor={'#F7DA82'}>
                        <Screen2 />
                    </Wrapper>
                    <Wrapper backgroundColor={'#B156B9'}>
                        <Screen3 />
                    </Wrapper>
                    <Wrapper backgroundColor={'#222'}>
                        <Screen4 />
                    </Wrapper>
                </ScrollView>
                <Text style={hintStyle}>
                    Swipe to see more
                </Text>
            </Wrapper>
        );
    };

    return $;
};

export default App;
