import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../styles';

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    
    dropArea: {
        flex: 4,
        backgroundColor: colors.primary,
        alignItems: 'center',
        padding: metrics.padding,
        zIndex: 1,
    },

    title: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.small,
        color: colors.dark,
        textAlign: 'center'
    },

    dragArea: {
        flex: 6,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.padding,
        zIndex: 10,
    }

});

export default styles;