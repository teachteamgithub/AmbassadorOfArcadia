import { StyleSheet } from 'react-native';

import { metrics, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerEt: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: metrics.padding,
        zIndex: 1,
        width: metrics.widthPercentageToDP('40%'),
        height: metrics.heightPercentageToDP('42%'),
    },
    et: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain'
    },
    containerBalloon: {
        zIndex: 2,
        position: 'absolute',
        left: metrics.widthPercentageToDP('40%'),
        bottom: metrics.heightPercentageToDP('18%'),
        padding: 30,
        backgroundColor: colors.transparent
    },
    talkBalloonSquare: {
        width: metrics.widthPercentageToDP('40%'),
        backgroundColor: colors.primary,
        borderRadius: 10,
        padding: metrics.padding
    },
    talkBalloonTriangle: {
        left: metrics.widthPercentageToDP('40%') * -1,
        bottom: 35,
        borderTopColor: colors.transparent,
        borderTopWidth: 13,
        borderRightWidth: 26,
        borderRightColor: colors.primary,
        borderBottomWidth: 13,
        borderBottomColor: colors.transparent
    },
    textBalloon: {
        color: colors.white,
        fontSize: metrics.heightPercentageToDP('2%'),
        textAlign: 'center'
    }
});

export default styles;