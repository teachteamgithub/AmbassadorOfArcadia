import { StyleSheet } from 'react-native';

import { metrics } from '../../styles';

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        padding: metrics.padding,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    badges: {
        margin: 10,
        flexGrow: 1,
    }

});

export default styles;