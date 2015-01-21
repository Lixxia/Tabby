function getBg(){
    console.log("pls");
    //document.getElementById("bg").getAttribute(value)
}


// //Create firefox preference that stores array in the form of a string
// //create function in options.js, call it from options.xul to do aformentioned storing and return of that
// //string recreated as an array.

// function updateOptions() {
//     var tabbyprefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
//     //.addEventListener(type, listener[, useCapture, wantsUntrusted ]);
//     document.getElementById("font-family").addEventListener("command", function(event) {
//     	tabbyprefs.setCharPref("extensions.tabby.ffamily", document.getElementById("font-family").getAttribute(value); 
//     }, false);
//     // //Facebook
//     // document.getElementById("facebook").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.facebook", event.target.checked);
//     // }, false);
//     // //Twitter
//     // document.getElementById("twitter").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.twitter", event.target.checked);
//     // }, false);
//     // //Youtube
//     // document.getElementById("youtube").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.youtube", event.target.checked);
//     // }, false);
//     // //Wash
//     // document.getElementById("wash").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.wash", event.target.checked);
//     // }, false);
//     // //Google+
//     // document.getElementById("gplus").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.gplus", event.target.checked);
//     // }, false);
//     // //Google Drive
//     // document.getElementById("gdrive").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.gdrive", event.target.checked);
//     // }, false);
//     // //Bank
//     // document.getElementById("bank").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.bank", event.target.checked);
//     // }, false);
//     // //LinkedIn
//     // document.getElementById("linkedin").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.linkedin", event.target.checked);
//     // }, false);
//     // //Blogger
//     // document.getElementById("blogger").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.blogger", event.target.checked);
//     // }, false);
//     // //Pinterest
//     // document.getElementById("pinterest").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.pinterest", event.target.checked);
//     // }, false);
//     // //GitHub
//     // document.getElementById("github").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.github", event.target.checked);
//     // }, false);
//     // //Space
//     // document.getElementById("space").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.space", event.target.checked);
//     // }, false);
//     // //Weather
//     // document.getElementById("weather").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.weather", event.target.checked);
//     // }, false);
//     // //Clock
//     // document.getElementById("clock").addEventListener("command", function (event) {
//     //     tabbyprefs.setBoolPref("extensions.tabby.clock", event.target.checked);
//     // }, false);

//     // //Icons
//     // document.getElementById("color").addEventListener("command", function (event) {
//     //     tabbyprefs.setIntPref("extensions.tabby.icontype", 0);
//     // }, false);
//     //  document.getElementById("white").addEventListener("command", function (event) {
//     //     tabbyprefs.setIntPref("extensions.tabby.icontype", 1);
//     // }, false);
//     //   document.getElementById("black").addEventListener("command", function (event) {
//     //     tabbyprefs.setIntPref("extensions.tabby.icontype", 2);
//     // }, false);    
// }

// // function updateOrder(orderArray) {
// //     //Ordering of elements
// //     var tabbyprefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
// //     var sOrderArray = orderArray.toString(); 
// //     console.log(sOrderArray);
// //     tabbyprefs.setCharPref("extensions.tabby.iconorder", sOrderArray);
// //     var vbox = document.getElementById("updateMe");
// //     var xulhtml = "";
// //     for(var i=0;i<orderArray.length;i++) {
// //         console.log(orderArray[i]);
// //         xulhtml += "<html:label><html:li><html:input type='checkbox' persist='checked' id='"+orderArray[i]+"' /><html:span>"+orderArray[i]+"</html:span></html:li></html:label>"; 
        
// //     }
// //     console.log(xulhtml);
// //     vbox.innerHTML = xulhtml;
// // }

// // function fetchOptions() {
// //     console.log(settings.enabledTabs);
// //     var idArray = ["facebook","twitter","youtube","wash","gplus","gdrive",
// //     "bank","linkedin","blogger","pinterest","github","space","weather","clock"];
// //     var tabArray = [];
// //     var prefs = Components.classes["@mozilla.org/preferences-service;1"]
// //                       .getService(Components.interfaces.nsIPrefService).getBranch("extensions.tabby.");
// //     for(var i=0;i<idArray.length;i++) {
// //         var value = prefs.getBoolPref(idArray[i]);
// //         if(value) {
// //             tabArray.push(idArray[i]);
// //         }
// //     }
// //     console.log(tabArray);
// //     return tabArray;
// // }
// // function updateSort(idArray) {
// //     idArray = idArray;
// //     fetchSortedOptions();
// // }
// // function fetchSortedOptions() {
// //     console.log(idArray);
// // }
