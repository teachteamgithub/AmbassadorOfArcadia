import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: metrics.padding,
    },

    title: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.regular,
        color: colors.white,
        textAlign: 'center'
    },

    containerTextInputs: {
        marginTop: 20
    },

    titleForTextInput: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.small,
        color: colors.white
    },

    textInput: {
        marginTop: 5,
        backgroundColor: colors.white,
        borderRadius: 5,
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.small,
        padding: metrics.padding,
        height: metrics.heightPercentageToDP('7%'),
        marginBottom: 10
    },

    selectInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#bdc3c7',
        overflow: 'hidden',
        marginTop: 5,
        backgroundColor: colors.white,
        marginBottom: 10
    },
    
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50
    }

});

export default styles;