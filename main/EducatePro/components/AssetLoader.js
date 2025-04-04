import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Asset from 'expo-asset';
import { COLORS, FONTS } from '../constants';

const AssetLoader = ({ assets, onComplete, onError }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        console.log('Starting asset loading...');
        const totalAssets = assets.length;
        let loadedAssets = 0;

        for (const asset of assets) {
          try {
            await Asset.loadAsync(asset);
            loadedAssets++;
            const newProgress = (loadedAssets / totalAssets) * 100;
            setProgress(newProgress);
            console.log(`Asset loading progress: ${newProgress.toFixed(1)}%`);
          } catch (assetError) {
            console.error(`Error loading asset: ${asset}`, assetError);
            throw assetError;
          }
        }

        console.log('All assets loaded successfully');
        setLoading(false);
        if (onComplete) onComplete();
      } catch (err) {
        console.error('Asset loading failed:', err);
        setError(err);
        setLoading(false);
        if (onError) onError(err);
      }
    };

    loadAssets();
  }, [assets, onComplete, onError]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Failed to load assets</Text>
        <Text style={styles.errorDetails}>{error.message}</Text>
      </View>
    );
  }

  if (!loading) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text style={styles.progressText}>
        Loading assets... {progress.toFixed(1)}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  progressText: {
    ...FONTS.body3,
    marginTop: 10,
    color: COLORS.primary,
  },
  errorText: {
    ...FONTS.h3,
    color: COLORS.error,
    marginBottom: 10,
  },
  errorDetails: {
    ...FONTS.body3,
    color: COLORS.gray3,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default AssetLoader; 