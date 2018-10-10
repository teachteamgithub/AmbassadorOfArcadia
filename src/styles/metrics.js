import { Platform, Dimensions, PixelRatio } from 'react-native';

const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

export default {
    padding: 15,
    ...Platform.select({
        ios: {
            headerHeight: 64,
            headerPadding: 20
        },
        android: {
            headerHeight: 44,
            headerPadding: 0
        }
    }),
    tabBarHeight: 50,
    widthPercentageToDP,
    heightPercentageToDP
};