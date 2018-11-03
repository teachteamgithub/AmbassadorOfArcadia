import { StyleSheet } from 'react-native';

import { metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: metrics.widthPercentageToDP('100%'),
        height: metrics.heightPercentageToDP('100%')
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: metrics.padding
    },
    levelButton: {
        marginTop: 15,
        marginBottom: 5,
        alignItems: 'center'
    },
    phaseTextStyle: {
        fontFamily: fonts.fontPrimary,
        fontSize: fonts.small,
        textAlign: 'center',
        color: '#bbb',
        marginTop: 0,
        marginBottom: 20
    }
});

export default styles;