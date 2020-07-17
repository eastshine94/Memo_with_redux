import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import { TrashMain, TrashSide} from '../../components/trash';
import { Container } from '../../styles/BaseStyle';
import { RootState } from '../../store/modules';
import { MemoState, MemoActions } from '../../store/modules/memo';
import { PAGE_PATHS } from '../../constants';

interface Props extends RouteComponentProps {
    memoState: MemoState;
    memoActions : typeof MemoActions;   
}

class TrashContainer extends Component<Props> {
    render() {
        const {deletedMemos} = this.props.memoState;
        const { match } = this.props;
        
        if(match.isExact && deletedMemos.length > 0){
            return <Redirect to={`${PAGE_PATHS.TRASH}/${deletedMemos[0].id}`}/>
        }
        return (
            <Container>
                <TrashSide deletedMemos={deletedMemos}/>
                <TrashMain/>
            </Container>
        )
    }
}

const mapStateToProps = ({memo}: RootState) => ({
    memoState: memo
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    memoActions: bindActionCreators(MemoActions, dispatch),
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(TrashContainer))