import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddMemo } from '../../components/memo';
import { RootState } from '../../store/modules';
import { MemoState, MemoActions } from '../../store/modules/memo';

interface Props extends MemoState {
    memoActions: typeof MemoActions;
}

class AddMemoContainer extends Component<Props> {
    render(){
        const {addMemo} = this.props.memoActions;
        return(
            <AddMemo onSave={addMemo}/>
        )
    }
}

const mapStateToProps = ({memo}: RootState) => ({
    memoList: memo.memoList
});

const mapDispatchToProps = ( dispatch : Dispatch ) => ({
   memoActions: bindActionCreators(MemoActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddMemoContainer);