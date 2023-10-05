/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const dbConnect = require('./database/index');
const { MONGODB_CONNECTION_STRING, PORT, HOST} = require(./config/index)
// Constants


// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello remote world!\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);