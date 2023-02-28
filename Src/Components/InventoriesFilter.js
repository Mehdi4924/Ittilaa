import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import CustomDropdown from './CustomDropdown';
import {hp, wp} from '../Constants/Responsive';
import CustomTextInput from './CustomTextInput';
import {colors} from '../Constants/Colors';
import {fonts} from '../Constants/Fonts';
import {AppFlow} from '../Api/ApiCalls';
import {
  invenCategories,
  purpose,
  sizes,
  typeItem,
} from '../Constants/dummyData';
import Slider from 'rn-range-slider';
import Thumbs from './RangeSliderComponents/Thumbs';
import Rails from './RangeSliderComponents/Rails';
import RailSelected from './RangeSliderComponents/RailSelected';
import Label from './RangeSliderComponents/Label';
import Notch from './RangeSliderComponents/Notch';
import CustomButton from './CustomButton';

export default function InventoriesFilter(props) {
  console.log(props, 'filter modal');
  useEffect(() => {}, [props?.filterModal]);
  const [filterItems, setFilterItems] = useState({});
  const [cities, setCities] = useState([]);
  const [societyItem, setSocietyItem] = useState([]);

  const [low, setLow] = useState();
  const [high, setHigh] = useState();
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  const renderThumb = useCallback(() => <Thumbs name={'High'} />, []);
  const renderRail = useCallback(() => <Rails />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);

  useEffect(() => {
    getCities();
  }, []);
  const getCities = async () => {
    setCities([]);
    setSocietyItem([]);
    await AppFlow.getCitySociety()
      .then(res => {
        console.log(res.data);
        setCities(res?.data?.data?.city);
        setSocietyItem([...res?.data?.data?.society, {id: -1, name: 'Other'}]);
      })
      .catch(error => console.log('error', error))
      .finally(() => {});
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.filterModal}
        style={{backgroundColor: 'red'}}>
        <TouchableOpacity
          style={styles.backdrop}
          onPress={() => props.onCloseModal()}
        />

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView
              style={{
                width: wp(90),
              }}
              showsVerticalScrollIndicator={false}>
              <CustomDropdown
                data={cities}
                topLabelText={'City'}
                labelFieldName={'name'}
                valueFieldName={'id'}
                iconType="material"
                iconName="place"
                placeholder={'Select City'}
                value={filterItems.city || ''}
                onChange={item => {
                  setFilterItems(previous => {
                    return {...previous, city: item.id};
                  });
                }}
              />
              <CustomDropdown
                data={societyItem}
                topLabelText={'Society'}
                labelFieldName={'name'}
                valueFieldName={'id'}
                placeholder={'Select Society'}
                iconName={'users'}
                iconType="font-awesome"
                value={filterItems.society || ''}
                onChange={item => {
                  setFilterItems(previous => {
                    return {...previous, society: item.id};
                  });
                }}
              />
              <View style={styles.dropdownsContainer}>
                <CustomDropdown
                  data={typeItem}
                  topLabelText={'Type'}
                  labelFieldName={'label'}
                  valueFieldName={'value'}
                  iconType="material"
                  iconName="merge-type"
                  placeholder={'Select Type'}
                  value={filterItems.type || ''}
                  onChange={item => {
                    setFilterItems(previous => {
                      return {...previous, type: item.value};
                    });
                  }}
                  dropdown={{
                    width: wp(43),
                  }}
                />
                <CustomDropdown
                  data={purpose}
                  topLabelText={'Purpose'}
                  labelFieldName={'label'}
                  valueFieldName={'value'}
                  iconType="material"
                  iconName="business"
                  placeholder={'Purpose'}
                  value={filterItems?.purpose || ''}
                  onChange={item => {
                    setFilterItems(previous => {
                      return {...previous, purpose: item.value};
                    });
                  }}
                  dropdown={{
                    width: wp(43),
                  }}
                />
              </View>

              <CustomDropdown
                data={invenCategories}
                topLabelText={'Category'}
                labelFieldName={'label'}
                valueFieldName={'value'}
                iconType="material"
                iconName="category"
                placeholder={'Select Category'}
                value={filterItems?.clsCategory || ''}
                onChange={item => {
                  setFilterItems(previous => {
                    return {...previous, clsCategory: item.value};
                  });
                }}
                dropdown={{
                  width: wp(90),
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <CustomTextInput
                  topText="Prop No."
                  iconType="material"
                  iconName="fullscreen-exit"
                  iconSize={26}
                  placeholder="Prop No."
                  textInputContainer={styles.plNoTxtInpContainer}
                  textInputStyles={styles.plNoTxtInpStyles}
                  textInputView={styles.plNoTxtInpView}
                  valu={filterItems.propNo || ''}
                  onChangeText={e => {
                    setFilterItems(prev => {
                      return {...prev, propNo: e};
                    });
                  }}
                />
                <CustomTextInput
                  topText="Plot size."
                  iconType="material"
                  iconName="fullscreen"
                  iconSize={26}
                  placeholder="Size."
                  textInputContainer={styles.plNoTxtInpContainer}
                  textInputStyles={styles.plNoTxtInpStyles}
                  textInputView={styles.plNoTxtInpView}
                  valu={filterItems.plotSize || ''}
                  onChangeText={e => {
                    setFilterItems(prev => {
                      return {...prev, plotSize: e};
                    });
                  }}
                />
                <CustomDropdown
                  dropdown={styles.sizesDropdown}
                  data={sizes}
                  topLabelText={'Size'}
                  labelFieldName={'label'}
                  valueFieldName={'value'}
                  placeholder={filterItems?.sizeUnit || 'Marla'}
                  value={filterItems?.sizeUnit || ''}
                  onChange={item => {
                    setFilterItems(previous => {
                      return {...previous, sizeUnit: item.value};
                    });
                  }}
                />
              </View>
              <CustomTextInput
                textInputContainer={{marginTop: hp(2), borderRadius: 8}}
                topText="Block"
                iconType="material"
                iconName="grid-view"
                iconSize={26}
                placeholder="Enter Block"
                valu={filterItems.block || ''}
                onChangeText={e => {
                  setFilterItems(prev => {
                    return {...prev, block: e};
                  });
                }}
              />
              <View style={{marginTop: hp(2)}}>
                <Text style={styles.rangeText}>Price Range</Text>
                <Slider
                  style={styles.slider}
                  min={0}
                  max={1000000}
                  step={10}
                  floatingLabel
                  renderThumb={renderThumb}
                  renderRail={renderRail}
                  renderRailSelected={renderRailSelected}
                  renderLabel={renderLabel}
                  renderNotch={renderNotch}
                  onValueChanged={(low, high) => {
                    handleValueChange(low, high);
                  }}
                />
                <CustomButton
                  btnContainer={{
                    ...styles.submitBtnContainer,
                    alignSelf: 'center',
                    marginTop: hp(3),
                  }}
                  btnText="Submit"
                  indicator={false}
                  onPress={() => {
                    props.onSubmit({...filterItems, high, low});
                  }}
                  disabled={false}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  dropdownsContainer: {
    width: wp(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: -hp(5),
    bottom: 0,
    right: 0,
    left: 0,
  },
  modalView: {
    width: wp(100),
    height: hp(60),
    backgroundColor: colors.tertiary,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
  },
  textInputStyles: {
    width: wp(28),
    fontFamily: fonts.regular,
  },
  plNoTxtInpContainer: {
    width: wp(30),
    height: hp(7),
    justifyContent: 'flex-start',
    paddingHorizontal: wp(2),
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  plNoTxtInpStyles: {
    width: wp(20),
    fontFamily: fonts.regular,
  },
  plNoTxtInpView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizesDropdown: {
    height: hp(7),
    width: wp(25),
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  slider: {
    width: wp(90),
  },
  rangeText: {
    maxWidth: wp(30),
    backgroundColor: colors.primary,
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    color: colors.white,
    marginBottom: hp(3),
  },
});
