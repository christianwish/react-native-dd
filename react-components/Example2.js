import PropTypes from 'prop-types';
import React from 'react';
import { Text, Animated, Easing, View } from 'react-native';

const { timing, sequence } = Animated;

const ANIMATED_TOP_MARGIN = 80;
const ANIMATED_HEIGHT = 60;

const pointerStyle = {
    width: 1,
    height: 240,
    borderRadius: 50,
    backgroundColor: '#fff',
};

const pointerInner = {
    position: 'absolute',
    height: 240,
    width: 240,
    right: 0,
    top: 0,
    backgroundColor: '#fff',
};

const outerStyle = {
    width: 250,
    height: 120,
    overflow: 'hidden',
};

const innerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    overflow: 'hidden',
    borderRadius: 300,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
};

const faceStyle = {
    fontSize: 60,
    marginTop: 20,
};

const msgStyle = {
    color: '#CBA42F',
    fontWeight: '900',
    fontSize: 18,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    textAlign: 'center',
};

const animationSettings = {
    easing: Easing.bounce,
    duration: 500,
};

const faceArray = ['🤔', '☹️', '😒', '🙂', '😃', '😍'];
const msgArray = [
    'Und? Wie wars?',
    'Frag lieber nicht!',
    'Naaaja...',
    'Kann man machen.',
    'Echt erquickend!',
    '#einfachWOW',
];

const calcDeg = stars => ((180 / 5) * stars - 90);

/**
 * Component Example 2
 */
export const Example2 = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
        state: {
            rotate: new Animated.Value(calcDeg(props.stars || 0)),
        },
    };

    const makeAnim = (stars) => sequence([
        timing($.state.rotate, { ...animationSettings, toValue: calcDeg(stars) }),
    ]);

    $.componentWillReceiveProps = ({ stars }) => makeAnim(stars).start();

    $.render = () => {
        const deg = $.state.rotate.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });

        console.log(deg);

        const style = {
            ...pointerStyle,
            transform: [{ rotate: deg }],
        };

        return (
            <React.Fragment>
                <View style={outerStyle}>
                    <View style={innerStyle}>
                        <Animated.View style={style}>
                            <View style={pointerInner} />
                        </Animated.View>
                    </View>
                </View>
                <Text style={faceStyle}>{faceArray[$.props.stars]}</Text>
                <Text style={msgStyle}>{msgArray[$.props.stars]}</Text>
            </React.Fragment>
        );
    };

    return $;
};

Example2.propTypes = {
    pressed: PropTypes.number,
};
