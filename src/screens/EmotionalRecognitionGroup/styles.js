import { StyleSheet } from "react-native";

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    imageBackground: {
        width: metrics.widthPercentageToDP('100%'),
        height: metrics.heightPercentageToDP('100%'),
    },

    container: {
        flex: 1,
    },

    containerPreview: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red'
    },

    camera: {
        flex: 1,
        width: metrics.widthPercentageToDP('100%'),
        height: metrics.widthPercentageToDP('100%'),
    },

    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.regular,
        color: colors.white,
        textAlign: 'center'
    },

    containerPhotos: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    playerImage: {
        width: metrics.widthPercentageToDP('30%'),
        height: metrics.widthPercentageToDP('30%'),
        borderRadius: metrics.widthPercentageToDP('15%'),
        margin: 10,
        borderWidth: 2,
        borderColor: colors.white,
    },

    containerButton: {
        flex: 2,
        alignItems: 'center',
        marginBottom: 10,
        padding: metrics.padding
    },

    button: {
        flex: 1,
    }

});

export default styles;