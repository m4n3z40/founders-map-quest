import React from 'react';
import {
    ROOT_ELEMENT_ID,
    APP_CONTENT_KEY,
    INITIAL_STATE_VARNAME,
    INITIAL_STATE_KEY
} from '../config/rendering';

const deployTime = (new Date).getTime();

export default function Main() {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui" />

                <title>Founder's Map Quest</title>
                <link rel="stylesheet" href="/public/vendors/bootstrap/css/bootstrap.min.css" />
            </head>
            <body>
                <div id={ROOT_ELEMENT_ID}>
                    {APP_CONTENT_KEY}
                </div>
                <script src={`/public/js/app.js?dt=${deployTime}`}></script>
                <script>
                    {`window.${INITIAL_STATE_VARNAME} = ${INITIAL_STATE_KEY};`}
                </script>
            </body>
        </html>
    );
}
