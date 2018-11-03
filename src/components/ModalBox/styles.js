import { StyleSheet } from 'react-native';

import { colors, metrics } from '../../styles';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerModal: {
        backgroundColor: colors.dark,
        width: metrics.widthPercentageToDP('80%'),
        borderRadius: 5,
        padding: 5
    },

    closeButton: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: metrics.widthPercentageToDP('8%'),
        height: metrics.widthPercentageToDP('8%')
    },
    
    contentContainer: {
        backgroundColor: colors.light,
        padding: 5,
        borderRadius: 5,
        width: '100%',
    }

});
