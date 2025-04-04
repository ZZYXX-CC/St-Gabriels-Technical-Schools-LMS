import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { useCallback, useEffect, useState } from 'react'
import { FONTS } from './constants/fonts'
import AppNavigation from './navigations/AppNavigation'
import { LogBox, View, Platform } from 'react-native'
import { ThemeProvider } from './theme/ThemeProvider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ErrorBoundary from './components/ErrorBoundary'
import PerformanceMonitor from './components/PerformanceMonitor'
import AssetLoader from './components/AssetLoader'
import { icons } from './constants'

// Enable error logging
LogBox.ignoreAllLogs(false);

// Keep the splash screen visible while we fetch resources
if (Platform.OS !== 'web') {
  SplashScreen.preventAutoHideAsync().catch(error => {
    console.error('Error preventing splash screen auto-hide:', error);
  });
}

export default function App() {
  // Skip font loading on web
  const [fontsLoaded, fontError] = Platform.OS === 'web' 
    ? [true, null] 
    : useFonts(FONTS);
  const [assetsLoaded, setAssetsLoaded] = useState(Platform.OS === 'web');
  const [appStartTime] = useState(Date.now());

  useEffect(() => {
    async function prepare() {
      if (Platform.OS !== 'web') {
        try {
          console.log('Starting app initialization...');
          await SplashScreen.preventAutoHideAsync();
          console.log('Splash screen prevented from auto-hiding');
        } catch (e) {
          console.error('Error during app initialization:', e);
        }
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (Platform.OS === 'web' || (fontsLoaded && assetsLoaded)) {
      try {
        if (Platform.OS !== 'web') {
          console.log('Fonts and assets loaded, hiding splash screen...');
          await SplashScreen.hideAsync();
          console.log('Splash screen hidden successfully');
        }
        const totalTime = Date.now() - appStartTime;
        console.log(`Total app initialization time: ${totalTime}ms`);
      } catch (e) {
        console.error("Error hiding splash screen:", e);
      }
    }
  }, [fontsLoaded, assetsLoaded, appStartTime]);

  if (fontError && Platform.OS !== 'web') {
    console.error('Error loading fonts:', fontError);
  }

  if (!fontsLoaded && Platform.OS !== 'web') {
    console.log('Fonts not loaded yet, returning null');
    return null;
  }

  const handleAssetLoadComplete = () => {
    console.log('All assets loaded successfully');
    setAssetsLoaded(true);
  };

  const handleAssetLoadError = (error) => {
    console.error('Asset loading failed:', error);
    // On web, we'll still show the app even if assets fail to load
    if (Platform.OS === 'web') {
      setAssetsLoaded(true);
    }
  };

  console.log('App rendering main content');
  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <PerformanceMonitor name="App" />
          {Platform.OS !== 'web' && (
            <AssetLoader
              assets={Object.values(icons)}
              onComplete={handleAssetLoadComplete}
              onError={handleAssetLoadError}
            />
          )}
          <ThemeProvider>
            <SafeAreaProvider>
              <AppNavigation />
            </SafeAreaProvider>
          </ThemeProvider>
        </View>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}