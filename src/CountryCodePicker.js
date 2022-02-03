import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
    FlatList,
} from 'react-native';
import { Header } from 'react-native-nav-header';
import { COLORS, SIZES, svgIcons,data } from '../constants';
import SvgImage from "./SvgImage";

const CountryCodePicker = ({ navigation_action, go_back, selectedCountry }) => {

    /**
     *  Header section
     */
    function renderHeader() {
        return (
            <Header
                containerStyle={{
                    backgroundColor: COLORS.white,
                    elevation: 5
                }}
                leftIcon={
                    <SvgImage
                        containerStyle={{
                            width: `${25}px`,
                            height: `${25}px`,
                            icon_name: svgIcons.close_icon
                        }}
                    />}
                leftTitle={'Choose Country'}
                left_navigationAction={go_back}
            />
        )
    }

    /**
     * render countries
     */
    function renderCountries() {
        const { countryData } = data
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={countryData}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        country_item(item, index)
                    )
                }}
            />
        )
    }

    function country_item(item, index) {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: SIZES.radius * 2,
                    marginBottom: countryData.length - 1 === index ? SIZES.padding : 0
                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: SIZES.padding
                    }}
                >

                    <TouchableOpacity
                        onPress={() => navigation_action(item)}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',

                        }}
                    >

                        <View
                            style={{
                                backgroundColor: COLORS.white,
                                borderRadius: 20,
                                width: 21,
                                height: 21,
                                borderWidth: 2,
                                borderColor: item.id === selectedCountry.id ? COLORS.blue : COLORS.gray,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >

                            <View
                                style={{
                                    backgroundColor: item.id === selectedCountry.id ? COLORS.blue : COLORS.white,
                                    borderRadius: 10,
                                    width: 12,
                                    height: 12,
                                    alignSelf: 'center'
                                }}
                            />

                        </View>

                    </TouchableOpacity>

                    <Text
                        onPress={() => navigation_action(item)}
                        style={{
                            ...FONTS.regularFont,
                            marginLeft: SIZES.padding,
                            fontSize: 16,
                            lineHeight: 22
                        }}
                    >{item.country_name}</Text>

                </View>

                <TouchableOpacity
                    onPress={() => navigation_action(item)}
                    style={{
                        marginHorizontal: SIZES.padding
                    }}
                >

                    <SvgImage
                        containerStyle={{
                            width: `${30}px`,
                            height: `${30}px`,
                            icon_name: item.country_flag
                        }}
                    />

                </TouchableOpacity>

            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/*Top section */}
            {renderHeader()}

            {/*Middle section */}
            {renderCountries()}

        </SafeAreaView>
    )
}

export default CountryCodePicker;