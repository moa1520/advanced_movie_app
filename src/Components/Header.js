import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header `
    color: white;
    position: fixed;
    font-size: 16px;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul `
    display: flex;
`;

const Item = styled.li `
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom: 3px solid ${props => (
    props.current
        ? "#3498db"
        : "transparent"
)};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Banner = styled.li `
    font-size:26px;
    margin: 10px 30px;
    color: red;
    opacity: 0.8;
    &:hover{opacity:1.0;}
    transition: opacity 0.2s ease-in-out;
`;

export default withRouter(({location: {
        pathname
    }}) => (
    <Header>
        <List>
            <Banner>
                Koflix
            </Banner>
            <Item current={pathname === '/'}>
                <SLink to='/'>Movies</SLink>
            </Item>
            <Item current={pathname === '/tv'}>
                <SLink to='/tv'>TV</SLink>
            </Item>
            <Item current={pathname === '/search'}>
                <SLink to='/search'>Search</SLink>
            </Item>
        </List>
    </Header>
));