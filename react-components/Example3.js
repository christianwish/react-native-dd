import PropTypes from 'prop-types';
import React from 'react';
import { Text, Animated, Easing, View } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const { timing, sequence, parallel } = Animated;

const animationSettings = {
    easing: Easing.bounce,
    duration: 500,
};

const getPath = (s1, s2, s3, s4) => `-0.0847134455 200.079922 27.0419811 ${s1} 53.3173098 200.079922 83.6336001 ${s2} 111.30299 200.079922 143.689189 ${s3} 177.812416 200.079922 200.625792 ${s4} 200.625792 200.079922`;

/**
 * Component Example 3
 */
export const Example3 = (props) => {
    const $ = {
        ...React.Component.prototype,
        props,
        state: {
            c1: new Animated.Value(0),
            c2: new Animated.Value(0),
            c3: new Animated.Value(0),
            c4: new Animated.Value(0),
        },
    };

    $.state.c1.addListener(() => $.forceUpdate());
    $.state.c2.addListener(() => $.forceUpdate());
    $.state.c3.addListener(() => $.forceUpdate());
    $.state.c4.addListener(() => $.forceUpdate());

    const makeAnim = () => sequence([
        timing($.state.c1, { ...animationSettings, toValue: 100 }),
        timing($.state.c2, { ...animationSettings, toValue: 160 }),
        timing($.state.c3, { ...animationSettings, toValue: 140 }),
        timing($.state.c4, { ...animationSettings, toValue: 50 }),
        timing($.state.c1, { ...animationSettings, toValue: 30 }),
        timing($.state.c2, { ...animationSettings, toValue: 10 }),
        timing($.state.c3, { ...animationSettings, toValue: 40 }),
        timing($.state.c4, { ...animationSettings, toValue: 60 }),
    ]);

    $.componentWillReceiveProps = () => makeAnim().start();

    $.render = () => {
        const points = [
            $.state.c1.__getValue(),
            $.state.c2.__getValue(),
            $.state.c3.__getValue(),
            $.state.c4.__getValue(),
        ];

        const path = getPath(points[0], points[1], points[2], points[3]);

        return (
            <React.Fragment>
                <Svg
                    height="200"
                    width="200"
                >
                    <Polygon
                        points={path}
                        fill="rgba(255, 255, 255, 0.3)"
                    />
                </Svg>
                <Svg
                    style={{ transform: [ { rotate: '180deg' } ] }}
                    height="200"
                    width="200"
                >
                    <Polygon
                        points={path}
                        fill="rgba(255, 255, 255, 0.3)"
                    />
                </Svg>
            </React.Fragment>
        );
    };

    return $;
};

Example3.propTypes = {
    pressed: PropTypes.number,
};
