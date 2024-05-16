import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {MapStackParamList} from '@/navigations/stack/MapStackNavigator';
import {colors, mapNavigations} from '@/constants';
import InputField from '@/components/InputField';
import Octicons from 'react-native-vector-icons/Octicons';
import CustomButton from '@/components/CustomButton';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import useForm from '@/hooks/useForm';
import {validateAddPost} from '@/utils';
import AddPostHeaderRight from '@/components/AddPostHeaderRight';
import useMutateCreatePost from '@/hooks/queries/useMutateCreatePost';
import {MarkerColor} from '@/types/domain';
import useGetAddress from '@/hooks/useGetAddress';

type AddPostScreenProps = StackScreenProps<
  MapStackParamList,
  typeof mapNavigations.ADD_POST
>;

const AddPostScreen = ({route, navigation}: AddPostScreenProps) => {
  const {location} = route.params;
  const createPost = useMutateCreatePost();
  const descriptionRef = useRef<TextInput | null>(null);
  const addPost = useForm({
    initialValue: {title: '', description: ''},
    validate: validateAddPost,
  });
  const [markerColor, setMarkerColor] = useState<MarkerColor>('RED');
  const [score, setScore] = useState(5);
  // const [address, setAddress] = useState('');
  const address = useGetAddress(location);

  const handleSubmit = () => {
    const body = {
      date: new Date(),
      title: addPost.values.title,
      description: addPost.values.description,
      color: markerColor,
      score,
      imageUris: [],
    };

    createPost.mutate(
      {address, ...location, ...body},
      {
        onSuccess: () => navigation.goBack(),
      },
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => AddPostHeaderRight(handleSubmit),
    });
  }, [handleSubmit, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <InputField
            value=""
            disabled
            icon={
              <Octicons name="location" size={16} color={colors.GRAY_500} />
            }
          />
          <CustomButton variant="outlined" size="large" label="날짜 선택" />
          <InputField
            autoFocus
            placeholder="제목을 입력하세요."
            error={addPost.errors.title}
            touched={addPost.touched.title}
            blurOnSubmit={false}
            onSubmitEditing={() => descriptionRef.current?.focus()}
            returnKeyType="next"
            {...addPost.getTextInputProps('title')}
          />
          <InputField
            ref={descriptionRef}
            blurOnSubmit={false}
            placeholder="기록하고 싶은 내용을 입력하세요."
            error={addPost.errors.description}
            touched={addPost.touched.description}
            multiline
            returnKeyType="next"
            {...addPost.getTextInputProps('description')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  contentContainer: {flex: 1, padding: 20, marginBottom: 10},
  inputContainer: {flex: 1, gap: 20},
});
