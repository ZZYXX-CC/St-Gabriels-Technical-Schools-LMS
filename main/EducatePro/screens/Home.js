import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, icons, images } from '../constants'
import { useTheme } from '../theme/ThemeProvider'
import BookmarkCourseCard from '../components/BookmarkCourseCard'
import SectionSubItem from '../components/SectionSubItem'
import MentorCard from '../components/MentorCard'

// Temporary data for demonstration
const featuredCourses = [
    {
        id: '1',
        title: 'Introduction to Web Development',
        instructor: 'John Doe',
        thumbnail: images.course1,
        price: '$49.99',
        rating: 4.8,
        numStudents: 1234,
        category: 'Programming'
    },
    {
        id: '2',
        title: 'Mobile App Development',
        instructor: 'Jane Smith',
        thumbnail: images.course2,
        price: '$59.99',
        rating: 4.9,
        numStudents: 856,
        category: 'Mobile'
    },
    // Add more courses as needed
];

const categories = [
    {
        id: '1',
        title: 'Programming',
        icon: icons.code,
        count: 12,
    },
    {
        id: '2',
        title: 'Design',
        icon: icons.design,
        count: 8,
    },
    {
        id: '3',
        title: 'Business',
        icon: icons.business,
        count: 15,
    },
    // Add more categories as needed
];

const instructors = [
    {
        id: '1',
        name: 'John Doe',
        avatar: images.instructor1,
        position: 'Web Development',
        rating: 4.8,
        students: 5000,
        courses: 8,
    },
    {
        id: '2',
        name: 'Jane Smith',
        avatar: images.instructor2,
        position: 'Mobile Development',
        rating: 4.9,
        students: 3500,
        courses: 6,
    },
    // Add more instructors as needed
];

const Home = ({ navigation }) => {
    const { dark } = useTheme();

    return (
        <ScrollView style={{ flex: 1, backgroundColor: dark ? COLORS.dark1 : COLORS.white }}>
            {/* Header */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 16,
                backgroundColor: dark ? COLORS.dark2 : COLORS.white,
                borderBottomWidth: 1,
                borderBottomColor: dark ? COLORS.dark3 : COLORS.grayscale200
            }}>
                <View>
                    <Text style={{ ...FONTS.h2, color: dark ? COLORS.white : COLORS.black }}>
                        Welcome to SGT Learn
                    </Text>
                    <Text style={{ ...FONTS.body4, color: dark ? COLORS.gray : COLORS.gray2 }}>
                        Continue your learning journey
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    <Image
                        source={icons.notification}
                        resizeMode='contain'
                        style={{
                            width: 24,
                            height: 24,
                            tintColor: dark ? COLORS.white : COLORS.black
                        }}
                    />
                </TouchableOpacity>
            </View>

            {/* Featured Courses */}
            <View style={{ padding: 16 }}>
                <Text style={{ ...FONTS.h3, color: dark ? COLORS.white : COLORS.black, marginBottom: 16 }}>
                    Featured Courses
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {featuredCourses.map(course => (
                        <BookmarkCourseCard
                            key={course.id}
                            name={course.title}
                            instructor={course.instructor}
                            image={course.thumbnail}
                            category={course.category}
                            price={course.price}
                            rating={course.rating}
                            numStudents={course.numStudents}
                            onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })}
                            containerStyles={{ width: 300, marginRight: 16 }}
                        />
                    ))}
                </ScrollView>
            </View>

            {/* Continue Learning */}
            <View style={{ padding: 16 }}>
                <Text style={{ ...FONTS.h3, color: dark ? COLORS.white : COLORS.black, marginBottom: 16 }}>
                    Continue Learning
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {featuredCourses.map(course => (
                        <BookmarkCourseCard
                            key={course.id}
                            name={course.title}
                            instructor={course.instructor}
                            image={course.thumbnail}
                            category={course.category}
                            progress={75}
                            onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })}
                            containerStyles={{ width: 300, marginRight: 16 }}
                            showBookmark={false}
                        />
                    ))}
                </ScrollView>
            </View>

            {/* Popular Categories */}
            <View style={{ padding: 16 }}>
                <Text style={{ ...FONTS.h3, color: dark ? COLORS.white : COLORS.black, marginBottom: 16 }}>
                    Popular Categories
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {categories.map(category => (
                        <SectionSubItem
                            key={category.id}
                            title={category.title}
                            icon={category.icon}
                            onPress={() => navigation.navigate('CategoryCourses', { categoryId: category.id })}
                            containerStyle={{
                                width: 120,
                                height: 120,
                                marginRight: 16,
                                backgroundColor: dark ? COLORS.dark2 : COLORS.white,
                                borderRadius: 16,
                                padding: 16,
                                alignItems: 'center',
                                justifyContent: 'center',
                                shadowColor: COLORS.black,
                                shadowOffset: {
                                    width: 0,
                                    height: 2
                                },
                                shadowOpacity: 0.1,
                                shadowRadius: 2,
                                elevation: 0,
                            }}
                        />
                    ))}
                </ScrollView>
            </View>

            {/* Top Instructors */}
            <View style={{ padding: 16 }}>
                <Text style={{ ...FONTS.h3, color: dark ? COLORS.white : COLORS.black, marginBottom: 16 }}>
                    Top Instructors
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {instructors.map(instructor => (
                        <MentorCard
                            key={instructor.id}
                            fullName={instructor.name}
                            avatar={instructor.avatar}
                            position={instructor.position}
                            rating={instructor.rating}
                            students={instructor.students}
                            courses={instructor.courses}
                            onPress={() => navigation.navigate('InstructorProfile', { instructorId: instructor.id })}
                            containerStyle={{ width: 300, marginRight: 16 }}
                        />
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    )
}

export default Home