import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    bgImage : {
        width: metrics.widthPercentageToDP('36%'), 
        height: metrics.widthPercentageToDP('18%'),
        justifyContent: 'center',
    },

    textStyle: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.big,
        color: colors.white,
        textAlign: 'center',
        borderColor: colors.darker
    }
});

export default styles;