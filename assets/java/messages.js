
var messagesDictionary = {
    jumboWords: "Stay on Track, don't get derailed!"
}

function getMessage(prop){
    return messagesDictionary[prop] || "Message Not Found";
}