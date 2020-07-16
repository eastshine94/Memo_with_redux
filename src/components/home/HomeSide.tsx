import React from 'react';
import styled from 'styled-components';
import { Side } from '../../styles/BaseStyle';
import { NavLink } from 'react-router-dom';
import { PAGE_PATHS } from '../../constants';

const Menu = styled(NavLink)`
    width: 100%;
    display: inline-block;
    &.active {
        background: red;
    }
`;

const HomeSide: React.FC = () => {
    return (
        <Side>
            <h2>Home</h2>
            <ul>
                <li><Menu to={PAGE_PATHS.MEMO} activeClassName="active">메모</Menu></li>
                <li><Menu to={PAGE_PATHS.TRASH} activeClassName="active">쓰레기통</Menu></li>
            </ul>
        </Side>
    )
}

export default HomeSide;