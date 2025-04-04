import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { COLORS, SIZES, icons, FONTS } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-virtualized-view';
import { allCourses, allMentors, category, ratings } from '../data';
import BookmarkCourseCard from '../components/BookmarkCourseCard';
import MentorCard from '../components/MentorCard';
import NotFoundCard from '../components/NotFoundCard';
import RBSheet from "react-native-raw-bottom-sheet";
import Button from '../components/Button';
import { useTheme } from '../theme/ThemeProvider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { FontAwesome } from "@expo/vector-icons";

// Handler slider
const CustomSliderHandle = ({ enabled, markerStyle }) => {
  return (
    <View
      style={[
        markerStyle,
        {
          backgroundColor: enabled ? COLORS.primary : 'lightgray',
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 10,
          width: 20,
          height: 20,
        },
      ]}
    />
  );
};

const Search = ({ navigation }) => {
  const refRBSheet = useRef();
  const { dark, colors } = useTheme();
  const [selectedCategories, setSelectedCategories] = useState(["1"]);
  const [selectedRating, setSelectedRating] = useState(["1"]);
  const [priceRange, setPriceRange] = useState([0, 100]); // Initial price range
  const [selectedTab, setSelectedTab] = useState('Courses');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [filteredMentors, setFilteredMentors] = useState(allMentors);
  const [resultsCount, setResultsCount] = useState(0);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, selectedTab]);

  const handleSliderChange = (values) => {
    setPriceRange(values);
  };

  const handleSearch = () => {
    if (selectedTab === 'Courses') {
      const courses = allCourses.filter((course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCourses(courses);
      setResultsCount(courses.length);
    } else if (selectedTab === 'Mentors') {
      const mentors = allMentors.filter((mentor) =>
        mentor.fullName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMentors(mentors);
      setResultsCount(mentors.length);
    }
  };

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
          <Text style={[styles.headerTitle, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}>
            Search
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.moreCircle}
            resizeMode='contain'
            style={[styles.moreIcon, {
              tintColor: dark ? COLORS.white : COLORS.greyscale900
            }]}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderSearchBar = () => {
    return (
      <View
        style={[styles.searchBarContainer, {
          backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite
        }]}>
        <TouchableOpacity
          onPress={handleSearch}
        >
          <Image
            source={icons.search2}
            resizeMode='contain'
            style={[styles.searchIcon, { tintColor: dark ? COLORS.gray : COLORS.gray2 }]}
          />
        </TouchableOpacity>
        <TextInput
          placeholder='Search courses or mentors'
          placeholderTextColor={dark ? COLORS.gray : COLORS.gray2}
          style={[styles.searchInput, {
            color: dark ? COLORS.white : COLORS.greyscale900
          }]}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity
          onPress={() => refRBSheet.current.open()}>
          <Image
            source={icons.filter}
            resizeMode='contain'
            style={[styles.filterIcon, { tintColor: dark ? COLORS.gray : COLORS.gray2 }]}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const renderTabs = () => {
    return (
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabBtn, selectedTab === 'Courses' && styles.selectedTab]}
          onPress={() => {
            setSelectedTab('Courses');
            setSearchQuery(''); // Clear search query when changing tab
          }}
        >
          <Text
            style={[styles.tabBtnText, selectedTab === 'Courses' && styles.selectedTabText]}
          >
            Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabBtn, selectedTab === 'Mentors' && styles.selectedTab]}
          onPress={() => {
            setSelectedTab('Mentors');
            setSearchQuery(''); // Clear search query when changing tab
          }}
        >
          <Text
            style={[styles.tabBtnText, selectedTab === 'Mentors' && styles.selectedTabText]}
          >Mentors</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderResults = () => {
    return (
      <View>
        {searchQuery && (
          <View style={styles.resultContainer}>
            <View style={styles.resultLeftView}>
              <Text style={[styles.subtitle, {
                color: dark ? COLORS.white : COLORS.greyscale900
              }]}>Results for "</Text>
              <Text style={[styles.subtitle, { color: COLORS.primary }]}>{searchQuery}</Text>
              <Text style={[styles.subtitle, { color: dark ? COLORS.white : COLORS.greyscale900 }]}>"</Text>
            </View>
            <Text style={[styles.subResult, { color: dark ? COLORS.gray : COLORS.gray2 }]}>
              {resultsCount} found
            </Text>
          </View>
        )}

        <View style={{ marginVertical: 16 }}>
          {resultsCount && resultsCount > 0 ? (
            <FlatList
              data={selectedTab === 'Courses' ? filteredCourses : filteredMentors}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return selectedTab === 'Courses' ? (
                  <BookmarkCourseCard
                    name={item.name}
                    image={item.image}
                    category={item.category}
                    price={item.price}
                    isOnDiscount={item.isOnDiscount}
                    oldPrice={item.oldPrice}
                    rating={item.rating}
                    numStudents={item.numStudents}
                    onPress={() => navigation.navigate('CourseDetails', { courseId: item.id })}
                    categoryId={item.categoryId}
                  />
                ) : (
                  <MentorCard
                    avatar={item.avatar}
                    fullName={item.fullName}
                    position={item.position}
                    rating={item.rating}
                    students={item.students}
                    courses={item.courses}
                    onPress={() => navigation.navigate('InstructorProfile', { instructorId: item.id })}
                  />
                );
              }}
            />
          ) : (
            <NotFoundCard />
          )}
        </View>
      </View>
    )
  }

  const renderFilterSheet = () => {
    return (
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)"
          },
          container: {
            backgroundColor: dark ? COLORS.dark2 : COLORS.white,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            padding: 16
          }
        }}
      >
        <View style={styles.filterContainer}>
          <Text style={[styles.filterTitle, { color: dark ? COLORS.white : COLORS.black }]}>
            Filter
          </Text>

          {/* Categories */}
          <View style={styles.filterSection}>
            <Text style={[styles.filterSectionTitle, { color: dark ? COLORS.white : COLORS.black }]}>
              Categories
            </Text>
            <FlatList
              data={category}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.categoryItem,
                    selectedCategories.includes(item.id) && styles.selectedCategory
                  ]}
                  onPress={() => toggleCategory(item.id)}
                >
                  <Text style={[
                    styles.categoryText,
                    selectedCategories.includes(item.id) && styles.selectedCategoryText
                  ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Rating */}
          <View style={styles.filterSection}>
            <Text style={[styles.filterSectionTitle, { color: dark ? COLORS.white : COLORS.black }]}>
              Rating
            </Text>
            <FlatList
              data={ratings}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.ratingItem,
                    selectedRating.includes(item.id) && styles.selectedRating
                  ]}
                  onPress={() => toggleRating(item.id)}
                >
                  <FontAwesome name="star" size={16} color={selectedRating.includes(item.id) ? COLORS.white : COLORS.gray} />
                  <Text style={[
                    styles.ratingText,
                    selectedRating.includes(item.id) && styles.selectedRatingText
                  ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Price Range */}
          <View style={styles.filterSection}>
            <Text style={[styles.filterSectionTitle, { color: dark ? COLORS.white : COLORS.black }]}>
              Price Range
            </Text>
            <MultiSlider
              values={priceRange}
              min={0}
              max={100}
              step={1}
              onValuesChange={handleSliderChange}
              customMarker={CustomSliderHandle}
              selectedStyle={{
                backgroundColor: COLORS.primary,
                height: 4,
              }}
              unselectedStyle={{
                backgroundColor: COLORS.grayscale200,
                height: 4,
              }}
            />
            <View style={styles.priceRangeText}>
              <Text style={[styles.priceText, { color: dark ? COLORS.white : COLORS.black }]}>
                ${priceRange[0]}
              </Text>
              <Text style={[styles.priceText, { color: dark ? COLORS.white : COLORS.black }]}>
                ${priceRange[1]}
              </Text>
            </View>
          </View>

          {/* Apply Button */}
          <Button
            title="Apply Filter"
            filled
            onPress={() => {
              refRBSheet.current.close();
              handleSearch();
            }}
            style={styles.applyButton}
          />
        </View>
      </RBSheet>
    )
  }

  // Toggle category selection
  const toggleCategory = (categoryId) => {
    const updatedCategories = [...selectedCategories];
    const index = updatedCategories.indexOf(categoryId);

    if (index === -1) {
      updatedCategories.push(categoryId);
    } else {
      updatedCategories.splice(index, 1);
    }

    setSelectedCategories(updatedCategories);
  };

  // toggle rating selection
  const toggleRating = (ratingId) => {
    const updatedRatings = [...selectedRating];
    const index = updatedRatings.indexOf(ratingId);

    if (index === -1) {
      updatedRatings.push(ratingId);
    } else {
      updatedRatings.splice(index, 1);
    }

    setSelectedRating(updatedRatings);
  };

  return (
    <SafeAreaView style={[styles.area, { backgroundColor: colors.background }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        {renderHeader()}
        {renderSearchBar()}
        {renderTabs()}
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderResults()}
        </ScrollView>
      </View>
      {renderFilterSheet()}
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
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 48,
    borderRadius: 12,
    backgroundColor: COLORS.secondaryWhite,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    tintColor: COLORS.gray2
  },
  searchInput: {
    flex: 1,
    ...FONTS.body3,
    color: COLORS.greyscale900
  },
  filterIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray2
  },
  tabContainer: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: dark ? COLORS.dark2 : COLORS.secondaryWhite,
    borderRadius: 12,
    padding: 4,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 8,
  },
  selectedTab: {
    backgroundColor: COLORS.primary,
  },
  tabBtnText: {
    ...FONTS.h4,
    color: COLORS.gray
  },
  selectedTabText: {
    color: COLORS.white
  },
  resultContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  resultLeftView: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    ...FONTS.h3,
    color: COLORS.greyscale900
  },
  subResult: {
    ...FONTS.body4,
    color: COLORS.gray
  },
  filterContainer: {
    flex: 1,
    padding: 16,
  },
  filterTitle: {
    ...FONTS.h2,
    marginBottom: 24
  },
  filterSection: {
    marginBottom: 24
  },
  filterSectionTitle: {
    ...FONTS.h3,
    marginBottom: 16
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.transparentTertiary,
    marginRight: 8,
  },
  selectedCategory: {
    backgroundColor: COLORS.primary,
  },
  categoryText: {
    ...FONTS.body4,
    color: COLORS.gray
  },
  selectedCategoryText: {
    color: COLORS.white
  },
  ratingItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: COLORS.transparentTertiary,
    marginRight: 8,
  },
  selectedRating: {
    backgroundColor: COLORS.primary,
  },
  ratingText: {
    ...FONTS.body4,
    color: COLORS.gray,
    marginLeft: 4
  },
  selectedRatingText: {
    color: COLORS.white
  },
  priceRangeText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  priceText: {
    ...FONTS.body4,
    color: COLORS.gray
  },
  applyButton: {
    marginTop: 24
  }
});

export default Search;