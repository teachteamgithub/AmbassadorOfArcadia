import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
    button: {
        width: metrics.widthPercentageToDP('90%'),
        height: metrics.widthPercentageToDP('18%'),
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.padding
    },

    text: {
        fontFamily: fonts.fontPrimary,
        textAlign: 'center',
        color: colors.white,
        elevation: 5,
        textShadowOffset: { width: .7, height: .7 },
        textShadowColor: colors.darker,
    },

    fontSizeBig: {
        fontSize: fonts.big
    },

    fontSizeRegular: {
        fontSize: fonts.regular
    },

    fontSizeSmall: {
        fontSize: fonts.small
    },
});

export default styles;