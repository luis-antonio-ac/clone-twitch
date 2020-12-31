import React from 'react';

import { Text } from 'react-native';

import { List, ChannelContainer, ChannelLeft, Avatar,Column,Username,Info, ChannelRight,WhiteCircle } from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <ChannelLeft>
        <Avatar />
        <Column>
          <Username>rocketseat_oficial</Username>
          <Info>36 new videos</Info>
        </Column>
      </ChannelLeft>

      <ChannelRight>
        <WhiteCircle />
      </ChannelRight>
    </ChannelContainer>
  )

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
