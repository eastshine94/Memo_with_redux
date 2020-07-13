import React from 'react';
import styled from 'styled-components';
import { Button } from '../base';
import { PAGE_PATHS } from '../../constants';

const Wrapper = styled.div`
    & input, textarea {
        width : 97%;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        margin-bottom: 15px;
    }
    & textarea {
        height: 200px;
    }
`; 
const AddMemo: React.FC = () => {
    return(
        <Wrapper>
            <form>
                <input type='text' placeholder='제목을 입력해주세요.'/>
                <textarea placeholder='메모를 입력해주세요.'/>
            </form>
            <Button>저장</Button>
            <Button to={PAGE_PATHS.MEMO}>취소</Button>
        </Wrapper>

    )
}

export default AddMemo;