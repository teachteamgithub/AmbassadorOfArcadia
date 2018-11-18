import { StyleSheet } from "react-native";

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    imageBackground: {
        width: metrics.widthPercentageToDP('100%'),
        height: metrics.heightPercentageToDP('100%'),
    },
    
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    
    containerPreview: {
        flex: 5,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    
    camera: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    
    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: metrics.padding
    },
    
    text: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.regular,
        color: colors.white,
        textAlign: 'center'
    },

    containerPhotos: {
        flex: 7,
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
        flex: 3,
        alignItems: 'center',
        marginBottom: 10,
        padding: metrics.padding
    },

    button: {
        flex: 1,
    },

    containerImagePlayer: {
        flex: 4,
        width: metrics.widthPercentageToDP('80%'),
        height: metrics.widthPercentageToDP('80%'),
        borderRadius: metrics.widthPercentageToDP('80%') * 0.5,
        justifyContent: 'center',
        padding: metrics.padding
    },

    imagePlayer: {
        width: metrics.widthPercentageToDP('75%'),
        height: metrics.widthPercentageToDP('75%'),
        borderRadius: metrics.widthPercentageToDP('80%') * 0.5,
    },

    containerTitleInstructions: {
        flex: 2
    },

    titleInstructions: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.bigger,
        color: colors.white,
        textAlign: 'center'
    },

    subtitleInstructions: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.small,
        color: colors.white,
        textAlign: 'center',
        marginBottom: 10
    },

    textInstruction: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.small,
        color: colors.white,
        textAlign: 'center',
        marginTop: 30
    },

    containerButtonInstructions: {
        flex: 2
    },

    headerContainerGame: {
        flex: 4,
        padding: metrics.padding,
        alignItems: 'center',
        justifyContent: 'space-around',
        fontFamily: fonts.fontPrimary
    },

    imageGame: {
        width: metrics.widthPercentageToDP('65%'),
        height: metrics.widthPercentageToDP('65%'),
        borderRadius: metrics.widthPercentageToDP('70%') * 0.5
    },

    questionGame: {
        fontSize: fonts.big,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.fontPrimary,
        color: colors.white
    },

    optionsContainerGame: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.padding,
        justifyContent: 'space-around',
        marginBottom: 20
    },

    optionGame: {
        color: colors.white,
        fontWeight: 'bold',
        fontFamily: fonts.fontPrimary
    },

    containerTitleFinalLevel: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerPunctuation: {
        flex: 6,
        alignItems: 'center',
    },
    
    containerPlayer: {
        flexDirection: 'row',  
        alignItems: 'center',
        marginBottom: 10,
    },
    
    imagePlayerPunctuation: {
        width: metrics.widthPercentageToDP('25%'),
        height: metrics.widthPercentageToDP('25%'),
        borderRadius: metrics.widthPercentageToDP('25%') * 0.5,
        marginRight: 10,
    },

    textPunctuation: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.regular,
        color: colors.white
    },

    buttonExit: {
        flex: 2
    }

});

export default styles;