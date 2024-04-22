import {View, SafeAreaView, Button} from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { authNavigations } from '../../const';
import { AuthStackParamList } from '../../navigations/stack/AuthStackNavigator';

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList, 'AuthHome'>;

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <Button
          title="회원가입 화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
