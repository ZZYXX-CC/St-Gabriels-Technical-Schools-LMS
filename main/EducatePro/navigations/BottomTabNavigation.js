import { View, Platform, Image, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, FONTS, icons } from '../constants'
import { Home, MyCourse, Search, Profile, Settings } from '../screens'
import { useTheme } from '../theme/ThemeProvider'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    const { dark } = useTheme();
    console.log('Initializing bottom tab navigation');

    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    justifyContent: "center",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: Platform.OS === 'ios' ? 90 : 60,
                    backgroundColor: dark ? COLORS.dark1 : COLORS.white,
                    borderTopColor: "transparent",
                },
            }}
            screenListeners={{
                state: (e) => {
                    console.log('Tab navigation state changed:', e.data.state);
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        console.log('Rendering Home tab icon, focused:', focused);
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    source={focused ? icons.home : icons.home2Outline}
                                    resizeMode='contain'
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}>Home</Text>
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="MyCourse"
                component={MyCourse}
                options={{
                    tabBarIcon: ({ focused }) => {
                        console.log('Rendering MyCourse tab icon, focused:', focused);
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    source={focused ? icons.document : icons.documentOutline}
                                    resizeMode='contain'
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}>My Courses</Text>
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => {
                        console.log('Rendering Search tab icon, focused:', focused);
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    source={focused ? icons.search : icons.searchOutline}
                                    resizeMode='contain'
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}>Search</Text>
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        console.log('Rendering Profile tab icon, focused:', focused);
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    source={focused ? icons.user : icons.userOutline}
                                    resizeMode='contain'
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}>Profile</Text>
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) => {
                        console.log('Rendering Settings tab icon, focused:', focused);
                        return (
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    source={focused ? icons.settings : icons.settingOutline}
                                    resizeMode='contain'
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                    }}
                                />
                                <Text style={{
                                    ...FONTS.body4,
                                    color: focused ? COLORS.primary : dark ? COLORS.gray3 : COLORS.gray3,
                                }}>Settings</Text>
                            </View>
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation