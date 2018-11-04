import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: fonts.fontPrimary,
        textAlign: 'center',
        color: colors.white,
        elevation: 5
    },

    button: {
        justifyContent: 'center'
    },

    smallButton: {
        width: metrics.widthPercentageToDP('20%'),
        height: metrics.widthPercentageToDP('10%')
    },

    regularButton: {
        width: metrics.widthPercentageToDP('30%'),
        height: metrics.widthPercentageToDP('15%')
    },

    bigButton: {
        width: metrics.widthPercentageToDP('40%'),
        height: metrics.widthPercentageToDP('20%')
    },

    smallFont: {
        fontSize: fonts.small
    },

    regularFont: {
        fontSize: fonts.regular
    },

    bigFont: {
        fontSize: fonts.big
    }
});

export default styles;