import { View } from 'react-native';
import React, { FC } from 'react';
import { TopBar } from '../Component/TopBar';
export const ContentWrapper: FC<{ topBar: { title: string } }> = ({
  children,
  topBar,
}) => {
  return (
    <>
      {topBar ? <TopBar title="" /> : null}
      {children}
    </>
  );
};
