import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: metrics.widthPercentageToDP('100%') - 30,
        height: (metrics.widthPercentageToDP('100%') - 30) * 0.15,
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: colors.darker,
    },

    text: {
        fontSize: metrics.heightPercentageToDP('2.5%'),
        color: colors.white,
        fontWeight: 'bold',
        fontFamily: 'JustAnotherHand-Regular'
    }
});

export default styles;