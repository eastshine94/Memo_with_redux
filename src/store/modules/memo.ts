import { Memo } from '../../types/memo';

// 액션 타입 정의
const ADD_MEMO = "memo/ADD_MEMO";
const DELETE_MEMO = "memo/DELETE_MEMO"
const RESTORE_MEMO = "memo/RESTORE_MEMO"
// 액션 생성 함수 정의
export interface AddMemoAction {
    type: typeof ADD_MEMO;
    payload: Memo;
}
let id = 3;
export const addMemo = (title: string, content: string, createdAt: number): AddMemoAction => ({type: ADD_MEMO, payload: {
    id: id++,
    title, content, createdAt
}})

export interface DeleteMemoAction {
    type: typeof DELETE_MEMO;
    payload: Memo;
}
export const deleteMemo = (memo: Memo): DeleteMemoAction => ({
    type: DELETE_MEMO,
    payload: memo
}) 

export interface RestoreMemoAction {
    type: typeof RESTORE_MEMO;
    payload: Memo;
}

export const restoreMemo = (memo: Memo):RestoreMemoAction => ({
    type: RESTORE_MEMO,
    payload: memo
})

export const MemoActions = {
    addMemo,
    deleteMemo,
    restoreMemo
}

export type MemoActionTypes = AddMemoAction | DeleteMemoAction | RestoreMemoAction;

// 초기 상태 정의
export interface MemoState {
    memoList: Array<Memo>
    deletedMemos: Array<Memo>
}

const initState: MemoState = {
    memoList: [{
        id: 1,
        title: "첫 번째",
        content: "첫 번째 글입니다.",
        createdAt: Date.now(),
    },
    {
        id: 2,
        title: "두 번째",
        content: "두 번째 글입니다.",
        createdAt: Date.now(),
    }],
    deletedMemos: []
}

// 리듀서
export default function memo(state = initState, action: MemoActionTypes){
    switch(action.type){
        case ADD_MEMO: 
            return {
                ...state,
                memoList: [...state.memoList, action.payload]
            }
        case DELETE_MEMO:
            return {
                ...state,
                memoList: state.memoList.filter(val => val.id !== action.payload.id),
                deletedMemos: [...state.deletedMemos, action.payload].sort((a,b) => a.id - b.id),
            }
        case RESTORE_MEMO :
            return {
                ...state,
                memoList: [...state.memoList, action.payload].sort((a,b) => a.id - b.id),
                deletedMemos: state.deletedMemos.filter(val => val.id !== action.payload.id),    
            }
        default: 
            return state;
    }
}