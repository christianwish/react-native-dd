import PropTypes from 'prop-types';
import React from 'react';
import { Text, Animated, Easing } from 'react-native';

const { timing, sequence } = Animated;

const ANIMATED_TOP_MARGIN = 80;
const ANIMATED_HEIGHT = 60;

const BASE_STYLE = {
    width: 4,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#09f',
};

const TEXT_STYLE = {
    textAlign: 'center',
    fontSize: 20,
}

const animationSettings = {
    easing: Easing.inOut(Easing.ease),
    duration: 200,
};

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

        const style = {
            ...BASE_STYLE,
            transform: [{ rotate: deg }],
        };

        return (
            <Animated.View style={style}>
            </Animated.View>
        );
    };

    return $;
};

Example2.propTypes = {
    pressed: PropTypes.number,
};
