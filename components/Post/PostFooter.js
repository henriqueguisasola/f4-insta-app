import React from "react";
import { View } from 'react-native'
import { PostAction } from "./PostAction";
import styled from "styled-components";

const FooterContainer = styled(View)`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  height: 40px;
`;
const FavoriteIcon = require("../../assets/favorite.svg");
const FavoriteWhiteIcon = require("../../assets/favorite-white.svg");
const CommentIcon = require("../../assets/comment.svg");

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
