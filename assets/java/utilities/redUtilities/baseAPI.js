

var baseAPI = {
    getBaseAPI: function (queryURL, callBackFunction) {
        //queryURL = baseAPI.cleanSearchString(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                let results = response;
                console.debug("baseAPI and results:");
                console.debug(results);
                localStorage.setItem("baseAPI-lastCall", JSON.stringify(results));
                callBackFunction(results);
            });

    },

    getLocalBaseSample: function (queryURL, originalCall, callBackFunction) {
        let baseAPILastCall = JSON.parse(localStorage.getItem("baseAPI-lastCall"));

        if (baseAPILastCall === null){
            originalCall(queryURL, callBackFunction);
        }
        else{
            console.debug("getLocalBaseSample and results:");
            console.debug(baseAPILastCall);
            callBackFunction(baseAPILastCall)
        }
    },

    cleanSearchString: function (str) {
        try {
            let returnWord = str.trim();
            returnWord = returnWord.replace(/ /g, "");
            return returnWord;
        } catch{
            return null;
        }
    }
}