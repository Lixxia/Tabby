//To-Do:
//Separate icon types into folders, transparent white, transparent black and colored tabs -> get rid of monochrome
// img: "chrome://tabby/content/assets/images" + iconType + "/name.png" -> normalize names (i.e. all fb icons are fb.png within
//   respective folders)
//Create options menu with: choice of icon type (dropdown?) and list with checkboxes for tab choices
var tabValues = {
    'facebook': {
        cimg: "fa fa-facebook fa-inverse fa-2x",
        wimg: "fa fa-facebook fa-inverse fa-2x",
        bimg: "fa fa-facebook fa-2x",
        url: "https://facebook.com"
    },
    'twitter': {
        cimg: "fa fa-twitter fa-inverse fa-2x",
        wimg: "fa fa-twitter fa-inverse fa-2x",
        bimg: "fa fa-twitter fa-2x",
        url: "https://twitter.com",
    },
    'youtube': {
        cimg: "fa fa-youtube fa-inverse fa-2x",
        wimg: "fa fa-youtube fa-inverse fa-2x",
        bimg: "fa fa-youtube fa-2x",
        url: "https://youtube.com"
    },
    'linkedin': {
        cimg: "fa fa-linkedin fa-inverse fa-2x",
        wimg: "fa fa-linkedin fa-inverse fa-2x",
        bimg: "fa fa-linkedin fa-2x",
        url: "https://linkedin.com"
    },
    'bank': {
        cimg: "fa fa-bank fa-inverse fa-2x",
        wimg: "fa fa-bank fa-inverse fa-2x",
        bimg: "fa fa-bank fa-2x",
        url: "https://www.bankofamerica.com/"
    },
    'reddit': {
        cimg: "fa fa-reddit fa-inverse fa-2x",
        wimg: "fa fa-reddit fa-inverse fa-2x",
        bimg: "fa fa-reddit fa-2x",
        url: "https://reddit.com"
    },
    'gdrive': {
        cimg: "fa fa-google-plus fa-inverse fa-2x",
        wimg: "fa fa-google-plus fa-inverse fa-2x",
        bimg: "fa fa-gogle-plus fa-2x",
        url: "https://plus.google.com"
    },
    'gplus': {
        cimg: "fa fa-google-plus fa-inverse fa-2x",
        wimg: "fa fa-google-plus fa-inverse fa-2x",
        bimg: "fa fa-gogle-plus fa-2x",
        url: "https://plus.google.com"
    },
    'wash': {
        cimg: "fa fa-tint fa-inverse fa-2x",
        wimg: "fa fa-tint fa-inverse fa-2x",
        bimg: "fa fa-tint fa-2x",
        url: "http://campus.ee/tenant/selvepesulad/?lang=en"
    },
    'github': {
        cimg: "fa fa-github fa-inverse fa-2x",
        wimg: "fa fa-github fa-inverse fa-2x",
        bimg: "fa fa-github fa-2x",
        url: "https://github.com"
    },
    'clock': {
        cimg: "fa fa-clock-o fa-inverse fa-2x",
        wimg: "fa fa-clock-o fa-inverse fa-2x",
        bimg: "fa fa-clock-o fa-2x",
        url: "chrome://tabby/content/clock.html"
    },
    'space': {
        cimg: "fa fa-minus fa-inverse fa-2x",
        wimg: "fa fa-minus fa-inverse fa-2x",
        bimg: "fa fa-minus fa-2x",
        url: "https://google.com"
    },
    'weather': {
        cimg: "fa fa-umbrella fa-inverse fa-2x",
        wimg: "fa fa-umbrella fa-inverse fa-2x",
        bimg: "fa fa-umbrella fa-2x",
        url: "http://www.weather.com/weather/today/Tartu+ENXX0005:1:EN"
    },
    'pinterest': {
        cimg: "fa fa-pinterest fa-inverse fa-2x",
        wimg: "fa fa-pinterest fa-inverse fa-2x",
        bimg: "fa fa-pinterest fa-2x",
        url: "https://pinterest.com"
    },
    'trello' : {
        cimg: "fa fa-trello fa-inverse fa-2x",
        wimg: "fa fa-trello fa-inverse fa-2x",
        bimg: "fa fa-trello fa-2x",
        url: "https://trello.com"
    }
};

function getTabs(tabArray) {
    var tabHtml = "<div class='hold'>";
    for(var i=0;i<tabArray.length;i++) {
        if (!!tabValues[tabArray[i]]) {
            tabHtml += createTab(tabValues[tabArray[i]]);    
        }
        else {
            console.error(tabArray[i] + " is not defined in tabValues.");
        }
    }
    tabHtml += "</div>";
    return tabHtml;
}

function typeImg(site) {
    var prefs = Components.classes["@mozilla.org/preferences-service;1"]
                      .getService(Components.interfaces.nsIPrefService).getBranch("extensions.tabby.");
    var typePref = prefs.getIntPref("icontype");
    if (typePref === 0) {
        return site.cimg;
    }
    else if (typePref === 1) {
        return site.wimg;
    }
    else {
        return site.bimg;
    }
}
function createTab(site) {
    //var tab = "<div class ='tab'><a href ='"+site.url+"'><img src='"+typeImg(site)+"''></a></div>";
    var tab = "<div class='tab'><a href ='"+site.url+"'><i class='"+typeImg(site)+"''></i></a></div>";
    return tab;
}

