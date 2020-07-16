import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { Side, SideBackBtn } from '../../styles/BaseStyle';
import { PAGE_PATHS } from '../../constants';
import { Memo } from '../../types/memo';



const Menu = styled(NavLink)`
    width: 100%;
    display: inline-block;
    &.active {
        background: #948acf;
        color: #fff;
        pointer-events: none;
    }
`;

interface MemoItemProps {
    id: number;
    title: string;
}

interface MemoSideProps {
    memoList: Array<Memo>;
}

const MemoItem: React.FC<MemoItemProps> = ({id, title}) => {
    return(
        <Menu activeClassName="active" to={`${PAGE_PATHS.MEMO}/${id}`}><li>{title}</li></Menu>
    )
}

const MemoSide: React.FC<MemoSideProps> = ({memoList}) => {
    const renderList = memoList.map(val => <MemoItem id={val.id} title={val.title} key={val.id}/>)
    return (
        <Side>
            <SideBackBtn><Link to={PAGE_PATHS.HOME}>{`<`}</Link></SideBackBtn>
            <h2>메모</h2>
            <ul>
                { renderList }
            </ul>
        </Side>
    )
}

export default MemoSide;