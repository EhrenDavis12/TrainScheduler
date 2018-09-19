
var baseDB = {
    database: "",
    config: {
        apiKey: "AIzaSyA2S1hkUgEe3LuzS1j_vD67-3sDKAxENMY",
        authDomain: "rps-multiplayer-63927.firebaseapp.com",
        databaseURL: "https://rps-multiplayer-63927.firebaseio.com",
        projectId: "rps-multiplayer-63927",
        storageBucket: "rps-multiplayer-63927.appspot.com",
        messagingSenderId: "340527966788"
    },

    initFireBase: function () {
        firebase.initializeApp(baseDB.config);
        baseDB.database = firebase.database();
    },

    setData: function (table, ID, jsonObj) {
        console.debug(arguments.callee.name);
        firebase.database().ref(table + "/" + ID).set(jsonObj);
    },

    pushDataRoot: function (userJson) {
        console.debug(arguments.callee.name);
        firebase.database().ref().push(userJson);
    },

    listenOnRootChildAdd: function (func) {
        console.debug(arguments.callee.name);
        let refDB = baseDB.database.ref();
        refDB.on("child_added", function (snapshot) {
            if (snapshot.val() !== null) { 
                func(snapshot.val(), snapshot.ref.key); 
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        })
    },

    listenOnRootChildChanged: function (func) {
        console.debug(arguments.callee.name);
        let refDB = baseDB.database.ref();
        refDB.on("child_changed", function (snapshot) {
            if (snapshot.val() !== null) { 
                func(snapshot.val(), snapshot.ref.key); 
            }
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        })
    },
    
    deleteRecordByKey: function(key){
        baseDB.database.ref().child(key).remove(); 
    },

    updateRecordByKey: function(key, data){
        baseDB.database.ref().child(key).update(data);
    }
}

