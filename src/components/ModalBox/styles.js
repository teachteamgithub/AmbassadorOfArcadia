import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    modalOuterView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    
    containerModal: {
        backgroundColor: colors.borderModal,
        borderRadius: 5,
        padding: 5,
        borderWidth: .5,
        borderColor: colors.darker,
        elevation: 5,
        marginTop: metrics.heightPercentageToDP('25%'),
        marginHorizontal: 20
    },

    contentContainer: {
        backgroundColor: colors.contentModal,
        padding: 5,
        borderRadius: 5,
        width: '100%',
        elevation: 2,
    },

    okButton: {
        marginTop: 20,
        alignItems: 'center'
    },

    textContent: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.small,
        color: colors.darker,
        textAlign: 'center',
        marginTop: 10,
        padding: 5
    },

    closeButtonContainer: {
        flexDirection: 'row',
    },

    containerTitle: {
        flex: 3,
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 50
    },

    title: {
        fontFamily: fonts.fontPrimary,
        color: colors.white,
        fontSize: fonts.big,
    },

    containerCloseButton: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 5,
    },
    
    closeButton: {
        width: metrics.widthPercentageToDP('7%'),
        height: metrics.widthPercentageToDP('7%'),
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
