import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../containers/Login'
import Wrapper from '../containers/Wrapper'


const IndexPage = () => {

    return (
        <Wrapper>
            <Login />
        </Wrapper>

    )
}

export default IndexPage;