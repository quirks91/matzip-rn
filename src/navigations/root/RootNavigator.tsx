import React from 'react';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../darwer/MainDrawerNavigator';

const RootNavigator = () => {
  const isLoggedIn = false;

  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
};

export default RootNavigator;
