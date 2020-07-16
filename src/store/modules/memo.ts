import { Memo } from '../../types/memo';

// 액션 타입 정의
const ADD_MEMO = "memo/ADD_MEMO";

// 액션 생성 함수 정의
export interface AddMemoAction {
    type: typeof ADD_MEMO,
    payload: Memo;
}
let id = 3;
export const addMemo = (title: string, content: string, createdAt: number): AddMemoAction => ({type: ADD_MEMO, payload: {
    id: id++,
    title, content, createdAt
}})

export const MemoActions = {
    addMemo
}

export type MemoActionTypes = AddMemoAction;

// 초기 상태 정의
export interface MemoState {
    memoList: Array<Memo>
}

const initState: MemoState = {
    memoList: [{
        id: 1,
        title: "첫 번째",
        content: "첫 번째 글입니다.",
        createdAt: Date.now(),
        deleted: true
    },
    {
        id: 2,
        title: "두 번째",
        content: "두 번째 글입니다.",
        createdAt: Date.now(),
        deleted: true
    }]
}

// 리듀서
export default function memo(state = initState, action: MemoActionTypes){
    switch(action.type){
        case ADD_MEMO: 
            return {
                ...state,
                memoList: [...state.memoList, action.payload]
            }
        default: 
            return state;
    }
}