import styled from 'styled-components';

export const Layout = styled.div`
    margin: 20px 5px;
`;

export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    @media only screen and ( max-width: 1200px ){
        width: 100%;
    }
`;

export const Side = styled.aside`
    width: 200px;
    min-height: 600px;
    border: 1px solid #ccc;
    margin-right: 10px;
    & h2 {
        font-size: 25px;
        font-weight: bold;
        padding: 10px 5px;
    }
    & ul {
        border-top: 1px solid #ccc;
        margin-bottom : 5px;
        & li {
            border-bottom: 1px solid #ccc;
            padding: 10px 5px;
            font-weight: bold;
            font-weight: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
                color: #000000;
                background-color: #ecf0f1;
                cursor: pointer;
            }
        }
    }
`

export const SideBackBtn = styled.div`
    font-size: 24px;
    padding: 10px;
`;

export const Main = styled.main`
    width: 1000px;
    border: 1px solid #ccc;
    margin-right: 10px;
    padding: 10px;
`

export const MainContent = styled.section`
    width: 100%;
    border-top: 1px solid #ccc;
`