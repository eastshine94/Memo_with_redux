import React from 'react';
import { Layout } from '../styles/BaseStyle';
import { MemoContainer } from '../containers/memo';

const Memo: React.FC = () => {
    return(
        <Layout>
            <MemoContainer/>
        </Layout>
    );
}

export default Memo;