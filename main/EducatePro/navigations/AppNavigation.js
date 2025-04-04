import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { Platform, View, Text } from 'react-native';
import { AddNewCard, Call, ChangeEmail, ChangePIN, ChangePassword, Chat, ConfirmPayment, CourseDetails, CourseDetailsLessons, CourseDetailsMore, CourseDetailsMyLessons, CourseDetailsReviews, CourseVideoPlay, CreateNewPIN, CreateNewPassword, CustomerService, EReceipt, EditProfile, FillYourProfile, Fingerprint, ForgotPasswordEmail, ForgotPasswordMethods, ForgotPasswordPhoneNumber, HelpCenter, InviteFriends, Login, MentorProfile, MostPopularCourses, MyBookmark, Notifications, OTPVerification, Onboarding1, Onboarding2, Onboarding3, Onboarding4, Search, SelectPaymentMethods, SettingsLanguage, SettingsNotifications, SettingsPrivacyPolicy, SettingsSecurity, Signup, TopMentors, Welcome } from '../screens';
import BottomTabNavigation from './BottomTabNavigation';
import SettingsPayment from '../screens/SettingsPayment';
import { COLORS, FONTS } from '../constants';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkIfFirstLaunch = async () => {
      try {
        console.log('Checking first launch status...');
        const value = await AsyncStorage.getItem('alreadyLaunched');
        console.log('First launch status:', value);
        
        if (value === null) {
          console.log('First time launching app, setting flag...');
          await AsyncStorage.setItem('alreadyLaunched', 'true');
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
        setError(error);
        setIsFirstLaunch(false);
      } finally {
        setIsLoading(false);
        console.log('Navigation initialization complete');
      }
    };

    if (Platform.OS === 'web') {
      console.log('Running on web platform, skipping first launch check');
      setIsFirstLaunch(false);
      setIsLoading(false);
    } else {
      checkIfFirstLaunch();
    }
  }, []);

  if (error) {
    console.error('Navigation error:', error);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
        <Text style={{ ...FONTS.h2, color: COLORS.error }}>Something went wrong</Text>
        <Text style={{ ...FONTS.body3, color: COLORS.gray3, marginTop: 10 }}>{error.message}</Text>
      </View>
    );
  }

  if (isLoading) {
    console.log('Navigation still loading...');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
        <Text style={{ ...FONTS.body3, color: COLORS.primary }}>Loading...</Text>
      </View>
    );
  }

  const initialRoute = Platform.OS === 'web' ? 'Login' : (isFirstLaunch ? 'Onboarding1' : 'Login');
  console.log('Rendering navigation with initial route:', initialRoute);

  return (
    <NavigationContainer
      documentTitle={{
        formatter: (options, route) =>
          `${options?.title ?? route?.name} - SGT Learn`,
      }}
      onStateChange={(state) => {
        console.log('Navigation state changed:', state);
      }}
      fallback={
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.white }}>
          <Text style={{ ...FONTS.body3, color: COLORS.primary }}>Loading...</Text>
        </View>
      }
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: Platform.OS === 'web' ? 'none' : 'default',
          gestureEnabled: Platform.OS !== 'web',
        }}
        initialRouteName={initialRoute}
      >
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Onboarding4" component={Onboarding4} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={BottomTabNavigation} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="MentorProfile" component={MentorProfile} />
        <Stack.Screen name="ForgotPasswordMethods" component={ForgotPasswordMethods} />
        <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} />
        <Stack.Screen name="ForgotPasswordPhoneNumber" component={ForgotPasswordPhoneNumber} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
        <Stack.Screen name="FillYourProfile" component={FillYourProfile} />
        <Stack.Screen name="CreateNewPIN" component={CreateNewPIN} />
        <Stack.Screen name="Fingerprint" component={Fingerprint} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SettingsNotifications" component={SettingsNotifications} />
        <Stack.Screen name='SettingsPayment' component={SettingsPayment} />
        <Stack.Screen name="AddNewCard" component={AddNewCard} />
        <Stack.Screen name="SettingsSecurity" component={SettingsSecurity} />
        <Stack.Screen name="SettingsLanguage" component={SettingsLanguage} />
        <Stack.Screen name="SettingsPrivacyPolicy" component={SettingsPrivacyPolicy} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} />
        <Stack.Screen name="CustomerService" component={CustomerService} />
        <Stack.Screen name="InviteFriends" component={InviteFriends} />
        <Stack.Screen name="MyBookmark" component={MyBookmark} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="CourseDetailsLessons" component={CourseDetailsLessons} />
        <Stack.Screen name="CourseDetailsMore" component={CourseDetailsMore} />
        <Stack.Screen name="CourseDetailsMyLessons" component={CourseDetailsMyLessons} />
        <Stack.Screen name="CourseDetailsReviews" component={CourseDetailsReviews} />
        <Stack.Screen name="CourseVideoPlay" component={CourseVideoPlay} />
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
        <Stack.Screen name="EReceipt" component={EReceipt} />
        <Stack.Screen name="SelectPaymentMethods" component={SelectPaymentMethods} />
        <Stack.Screen name="TopMentors" component={TopMentors} />
        <Stack.Screen name="MostPopularCourses" component={MostPopularCourses} />
        <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
        <Stack.Screen name="ChangePIN" component={ChangePIN} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;