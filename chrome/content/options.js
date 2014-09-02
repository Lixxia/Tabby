function updateOptions() {
    var tabbyprefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
    //.addEventListener(type, listener[, useCapture, wantsUntrusted ]);
    //Facebook
    document.getElementById("facebook").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.facebook", event.target.checked);
    }, false);
    //Twitter
    document.getElementById("twitter").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.twitter", event.target.checked);
    }, false);
    //Youtube
    document.getElementById("youtube").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.youtube", event.target.checked);
    }, false);
    //Wash
    document.getElementById("wash").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.wash", event.target.checked);
    }, false);
    //Google+
    document.getElementById("gplus").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.gplus", event.target.checked);
    }, false);
    //Google Drive
    document.getElementById("gdrive").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.gdrive", event.target.checked);
    }, false);
    //Bank
    document.getElementById("bank").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.bank", event.target.checked);
    }, false);
    //LinkedIn
    document.getElementById("linkedin").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.linkedin", event.target.checked);
    }, false);
    //Blogger
    document.getElementById("blogger").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.blogger", event.target.checked);
    }, false);
    //Pinterest
    document.getElementById("pinterest").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.pinterest", event.target.checked);
    }, false);
    //GitHub
    document.getElementById("github").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.github", event.target.checked);
    }, false);
    //Space
    document.getElementById("space").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.space", event.target.checked);
    }, false);
    //Weather
    document.getElementById("weather").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.weather", event.target.checked);
    }, false);
    //Clock
    document.getElementById("clock").addEventListener("command", function (event) {
        tabbyprefs.setBoolPref("extensions.tabby.clock", event.target.checked);
    }, false);

    //Icons
    document.getElementById("color").addEventListener("command", function (event) {
        tabbyprefs.setIntPref("extensions.tabby.icontype", 0);
    }, false);
     document.getElementById("white").addEventListener("command", function (event) {
        tabbyprefs.setIntPref("extensions.tabby.icontype", 1);
    }, false);
      document.getElementById("black").addEventListener("command", function (event) {
        tabbyprefs.setIntPref("extensions.tabby.icontype", 2);
    }, false);
}

function fetchOptions() {
    var idArray = ["facebook","twitter","youtube","wash","gplus","gdrive",
    "bank","linkedin","blogger","pinterest","github","space","weather","clock"];
    var tabArray = [];
    var prefs = Components.classes["@mozilla.org/preferences-service;1"]
                      .getService(Components.interfaces.nsIPrefService).getBranch("extensions.tabby.");
    for(var i=0;i<idArray.length;i++) {
        var value = prefs.getBoolPref(idArray[i]);
        if(value) {
            tabArray.push(idArray[i]);
        }
    }
    console.log(tabArray);
    return tabArray;
}
