import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const MentorCard = ({ 
    avatar, 
    fullName, 
    position, 
    onPress,
    rating,
    students,
    courses,
    containerStyle
}) => {
    const { dark } = useTheme();
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.mentorContainer, containerStyle]}
        >
            <View style={styles.chatLeftContainer}>
                <Image
                    source={avatar}
                    resizeMode='cover'
                    style={styles.avatarImage}
                />
                <View style={styles.userInfoContainer}>
                    <Text style={[styles.fullName, { 
                        color: dark ? COLORS.white : COLORS.greyscale900
                    }]}>{fullName}</Text>
                    <Text style={styles.position}>{position}</Text>
                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <FontAwesome name="star-half-empty" size={16} color="orange" />
                            <Text style={styles.statText}>{rating}</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Image
                                source={icons.student}
                                resizeMode='contain'
                                style={[styles.statIcon, { tintColor: COLORS.gray }]}
                            />
                            <Text style={styles.statText}>{students} students</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Image
                                source={icons.course}
                                resizeMode='contain'
                                style={[styles.statIcon, { tintColor: COLORS.gray }]}
                            />
                            <Text style={styles.statText}>{courses} courses</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mentorContainer: {
        width: SIZES.width - 32,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 8,
        backgroundColor: COLORS.white,
        borderRadius: 16,
        padding: 16,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 0,
    },
    avatarImage: {
        width: 64,
        height: 64,
        borderRadius: 999
    },
    fullName: {
        fontSize: 18,
        fontFamily: "bold",
        color: COLORS.black,
        marginBottom: 4
    },
    position: {
        fontSize: 13,
        fontFamily: "medium",
        color: COLORS.gray,
        marginBottom: 8
    },
    chatLeftContainer: {
        flexDirection: "row",
        alignItems: 'center',
        flex: 1
    },
    userInfoContainer: {
        marginLeft: 12,
        flex: 1
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statIcon: {
        width: 16,
        height: 16,
        marginRight: 4
    },
    statText: {
        fontSize: 12,
        fontFamily: 'medium',
        color: COLORS.gray,
        marginLeft: 4
    }
})

export default MentorCard