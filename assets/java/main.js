
var devMode = false;

function main() {
    stateHandler("openedBrowser");
}

function submitFormToDB() {
    console.debug(arguments.callee.name);

    let inputs = getInputsFromForm();

    if (isValidInput(inputs)) {
        baseDB.pushDataRoot(inputs);
    }
}

function getInputsFromForm(){
    return inputs = {
        trainName: getHTML("trainName").val(),
        destination: getHTML("destination").val(),
        startTime: getHTML("startTime").val(),
        frequency: getHTML("frequency").val()
    };
}

function isValidInput(inputs){
    if (inputs.trainName === ""
    || inputs.destination === ""
    || inputs.startTime === ""
    || inputs.frequency === "")
        return false;
    return true;
}

function buildRecordJson(snapshot, key) {
    console.debug(arguments.callee.name);
    var trDiv = $("<tr>");
    trDiv.attr("id", key)
    let jsonElements = buildGiphyCard(snapshot, key);
    cardFactory.createDivByArrayOfJson(trDiv,jsonElements);
    getHTML("results").append(trDiv);
}

function buildGiphyCard(snapshot, key) {
    let minutesTillTrain = getNextArrival(snapshot["startTime"], snapshot["frequency"])
    return jsonCard = [
        {
            "div": "<td>",
            "text": snapshot["trainName"],
            "attrs": {
                "class": "trainName",
            }
        },{
            "div": "<td>",
            "text": snapshot["destination"],
            "attrs": {
                "class": "destination",
            }
        },{
            "div": "<td>",
            "text": snapshot["frequency"],
            "attrs": {
                "class": "frequency",
            }
        },{
            "div": "<td>",
            "text": getMinutesAway(minutesTillTrain),
            "attrs": {
                "class": "minutesTillTrain",
                "data-startTime": snapshot["startTime"]
            }
        },{
            "div": "<td>",
            "text": minutesTillTrain
        },{
            "div": "<Button>",
            "text": "Edit",
            "attrs": {
                "class": "btn btn-primary editBtn",
                "data-key": key
            }
        },{
            "div": "<Button>",
            "text": "X",
            "attrs": {
                "class": "btn btn-primary deleteBtn",
                "data-key": key
            }
        }
    ];
}

function getNextArrival(startTime, frequency){
    var startTimeConverted = moment(startTime, "HH:mm").subtract(1, "years");
    var diffTime = moment().diff(moment(startTimeConverted), "minutes");
    var tRemainder = diffTime % frequency;
    var tMinutesTillTrain = frequency - tRemainder;
    console.debug("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    return tMinutesTillTrain;
}


function getMinutesAway(minutesTillTrain ){
    var nextTrain = moment().add(minutesTillTrain, "minutes");
    console.debug("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm A"));
    return moment(nextTrain).format("hh:mm A");
}

function editTrain(key){
    console.debug(arguments.callee.name); 
    stateHandler("editTrain", key)
}

function updateTrain(key){
    console.debug(arguments.callee.name); 
    let inputs = getInputsFromForm();

    if (isValidInput(inputs)) {
        baseDB.updateRecordByKey(key, inputs);
    }
    stateHandler("doneEditing");
}

function trainHasBeenUpdated(snapshot, key){
    let runStateHTML = getHTML("deleteTrain", false);
    runStateHTML(key);
    buildRecordJson(snapshot, key);
}

function deleteTrain(key){
    console.debug(arguments.callee.name);           
    baseDB.deleteRecordByKey(key);
    htmlDisplayHandler.deleteTrain(key);
}





