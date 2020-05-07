import React from 'react';
import Layout from "../layouts";
import HomeTab from "../components/homeTab"
import {loadDB} from '../lib/db.js'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import 'isomorphic-fetch'

const Index = (props) => {

    return(
        <Layout>
            <HomeTab></HomeTab>
        </Layout>
    )
}

export default Index;