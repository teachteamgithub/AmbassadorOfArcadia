import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: metrics.widthPercentageToDP('100%'),
        height: metrics.heightPercentageToDP('100%'),
        padding: metrics.padding
    },
    header: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameStyle: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.huge,
        textAlign: 'center',
        color: colors.white
    },
    playButton: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    }
});

export default styles;