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
        return console.log("Notification added", doc)
    });
});

exports.projectCreated = functions.firestore
  .document("projects/{projectId}")
  .onCreate(doc => {
    const project = doc._fieldsProto;
    const notification = {
      content: "Add a new project",
      user: `${project.authorFirstName.stringValue} ${project.authorLastName.stringValue}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });

  exports.userJoined = functions.auth.user().onCreate(user => {
      return admin.firestore().collection("users").doc(user.uid).get().then(doc => {
          const newUser = doc.data();
          console.log("newUser.firstName ++++", newUser.firstName);
          const notification = {
              content: "Joined the party",
              user: `${newUser.firstName} ${newUser.lastName}`,
              time: admin.firestore.FieldValue.serverTimestamp()
          }
          return createNotification(notification);
      })
  })
