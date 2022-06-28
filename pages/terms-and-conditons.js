import React from 'react';
import Head from "next/head";

function terms_and_conditions() {
    var __html = require('../public/terms.html');
    var template = { __html: __html };
    console.log(template);
    return (
        <div>
            <Head>
                <title>The Elves</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div dangerouslySetInnerHTML={{template}}>
            </div>
        </div>
        
    );
}

export default terms_and_conditions
