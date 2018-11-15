import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        padding: metrics.padding,
        alignItems: 'center'
    },

    questionContainer: {
        flex: 4,
        backgroundColor: colors.primary,
        width: metrics.widthPercentageToDP('95%'),
        height: metrics.heightPercentageToDP('25%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: metrics.padding,
        elevation: 5,
    },
    
    optionsContainer: {
        flex: 6,
        marginTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },

    questionText: {
        textAlign: 'center',
        fontSize: fonts.big,
        color: colors.white,
        fontFamily: fonts.fontPrimary,
        elevation: 5,
        textShadowOffset: { width: 1.5, height: 1.5 },
        textShadowColor: colors.darker,
    },


});

export default styles;