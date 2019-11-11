import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "Components/Loader";
import Collections from "Components/Collections";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
  display: flex;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const LeftContent = styled.div`
  display: block;
  position: relative;
  width: 30%;
`;

const Title = styled.div`
  font-size: 36px;
  margin-bottom: 40px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  height: 480px;
  width: 300px;
`;

const RightContent = styled.div`
  position: relative;
  display: block;
`;

const CollectionPresenter = ({ result, error, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <LeftContent>
        <Title>{result.name}</Title>
        <Image
          bgImg={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        />
      </LeftContent>
      <RightContent>
        {result.parts.map(part => (
          <Collections
            title={part.title}
            imageUrl={part.poster_path}
            rating={part.vote_average}
            overview={part.overview}
          />
        ))}
      </RightContent>
    </Container>
  );
};

CollectionPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool
};

export default CollectionPresenter;
