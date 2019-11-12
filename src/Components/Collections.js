import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  font-size: 16px;
  margin-bottom: 50px;
  margin-left: 50px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 240px;
  width: 170px;
  background-size: cover;
  border-radius: 4px;
  margin-right: 10px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 15px;
  position: absolute;
  font-size: 12px;
  transition: opacity 0.1s linear;
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Overview = styled.span`
  font-size: 18px;
  opacity: 0.7;
`;

const CLink = styled(Link)``;

const Collections = ({ id, title, imageUrl, rating, overview }) => (
  <Container>
    <CLink to={`/movie/${id}`}>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../assets/nothing.jpg")
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>{" "}
          {rating}/10
        </Rating>
      </ImageContainer>
    </CLink>
    <div>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Overview>{overview}</Overview>
    </div>
  </Container>
);

Collections.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.string
};

export default Collections;
