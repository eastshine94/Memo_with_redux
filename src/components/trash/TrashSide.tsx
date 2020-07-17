import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Side, SideBackBtn } from '../../styles/BaseStyle';
import { PAGE_PATHS } from '../../constants';
import { Memo } from '../../types/memo';
import styled from 'styled-components';

const Menu = styled(NavLink)`
    width: 100%;
    display: inline-block;
    &.active {
        background: #948acf;
        color: #fff;
        pointer-events: none;
    }
`;

interface TrashItemProps {
    id: number;
    title: string;
}

interface TrashProps {
    deletedMemos: Array<Memo>
}

const TrashItem: React.FC<TrashItemProps> = ({id, title}) => {
    return(
        <Menu activeClassName="active" to={`${PAGE_PATHS.TRASH}/${id}`}><li>{title}</li></Menu>
    )
}

const TrashSide: React.FC<TrashProps> = ({deletedMemos}) => {
    const renderList = deletedMemos.map(val => <TrashItem id={val.id} title={val.title} key={val.id}/>)
    return (
        <Side>
            <SideBackBtn><Link to={PAGE_PATHS.HOME}>{`<`}</Link></SideBackBtn>
            <h2>쓰레기통</h2>
            <ul>
                {renderList}
            </ul>
        </Side>
    )
}

export default TrashSide;