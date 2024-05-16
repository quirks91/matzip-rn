import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';
import React, {ReactNode} from 'react';
import {colors} from '@/constants';

interface HeaderButtonProps extends PressableProps {
  labelText?: string;
  icon?: ReactNode;
  hasError?: boolean;
}

const HeaderButton = ({
  labelText,
  icon,
  hasError = false,
  ...props
}: HeaderButtonProps) => {
  return (
    <Pressable style={styles.container} disabled={hasError} {...props}>
      {!labelText && icon}
      {!icon && labelText && (
        <Text style={[styles.text, hasError && styles.textError]}>
          {labelText}
        </Text>
      )}
    </Pressable>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.PINK_700,
  },
  textError: {
    color: colors.GRAY_200,
  },
});
