import { SafeAreaProvider } from 'react-native-safe-area-context'
import { View, Platform } from 'react-native'
import { ThemeProvider } from './theme/ThemeProvider'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ErrorBoundary from './components/ErrorBoundary'
import PerformanceMonitor from './components/PerformanceMonitor'
import AppNavigation from './navigations/AppNavigation'

export default function App() {
  console.log('Web App initializing...');

  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <PerformanceMonitor name="App" />
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