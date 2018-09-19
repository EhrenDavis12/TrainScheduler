

$(document).ready(function () {

    main();

    baseDB.listenOnRootChildAdd(buildRecordJson);
    baseDB.listenOnRootChildChanged(trainHasBeenUpdated);

    $(document).on("click", getHTML("submitBtn", false), function () {
        submitFormToDB();
    });

    $(document).on("click", getHTML("updateBtn", false), function () {
        updateTrain($(this).attr("data-key"));
    });

    $(document).on("click", getHTML("editBtn", false), function () {
        editTrain($(this).attr("data-key"));
    });

    $(document).on("click", getHTML("deleteBtn", false), function () {
        deleteTrain($(this).attr("data-key"));
    });

});


