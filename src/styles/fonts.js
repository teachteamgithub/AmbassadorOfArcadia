import { Dimensions, PixelRatio } from 'react-native';

const fontPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

export default {
  huge: fontPercentageToDP('5%'),
  bigger: fontPercentageToDP('3.5%'),
  big: fontPercentageToDP('2.7%'),
  regular: fontPercentageToDP('2.2%'),
  small: fontPercentageToDP('1.7%'),
  smaller: fontPercentageToDP('1%'),
  fontPrimary: 'Supercell-Magic',
};
