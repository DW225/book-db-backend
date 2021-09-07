import { ApolloServer, gql } from 'apollo-server-express';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import 'firebase-functions';

admin.initializeApp(functions.config().firebase);
const cors = require("cors");

const app = express();


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
