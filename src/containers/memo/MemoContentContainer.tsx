import React, {Component} from 'react';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { MemoContent } from '../../components/memo'
import { MemoState, MemoActions } from '../../store/modules/memo';
import { RootState } from '../../store/modules';
import { PAGE_PATHS } from '../../constants';

interface Props extends RouteComponentProps<{id: string}>{
    memoState: MemoState
    memoActions: typeof MemoActions;
}
class MemoContentContainer extends Component<Props> {
    render(){
        const { memoList } = this.props.memoState;
        const { deleteMemo } = this.props.memoActions;
        const { match } = this.props;
        const renderPage = () => {
            const findMemo = memoList.find(val => val.id === parseInt(match.params.id));
            if(findMemo){
                return <MemoContent createdAt={findMemo.createdAt} content={findMemo.content} onDelete= {() => deleteMemo(findMemo)}/>
            }
            return <Redirect to={PAGE_PATHS.MEMO}/>
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
)(withRouter(MemoContentContainer));