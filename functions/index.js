const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
let db = admin.firestore();

exports.getIngredients = functions.https.onRequest((request, response) => {
 return db.collection('ingredients').get()
     .then((snapshot) => {
      const arrayR = snapshot.docs.map(doc => doc.data());
      response.set('Access-Control-Allow-Origin', '*');
      response.send(arrayR);
     })
     .catch((err) => {
      console.log('Error getting documents', err);
     });
});
