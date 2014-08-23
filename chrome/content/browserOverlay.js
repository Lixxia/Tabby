/*
Documentation referenced:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments
    https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Preferences
    https://developer.mozilla.org/en-US/Add-ons/Overlay_Extensions/XUL_School/Appendix_C:_Avoid_using_eval_in_Add-ons#Alternative.3A_Replace_.2B_Function.apply

*/

//Want to check the value of browser.newtab.url in preferences
var prefs = Components.classes["@mozilla.org/preferences-service;1"]
                      .getService(Components.interfaces.nsIPrefService).getBranch("browser.");
var newTabURL = prefs.getCharPref("newtab.url");

var newTab = gBrowser.addTab;
//So, if a tab is added, check if it's a new tab based on prefs, then change to index.html
gBrowser.addTab = function() {
    if (arguments[0] == newTabURL) {
        arguments[0] = "chrome://tabby/content/index.html";
    }
    return newTab.apply(gBrowser, arguments);
}


