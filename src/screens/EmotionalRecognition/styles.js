import { StyleSheet } from 'react-native';

import { fonts, metrics, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    bgImage: {
        flex: 1,
        width: metrics.widthPercentageToDP('100%'),
        height: metrics.heightPercentageToDP('100%'),
    },

    headerContainer: {
        flex: 5,
        padding: metrics.padding,
        alignItems: 'center',
        justifyContent: 'space-around',
        fontFamily: fonts.fontPrimary
    },

    image: {
        width: metrics.widthPercentageToDP('60%'),
        height: metrics.widthPercentageToDP('60%'),
        borderRadius: metrics.widthPercentageToDP('60%') * 0.5
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
        justifyContent: 'space-between',
    },
    
    option: {
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: fonts.fontPrimary
    },

});

export default styles;