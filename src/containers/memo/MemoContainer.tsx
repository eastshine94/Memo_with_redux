import React, { Component } from 'react';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { Container } from '../../styles/BaseStyle';
import { MemoMain, MemoSide } from '../../components/memo';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { MemoActions, MemoState } from '../../store/modules/memo';
import { RootState } from '../../store/modules';
import { PAGE_PATHS } from '../../constants';

interface Props extends RouteComponentProps {
    memoState: MemoState;
    memoActions: typeof MemoActions;
}

class MemoContainer extends Component<Props> {
    render() {
        const {memoList} = this.props.memoState;
        const {match} = this.props;
        if(match.isExact && memoList.length > 0){
            return <Redirect to={`${PAGE_PATHS.MEMO}/${memoList[0].id}`}/>
        }

        return(
            <Container>
                <MemoSide memoList={memoList}/>
                <MemoMain/>
            </Container>
        );
    } 
}

const mapStateToProps = ({memo}: RootState) => ({
    memoState: memo,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    memoActions: bindActionCreators(MemoActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(MemoContainer));