
var giphyAPI = {
    getGiphyAPI: function (searchWord, callBackFunction) {
        searchWord = baseAPI.cleanSearchString(searchWord) || "facePalm";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            searchWord + "&api_key=w2TbIZFx8ZPKjMUHPf28Hu8R1kSt1DZN" +
            "&limit=10";
        baseAPI.getBaseAPI(queryURL, callBackFunction);
    },

    getLocalSample: function (searchWord, callBackFunction) {
        baseAPI.getLocalBaseSample(searchWord, giphyAPI.getGiphyAPI, callBackFunction);
    },

    getDataFromResponse: function(response){
        return  response.data
    }
}
