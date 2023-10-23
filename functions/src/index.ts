const functions = require('firebase-functions');

import v1Engine from "./v1";


// Middleware that adds CORS so that our API can be accessed by other domains


exports.v1 = functions.https.onRequest(v1Engine);
