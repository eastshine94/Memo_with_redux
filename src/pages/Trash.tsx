import React from 'react';
import { Layout, Container } from '../styles/BaseStyle';
import { TrashMain, TrashSide } from '../components/trash';


const Trash: React.FC = () => {
    return(
        <Layout>
            <Container>
                <TrashSide/>
                <TrashMain/>
            </Container>
        </Layout>
    );
}

export default Trash;