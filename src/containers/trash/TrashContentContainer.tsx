import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { MemoState, MemoActions } from '../../store/modules/memo';
import { RootState } from '../../store/modules';
import { PAGE_PATHS } from '../../constants';
import { TrashContent} from '../../components/trash';

interface Props extends RouteComponentProps<{id: string}> {
    memoState: MemoState;
    memoActions: typeof MemoActions;
}

class TrashContentContainer extends Component<Props> {
    render(){
        const { deletedMemos } = this.props.memoState;
        const { match } = this.props;
        const { restoreMemo } = this.props.memoActions;
        const renderPage = () => {
            const findMemo = deletedMemos.find(val => val.id === parseInt(match.params.id));
            if(findMemo){
                return <TrashContent createdAt={findMemo.createdAt} content={findMemo.content} onRestore={() => restoreMemo(findMemo)}/>
            }
            return <Redirect to={PAGE_PATHS.TRASH}/>
        }   

        return (
            <React.Fragment>
                {renderPage()}
            </React.Fragment>
        )
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
)(withRouter(TrashContentContainer));