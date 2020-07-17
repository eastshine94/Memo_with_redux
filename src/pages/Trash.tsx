import React from 'react';
import { Layout } from '../styles/BaseStyle';
import { TrashContainer } from '../containers/trash';


const Trash: React.FC = () => {
    return(
        <Layout>
            <TrashContainer/>
        </Layout>
    );
}

export default Trash;