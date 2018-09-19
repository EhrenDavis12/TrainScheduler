

function getHTML(prop, isJQuery = true) {
    if (isJQuery)
        return $(htmlDisplayHandler[prop]);
    return htmlDisplayHandler[prop];
}

var htmlDisplayHandler = {
    jumboWords: ".jumboWords",
    submitBtn: "#submitBtn",
    updateBtn: "#updateBtn",
    trainName: "#trainName",
    destination: "#destination",
    startTime: "#startTime",
    frequency: "#frequency",
    results: "#results",
    militaryTime: ".militaryTime",
    inputNumber: ".inputNumber",
    deleteBtn: ".deleteBtn",
    editBtn: ".editBtn",

    startScreen: function () {
        /* getHTML("jumboWords").text(getMessage("jumboWords")); */
        getHTML("updateBtn").hide();
        getHTML("submitBtn").show();
        $('body').css('background-image', 'url(./assets/images/woldBkg.jpg)');
    },

    editTrain: function (key) {
        let trainName = $("#" + key).children(".trainName").text();
        let destination = $("#" + key).children(".destination").text();
        let frequency = $("#" + key).children(".frequency").text();
        let startTime = $("#" + key).children(".minutesTillTrain").attr("data-startTime");

        getHTML("trainName").val(trainName);
        getHTML("destination").val(destination);
        getHTML("startTime").val(startTime);
        getHTML("frequency").val(frequency);

        getHTML("updateBtn").attr("data-key", key);
        getHTML("submitBtn").hide();
        getHTML("updateBtn").show();
    },

    deleteTrain: function (key) {
        $("#" + key).remove();
    }
}