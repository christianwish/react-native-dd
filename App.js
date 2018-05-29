import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Screen1 } from './react-components/Screen1';
import { Wrapper } from './react-components/Wrapper';

const hintStyle = {
    position: 'absolute',
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
    bottom: 50,
}

const App = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
    };

    $.render = () => {
        return (
            <Wrapper>
                <ScrollView horizontal={true} pagingEnabled={true}>
                    <Wrapper backgroundColor={'blue'}>
                        <Screen1/>
                    </Wrapper>
                    <Wrapper backgroundColor={'#7876E6'}>
                    </Wrapper>
                    <Wrapper backgroundColor={'#B156B9'}>
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
