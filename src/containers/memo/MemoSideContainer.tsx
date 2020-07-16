import React, { Component } from 'react';
import { Container } from '../../styles/BaseStyle';
import { MemoMain, MemoSide } from '../../components/memo';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { MemoState, MemoActions } from '../../store/modules/memo';
import { RootState } from '../../store/modules';

interface Props extends MemoState {
    memoActions: typeof MemoActions;
}

class MemoSideContainer extends Component<Props> {
    render() {
        const {memoList} = this.props;
        return(
            <Container>
                <MemoSide memoList={memoList}/>
                <MemoMain/>
            </Container>
        );
    } 
}

const mapStateToProps = ({memo}: RootState) => ({
    memoList: memo.memoList,

})

const mapDispatchToProps = (dispatch:Dispatch) => ({
    memoActions: bindActionCreators(MemoActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemoSideContainer);