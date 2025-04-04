import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, TextInput, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, icons, illustrations, FONTS } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import SectionSubItem from '../components/SectionSubItem';
import CourseSectionCard from '../components/CourseSectionCard';
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';
import Rating from '../components/Rating';
import MentorCard from '../components/MentorCard';
import BookmarkCourseCard from '../components/BookmarkCourseCard';

const { width } = Dimensions.get('window');

const CourseDetails = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // overview, curriculum, reviews
  const { colors, dark } = useTheme();
  const { courseId } = route.params;

  // Temporary data - will be replaced with API data
  const courseData = {
    id: courseId,
    title: 'Introduction to Web Development',
    instructor: {
      name: 'John Doe',
      avatar: illustrations.instructor1,
      position: 'Senior Web Developer',
      rating: 4.8,
      students: 5000,
      courses: 8,
    },
    thumbnail: illustrations.course1,
    price: '$49.99',
    rating: 4.8,
    numStudents: 1234,
    category: 'Programming',
    description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript. This comprehensive course will take you from beginner to professional level.',
    duration: '8 hours',
    lessons: '24 lessons',
    level: 'Beginner',
    lastUpdated: 'March 2024',
    language: 'English',
    sections: [
      {
        id: '1',
        title: 'Section 1 - Introduction',
        duration: '15 mins',
        lessons: [
          { id: '1', title: 'Why using Figma', duration: '10 mins', isCompleted: true },
          { id: '2', title: 'Set up Your Figma Account', duration: '5 mins', isCompleted: true },
        ]
      },
      {
        id: '2',
        title: 'Section 2 - Figma Basic',
        duration: '15 mins',
        lessons: [
          { id: '3', title: 'Take a look Figma interface', duration: '5 mins', isCompleted: true },
          { id: '4', title: 'Working with Frame & Layer', duration: '10 mins', isCompleted: false },
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: {
          name: 'Sarah Johnson',
          avatar: illustrations.instructor2,
        },
        rating: 5,
        comment: 'Great course! The instructor explains everything clearly and the content is well-structured.',
        date: '2 weeks ago'
      }
    ],
    relatedCourses: [
      {
        id: '2',
        title: 'Advanced Web Development',
        instructor: 'Jane Smith',
        thumbnail: illustrations.course2,
        price: '$59.99',
        rating: 4.9,
        numStudents: 856,
        category: 'Programming'
      }
    ]
  };

  /**
   * Render header
   */
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back}
              resizeMode='contain'
              style={[styles.backIcon, {
                tintColor: dark ? COLORS.white : COLORS.greyscale900
              }]}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>
            Course Details
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.moreCircle}
            resizeMode='contain'
            style={[styles.moreIcon, {
              tintColor: dark ? COLORS.secondaryWhite : COLORS.greyscale900
            }]}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderTabs = () => {
    return (
      <View style={styles.tabsContainer}>
        {['overview', 'curriculum', 'reviews'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[
              styles.tabText,
              { color: activeTab === tab ? COLORS.primary : COLORS.gray }
            ]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  const renderOverview = () => {
    return (
      <View style={styles.overviewContainer}>
        {/* Course Image */}
        <Image
          source={courseData.thumbnail}
          resizeMode='cover'
          style={styles.courseImage}
        />

        {/* Course Info */}
        <View style={styles.courseInfo}>
          <Text style={[styles.courseTitle, { color: dark ? COLORS.white : COLORS.black }]}>
            {courseData.title}
          </Text>
          <View style={styles.courseMeta}>
            <View style={styles.metaItem}>
              <Image
                source={icons.time}
                resizeMode='contain'
                style={[styles.metaIcon, { tintColor: COLORS.gray }]}
              />
              <Text style={styles.metaText}>{courseData.duration}</Text>
            </View>
            <View style={styles.metaItem}>
              <Image
                source={icons.lesson}
                resizeMode='contain'
                style={[styles.metaIcon, { tintColor: COLORS.gray }]}
              />
              <Text style={styles.metaText}>{courseData.lessons}</Text>
            </View>
            <View style={styles.metaItem}>
              <Image
                source={icons.level}
                resizeMode='contain'
                style={[styles.metaIcon, { tintColor: COLORS.gray }]}
              />
              <Text style={styles.metaText}>{courseData.level}</Text>
            </View>
          </View>

          {/* Instructor */}
          <View style={styles.instructorSection}>
            <Text style={[styles.sectionTitle, { color: dark ? COLORS.white : COLORS.black }]}>
              Instructor
            </Text>
            <MentorCard
              avatar={courseData.instructor.avatar}
              fullName={courseData.instructor.name}
              position={courseData.instructor.position}
              rating={courseData.instructor.rating}
              students={courseData.instructor.students}
              courses={courseData.instructor.courses}
              onPress={() => navigation.navigate('InstructorProfile', { instructorId: courseData.instructor.id })}
            />
          </View>

          {/* Description */}
          <View style={styles.descriptionSection}>
            <Text style={[styles.sectionTitle, { color: dark ? COLORS.white : COLORS.black }]}>
              About This Course
            </Text>
            <Text style={[styles.description, { color: dark ? COLORS.gray : COLORS.gray2 }]}>
              {courseData.description}
            </Text>
          </View>

          {/* Course Features */}
          <View style={styles.featuresSection}>
            <Text style={[styles.sectionTitle, { color: dark ? COLORS.white : COLORS.black }]}>
              What You'll Learn
            </Text>
            <View style={styles.featuresList}>
              {['Learn HTML, CSS, and JavaScript fundamentals', 'Build responsive websites', 'Understand web development best practices'].map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Image
                    source={icons.check}
                    resizeMode='contain'
                    style={[styles.featureIcon, { tintColor: COLORS.primary }]}
                  />
                  <Text style={[styles.featureText, { color: dark ? COLORS.gray : COLORS.gray2 }]}>
                    {feature}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Related Courses */}
          <View style={styles.relatedSection}>
            <Text style={[styles.sectionTitle, { color: dark ? COLORS.white : COLORS.black }]}>
              Related Courses
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {courseData.relatedCourses.map(course => (
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
        </View>
      </View>
    )
  }

  const renderCurriculum = () => {
    return (
      <View style={styles.curriculumContainer}>
        {courseData.sections.map(section => (
          <View key={section.id}>
            <SectionSubItem
              title={section.title}
              subtitle={section.duration}
            />
            {section.lessons.map(lesson => (
              <CourseSectionCard
                key={lesson.id}
                num={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                onPress={() => navigation.navigate("CourseVideoPlay", { lessonId: lesson.id })}
                isCompleted={lesson.isCompleted}
              />
            ))}
          </View>
        ))}
      </View>
    )
  }

  const renderReviews = () => {
    return (
      <View style={styles.reviewsContainer}>
        <View style={styles.ratingSummary}>
          <View style={styles.ratingLeft}>
            <Text style={[styles.ratingNumber, { color: dark ? COLORS.white : COLORS.black }]}>
              {courseData.rating}
            </Text>
            <Rating rating={courseData.rating} />
            <Text style={styles.ratingCount}>
              {courseData.reviews.length} reviews
            </Text>
          </View>
          <View style={styles.ratingRight}>
            {[5, 4, 3, 2, 1].map(rating => (
              <View key={rating} style={styles.ratingBar}>
                <Text style={styles.ratingLabel}>{rating}</Text>
                <View style={styles.ratingBarContainer}>
                  <View style={[styles.ratingBarFill, { width: `${(rating / 5) * 100}%` }]} />
                </View>
                <Text style={styles.ratingValue}>
                  {Math.round((rating / 5) * 100)}%
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.reviewsList}>
          {courseData.reviews.map(review => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Image
                  source={review.user.avatar}
                  resizeMode='cover'
                  style={styles.reviewAvatar}
                />
                <View style={styles.reviewUserInfo}>
                  <Text style={[styles.reviewUserName, { color: dark ? COLORS.white : COLORS.black }]}>
                    {review.user.name}
                  </Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
              </View>
              <Rating rating={review.rating} />
              <Text style={[styles.reviewComment, { color: dark ? COLORS.gray : COLORS.gray2 }]}>
                {review.comment}
              </Text>
            </View>
          ))}
        </View>
      </View>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'curriculum':
        return renderCurriculum();
      case 'reviews':
        return renderReviews();
      default:
        return renderOverview();
    }
  }

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(false)}>
          <View style={[styles.modalContainer]}>
            <View style={[styles.modalSubContainer, {
              backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite
            }]}>
              <View style={styles.backgroundIllustration}>
                <Image
                  source={illustrations.background}
                  resizeMode='contain'
                  style={styles.modalIllustration}
                />
                <Image
                  source={icons.editPencil}
                  resizeMode='contain'
                  style={styles.editPencilIcon}
                />
              </View>
              <Text style={styles.modalTitle}>Course Completed!</Text>
              <Text style={[styles.modalSubtitle, { color: dark ? COLORS.secondaryWhite : COLORS.greyscale900 }]}>
                Please leave a review for your course.
              </Text>
              <Rating
                color={COLORS.primary}
              />
              <TextInput
                placeholder="The courses & mentors are great 🔥"
                placeholderTextColor={ dark ? COLORS.secondaryWhite : COLORS.black}
                style={styles.modalInput}
              />
              <Button
                title="Write Review"
                filled
                onPress={() => {
                  setModalVisible(false)
                  navigation.goBack()
                }}
                style={{
                  width: "100%",
                  marginTop: 12
                }}
              />
              <Button
                title="Cancel"
                onPress={() => {
                  setModalVisible(false)
                }}
                textColor={dark ? COLORS.white : COLORS.primary }
                style={{
                  width: "100%",
                  marginTop: 12,
                  backgroundColor: dark ? COLORS.dark3 : COLORS.transparentTertiary,
                  borderColor: dark ? COLORS.dark3 :  COLORS.transparentTertiary
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        {renderTabs()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderContent()}
        </ScrollView>
      </View>
      <View style={[styles.bottomContainer, { backgroundColor: colors.background }]}>
        <View style={styles.priceContainer}>
          <Text style={[styles.price, { color: dark ? COLORS.white : COLORS.black }]}>
            {courseData.price}
          </Text>
          <Button
            title="Enroll Now"
            style={styles.button}
            filled
            onPress={() => navigation.navigate('SelectPaymentMethods')}
          />
        </View>
      </View>
      {renderModal()}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: "row",
    width: SIZES.width - 32,
    justifyContent: "space-between",
    margin: 16
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center"
  },
  backIcon: {
    height: 24,
    width: 24,
    marginRight: 12
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.black
  },
  moreIcon: {
    height: 24,
    width: 24
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayscale200
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 8
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary
  },
  tabText: {
    ...FONTS.h3,
    color: COLORS.gray
  },
  courseImage: {
    width: width,
    height: 200,
    backgroundColor: COLORS.grayscale200
  },
  courseInfo: {
    padding: 16
  },
  courseTitle: {
    ...FONTS.h1,
    marginBottom: 16
  },
  courseMeta: {
    flexDirection: 'row',
    marginBottom: 24
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16
  },
  metaIcon: {
    width: 16,
    height: 16,
    marginRight: 4
  },
  metaText: {
    ...FONTS.body4,
    color: COLORS.gray
  },
  sectionTitle: {
    ...FONTS.h3,
    marginBottom: 16
  },
  instructorSection: {
    marginBottom: 24
  },
  descriptionSection: {
    marginBottom: 24
  },
  description: {
    ...FONTS.body3,
    lineHeight: 24
  },
  featuresSection: {
    marginBottom: 24
  },
  featuresList: {
    gap: 12
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  featureIcon: {
    width: 20,
    height: 20,
    marginRight: 8
  },
  featureText: {
    ...FONTS.body3,
    flex: 1
  },
  relatedSection: {
    marginBottom: 24
  },
  curriculumContainer: {
    padding: 16
  },
  reviewsContainer: {
    padding: 16
  },
  ratingSummary: {
    flexDirection: 'row',
    marginBottom: 24
  },
  ratingLeft: {
    flex: 1,
    alignItems: 'center'
  },
  ratingNumber: {
    ...FONTS.h1,
    marginBottom: 8
  },
  ratingCount: {
    ...FONTS.body4,
    color: COLORS.gray,
    marginTop: 8
  },
  ratingRight: {
    flex: 2,
    gap: 8
  },
  ratingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  ratingLabel: {
    ...FONTS.body4,
    color: COLORS.gray,
    width: 20
  },
  ratingBarContainer: {
    flex: 1,
    height: 4,
    backgroundColor: COLORS.grayscale200,
    borderRadius: 2
  },
  ratingBarFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 2
  },
  ratingValue: {
    ...FONTS.body4,
    color: COLORS.gray,
    width: 40
  },
  reviewsList: {
    gap: 24
  },
  reviewItem: {
    gap: 8
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12
  },
  reviewUserInfo: {
    flex: 1
  },
  reviewUserName: {
    ...FONTS.h4,
    marginBottom: 4
  },
  reviewDate: {
    ...FONTS.body4,
    color: COLORS.gray
  },
  reviewComment: {
    ...FONTS.body3,
    lineHeight: 24
  },
  bottomContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.grayscale200
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  price: {
    ...FONTS.h2,
  },
  button: {
    flex: 1,
    marginLeft: 16
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginVertical: 12
  },
  modalSubtitle: {
    fontSize: 16,
    fontFamily: "regular",
    color: COLORS.black,
    textAlign: "center",
    marginVertical: 12,
    marginHorizontal: 16
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalSubContainer: {
    height: 622,
    width: SIZES.width * 0.86,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  backgroundIllustration: {
    height: 150,
    width: 150,
    marginVertical: 22,
    alignItems: "center",
    justifyContent: "center",
    zIndex: -999
  },
  modalIllustration: {
    height: 150,
    width: 150,
  },
  modalInput: {
    width: "100%",
    height: 52,
    backgroundColor: COLORS.transparentTertiary,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginVertical: 12
  },
  editPencilIcon: {
    width: 42,
    height: 42,
    tintColor: COLORS.white,
    zIndex: 99999,
    position: "absolute",
    top: 54,
    left: 60,
  }
})

export default CourseDetails