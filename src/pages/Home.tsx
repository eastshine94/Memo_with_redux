import React, {Component} from 'react';
import { Layout, Container } from '../styles/BaseStyle';
import { HomeMain, HomeSide } from '../components/home';



class Home extends Component {
    render() {
        return(
            <Layout>
                <Container>
                    <HomeSide/>
                    <HomeMain/>
                </Container>
            </Layout>
        )
    }
}

export default Home;