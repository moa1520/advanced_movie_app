import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/Loader';
import Message from 'Components/Message'
import Poster from '../../Components/Poster';
import Helmet from 'react-helmet';

const Container = styled.div`
    padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) => <>
    <Helmet>
        <title>Koflix | Movies</title>
    </Helmet>
    {loading
        ? <Loader />
        : <Container>
            <Helmet>
                <title>Koflix | Movies</title>
            </Helmet>
            {
                nowPlaying && nowPlaying.length > 0 && <Section title='Now Playing'>{
                    nowPlaying.map(
                        movie => <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                        />
                    )
                }</Section>
            }
            {
                upcoming && upcoming.length > 0 && <Section title='Upcoming'>{
                    upcoming.map(
                        movie => <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                        />
                    )
                }</Section>
            }
            {
                popular && popular.length > 0 && <Section title='Popular'>{
                    popular.map(
                        movie => <Poster
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            imageUrl={movie.poster_path}
                            isMovie={true}
                            rating={movie.vote_average}
                            year={movie.release_date && movie.release_date.substring(0, 4)}
                        />
                    )
                }</Section>
            }
            {error && <Message color='#e74c3c' text={error} />}
        </Container>} </>

HomePresenter.prototype = {
    nowPlaying: PropTypes.array,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
};

export default HomePresenter;