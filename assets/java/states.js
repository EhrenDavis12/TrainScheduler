

function stateHandler(state, data = null) {
    let runState = stateMachine[state] || null;
    console.debug("state: " + state);
    if (runState !== null) { 
        if (data !== null )
        {runState(data);}
        else{runState();} 
    }
    else { stateMachine.openedBrowser(); }
}

var stateMachine = {
    openedBrowser: function () {
        let runStateHTML = getHTML("startScreen", false) || null;
        runStateHTML();
        let runStateDB = baseDB["initFireBase"] || null;
        runStateDB();
    },

    editTrain: function (data) {
        let runStateHTML = getHTML("editTrain", false) || null;
        runStateHTML(data);
    },

    doneEditing: function(){
        let runStateHTML = getHTML("startScreen", false) || null;
        runStateHTML();/* 
        let runStateDB = baseDB["listenOnRootChildOnce"] || null;
        runStateDB(); */
    }
}