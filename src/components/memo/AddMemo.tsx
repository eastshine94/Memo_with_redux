import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { Button } from '../base';
import { PAGE_PATHS } from '../../constants';
import { withRouter, RouteComponentProps } from 'react-router-dom';
const Wrapper = styled.section`
    & input, textarea {
        width : 97%;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 10px;
        margin-bottom: 15px;
    }
    & textarea {
        height: 200px;
        resize: vertical;
    }
`; 

interface Props extends RouteComponentProps {
    onSave(title: string, content: string, createdAt: number): void;
}

const AddMemo: React.FC<Props> = (props) => {
    const { onSave, history } = props
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setTitle(e.target.value);
    }
    const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        setContent(e.target.value);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onClickSave();
    } 

    const onClickSave = () => {
        if(title && content){
            onSave(title, content, Date.now());
            history.replace(`${PAGE_PATHS.MEMO}`);
        }
        else {
            window.alert("메모를 모두 채워주세요");
        }
    }
    return(
        <Wrapper>
            <form onSubmit={onSubmit}>
                <input type='text' onChange={onTitleChange} placeholder='제목을 입력해주세요.'/>
                <textarea onChange={onContentChange} placeholder='메모를 입력해주세요.'/>
            </form>
            <Button onClick={onClickSave}>저장</Button>
            <Button to={PAGE_PATHS.MEMO}>취소</Button>
        </Wrapper>

    )
}

export default withRouter(AddMemo);