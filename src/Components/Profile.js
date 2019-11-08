import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div `
    font-size: 12px;
`;

const Image = styled.div `
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div `
    margin-bottom: 5px;
    position: relative;
`;

const Title = styled.span `
    display: block;
    margin-bottom: 2px;
`;

const Profile = ({
    id,
    imageUrl,
    title
}) => (
    <Container>
        <ImageContainer>
            <Image
                bgUrl={imageUrl
                    ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                    : require("../assets/nothing.jpg")}/>
        </ImageContainer>
        <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
    </Container>
);

Profile.prototype = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default Profile;