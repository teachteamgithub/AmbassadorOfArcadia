import { StyleSheet } from 'react-native';

import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.bigger,
        textAlign: 'center',
        color: colors.white
    },

    button: {
        width: metrics.widthPercentageToDP('50%'),
        height: metrics.widthPercentageToDP('20%'),
        justifyContent: 'center',
    }
});

export default styles;