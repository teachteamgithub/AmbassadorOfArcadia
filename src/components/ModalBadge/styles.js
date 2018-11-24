import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from '../../styles';

const styles = StyleSheet.create({

  modalOuterView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
  },

  containerModal: {
    backgroundColor: colors.borderModal,
    borderRadius: 5,
    padding: 5,
    borderWidth: .5,
    borderColor: colors.darker,
    elevation: 5,
    marginHorizontal: 50
  },

  contentContainer: {
    backgroundColor: colors.contentModal,
    padding: metrics.padding,
    borderRadius: 5,
    width: '100%',
    elevation: 2,
    alignItems: 'center'
  },

  closeButtonContainer: {
    flexDirection: 'row',
  },

  containerCloseButton: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 5,
  },

  closeButton: {
    width: metrics.widthPercentageToDP('7%'),
    height: metrics.widthPercentageToDP('7%'),
  },

  badgeImage: {
    width: metrics.widthPercentageToDP('30%'),
    height: metrics.widthPercentageToDP('30%'),
  },

  typeBadge: {
    fontFamily: fonts.fontPrimary,
    fontSize: fonts.regular,
    color: colors.darker,
    marginVertical: 10,
    textAlign: 'center'
  },

  containerTitle: {
    flex: 3,
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 50
  },

  title: {
    fontFamily: fonts.fontPrimary,
    color: colors.white,
    fontSize: fonts.big,
  },

});

export default styles;
