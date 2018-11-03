import { StyleSheet } from 'react-native';

import { fonts, metrics, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    bgImage: {
        flex: 1,
        width: metrics.widthPercentageToDP('100%'),
        height: metrics.heightPercentageToDP('100%'),
    },

    headerContainer: {
        flex: 7,
        padding: metrics.padding,
        alignItems: 'center',
        justifyContent: 'space-around',
        fontFamily: fonts.fontPrimary
    },

    image: {
        width: metrics.widthPercentageToDP('70%'),
        height: metrics.widthPercentageToDP('70%'),
        borderRadius: metrics.widthPercentageToDP('70%') * 0.5
    },

    question: {
        fontSize: fonts.big,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.fontPrimary,
        color: colors.white
    },

    optionsContainer: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.padding,
        justifyContent: 'space-around'
    },

    option: {
        color: colors.white,
        fontWeight: 'bold',
        fontFamily: fonts.fontPrimary
    },

});

export default styles;