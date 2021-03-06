import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Poster from "Components/Poster";
import Profile from "Components/Profile";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
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

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 36px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span`
  font-size: 16px;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 16px;
  opacity: 0.7;
  line-height: 1.5;
  width: 80%;
`;

const TabContainer = styled.ul`
  width: 80%;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const Tab = styled.li`
  font-size: 16px;
  text-align: center;
  width: 120px;
  height: 50px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out, opacity 0.1s ease-in-out;
`;

const ALink = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SLink = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabViewer = styled.div`
  margin-bottom: 50px;
`;

const DetailPresenter = ({
  result,
  handleSeason,
  handleCreatedBy,
  create,
  isMovie,
  season,
  error,
  loading
}) =>
  loading ? (
    <>
      <Helmet>
        <title>Koflix | Loading</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          Koflix | {result.original_title ? result.title : result.name}
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/nothing.jpg")
          }
        />
        <Data>
          <Title>{result.original_title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.last_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]}
              min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((element, index) =>
                  index === result.genres.length - 1
                    ? element["name"]
                    : `${element["name"]} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <TabContainer>
            {result.videos.results.length > 0 ? (
              <Tab>
                <ALink
                  href={`https://www.youtube.com/watch?v=${result.videos.results[0].key}`}
                  target="_blank"
                >
                  Youtube
                </ALink>
              </Tab>
            ) : null}
            {isMovie ? (
              <Tab>
                <CLink
                  to={
                    result.belongs_to_collection
                      ? `/collection/${result.belongs_to_collection.id}`
                      : null
                  }
                >
                  Collection
                </CLink>
              </Tab>
            ) : (
              <Tab>
                <SLink onClick={handleSeason}>Season</SLink>
              </Tab>
            )}
            {isMovie ? null : (
              <Tab>
                <SLink onClick={handleCreatedBy}>Created By</SLink>
              </Tab>
            )}
          </TabContainer>
          <TabViewer>
            {result.seasons && season === true && (
              <Section title="Season">
                {result.seasons.map(show => (
                  <Poster
                    key={show.id}
                    id={show.id}
                    title={show.name}
                    imageUrl={show.poster_path}
                  />
                ))}
              </Section>
            )}{" "}
            {result.created_by && create === true && (
              <Section title="Created By">
                {result.created_by.map(show => (
                  <Profile
                    key={show.id}
                    id={show.id}
                    title={show.name}
                    imageUrl={show.profile_path}
                  />
                ))}
              </Section>
            )}
          </TabViewer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.prototype = {
  result: PropTypes.object,
  handleSeason: PropTypes.func,
  handleCreatedBy: PropTypes.func,
  create: PropTypes.bool,
  season: PropTypes.bool,
  error: PropTypes.string,
  isMovie: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
