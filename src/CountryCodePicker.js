import React,{useState,useEffect} from "react";
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
import { COLORS, SIZES, svgIcons, data } from '../constants';
import SvgImage from "./SvgImage";

const CountryCodePicker = ({ navigation_action, go_back, selectedCountry }) => {

    const countries = [
        {
            id: 1,
            country_flag: svgIcons.kenya_flag,
            country_name: 'Kenya',
            country_code: 254,
            currency: ''
        },
        {
            id: 2,
            country_flag: svgIcons.algeria_flag,
            country_name: 'Algeria',
            country_code: 213,
            currency: ''
        },
        {
            id: 3,
            country_flag: svgIcons.ivory_coast_flag,
            country_name: `Cote d'ivoire`,
            country_code: 225,
            currency: ''
        },
        {
            id: 4,
            country_flag: svgIcons.egypt_flag,
            country_name: `Egypt`,
            country_code: 20,
            currency: ''
        },
        {
            id: 5,
            country_flag: svgIcons.ghana_flag,
            country_name: `Ghana`,
            country_code: 233,
            currency: ''
        },
        {
            id: 6,
            country_flag: svgIcons.moroco_flag,
            country_name: `Morocco`,
            country_code: 212,
            currency: ''
        },
        {
            id: 7,
            country_flag: svgIcons.nigeria_flag,
            country_name: `Nigeria`,
            country_code: 234,
            currency: ''
        },
        {
            id: 8,
            country_flag: svgIcons.senegal_flag,
            country_name: `Senegal`,
            country_code: 221,
            currency: ''
        },
        {
            id: 9,
            country_flag: svgIcons.south_africa_flag,
            country_name: `South Africa`,
            country_code: 27,
            currency: ''
        },
        {
            id: 10,
            country_flag: svgIcons.tunisia_flag,
            country_name: `Tunisia`,
            country_code: 216,
            currency: ''
        },
        {
            id: 11,
            country_flag: svgIcons.uganda_flag,
            country_name: `Uganda`,
            country_code: 256,
            currency: ''
        },
        {
            id: 12,
            country_flag: svgIcons.rwanda_flag,
            country_name: `Rwanda`,
            country_code: 250,
            currency: ''
        },
        {
            id: 13,
            country_flag: svgIcons.tanzania_flag,
            country_name: `Tanzania`,
            country_code: 255,
            currency: ''
        }
    ]
    
    
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

       // const { countries } = data

        function country_item(item, index) {
            return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: SIZES.radius * 2,
                        marginBottom: countries.length - 1 === index ? SIZES.padding : 0
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
                              //  ...FONTS.regularFont,
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
            <FlatList
                showsVerticalScrollIndicator={false}
                data={countries}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item, index }) => {
                    return (
                        country_item(item, index)
                    )
                }}
            />
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