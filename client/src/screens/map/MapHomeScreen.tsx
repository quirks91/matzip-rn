import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import useAuth from '@/hooks/queries/useAuth';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MapHomeScreen = () => {
  const {logoutMutation} = useAuth();
  return (
    <MapView
      style={styles.container}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      followsUserLocation
      showsMyLocationButton={false}
    />
  );
};

export default MapHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
