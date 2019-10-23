import React from "react";
import { View } from 'react-native'
import { PostAction } from "./PostAction";
import styled from "styled-components";

const FooterContainer = styled(View)`
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
`;
const FavoriteIcon = require("../../assets/favorite.png");
const FavoriteWhiteIcon = require("../../assets/favorite-white.png");
const CommentIcon = require("../../assets/comment.png");

export function PostFooter(props) {
  return (
    <FooterContainer>
      <PostAction
        icone={props.curtidoPorMim ? FavoriteIcon : FavoriteWhiteIcon}
        numero={props.numeroCurtidas}
        onClick={props.curtirPost}
      />
      <PostAction icone={CommentIcon} numero={props.numeroComentarios} />
    </FooterContainer>
  );
}
