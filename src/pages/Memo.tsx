import React from 'react';
import { Layout } from '../styles/BaseStyle';
import { MemoSideContainer } from '../containers/memo';

const Memo: React.FC = () => {
    return(
        <Layout>
            <MemoSideContainer/>
        </Layout>
    );
}

export default Memo;