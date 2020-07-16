import {combineReducers } from 'redux';
import memo, { MemoState } from './memo';

export interface RootState {
    memo: MemoState;
}

export default combineReducers({
    memo,
})