import PropTypes from 'prop-types';
import React from 'react';
import { Text, Animated, Easing } from 'react-native';

const { timing, sequence } = Animated;

const ANIMATED_TOP_MARGIN = 80;
const ANIMATED_HEIGHT = 60;

const BASE_STYLE = {
    width: 60,
    height: ANIMATED_HEIGHT,
    marginBottom: ANIMATED_TOP_MARGIN,
    borderRadius: 50,
    padding: 12,
    paddingTop: 18,
    backgroundColor: '#09f',
};

const TEXT_STYLE = {
    textAlign: 'center',
    fontSize: 20,
}

const animationSettings = {
    easing: Easing.inOut(Easing.ease),
    duration: 120,
};

/**
 * Component Example 1
 */
export const Example1 = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
        state: {
            marginTop: new Animated.Value(ANIMATED_TOP_MARGIN),
            height: new Animated.Value(60),
        },
    };

    const makeAnim = () => sequence([
        timing($.state.height, { ...animationSettings, toValue: (ANIMATED_HEIGHT - 4) }),
        timing($.state.height, { ...animationSettings, toValue: ANIMATED_HEIGHT }),
        timing($.state.marginTop, { ...animationSettings, toValue: 0 }),
        timing($.state.marginTop, { ...animationSettings, toValue: ANIMATED_TOP_MARGIN }),
    ]);

    $.componentWillReceiveProps = () => makeAnim().start();

    $.render = () => {
        const style = {
            ...BASE_STYLE,
            marginTop: $.state.marginTop,
            height: $.state.height,
        };

        return (
            <Animated.View style={style}>
                <Text style={TEXT_STYLE}>{ $.props.pressed }</Text>
            </Animated.View>
        );
    };

    return $;
};

Example1.propTypes = {
    pressed: PropTypes.number,
};
