const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("yoo");
});

const createNotification = (notification => {
  return admin.firestore().collection("notifications")
    .add(notification)
    .then(doc => {
        console.log("here >>");
        return console.log("Notification added", doc)
    });
});

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
      console.log(" +++++++++", doc._fieldsProto);
    const project = doc._fieldsProto;
    const notification = {
      content: "Add a new project",
      user: `${project.authorFirstName.stringValue} ${project.authorLastName.stringValue}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });
