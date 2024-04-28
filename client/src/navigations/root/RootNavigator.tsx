import React from 'react';
import useAuth from '../../hooks/queries/useAuth';
import MainDrawerNavigator from '../darwer/MainDrawerNavigator';
import AuthStackNavigator from '../stack/AuthStackNavigator';

const RootNavigator = () => {
  const {isLogin} = useAuth();

  return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
};

export default RootNavigator;
