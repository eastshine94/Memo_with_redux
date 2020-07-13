import React from 'react';
import { Link } from 'react-router-dom';
import { Side, SideBackBtn } from '../../styles/BaseStyle';
import { PAGE_PATHS } from '../../constants';


const MemoSide: React.FC = () => {
    return (
        <Side>
            <SideBackBtn><Link to={PAGE_PATHS.HOME}>{`<`}</Link></SideBackBtn>
            <h2>메모</h2>
            <ul>
                <li>첫번째 메모입니다.</li>
                <li>두번째 메모입니다.</li>
                <li>세번째 메모입니다.</li>
                <li>첫번째 메모입니다.</li>
                <li>두번째 메모입니다.</li>
                <li>세번째 메모입니다.</li>
                <li>첫번째 메모입니다.</li>
                <li>두번째 메모입니다.</li>
                <li>세번째 메모입니다.</li>
                <li>세번째 메모입니다.</li>
            </ul>
        </Side>
    )
}

export default MemoSide;