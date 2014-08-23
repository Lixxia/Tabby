/*
Referenced Documentation:
    https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryResultNode
    https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryQueryOptions
    https://developer.mozilla.org/en-US/docs/Places_Developer_Guide
    https://developer.mozilla.org/en/docs/Places_utilities_for_JavaScript
*/
Components.utils.import('resource://gre/modules/PlacesUtils.jsm');

function getBookmarks() {
    var bookmarksMenu = PlacesUtils.getFolderContents(PlacesUtils.bookmarksMenuFolderId);
    var bookmarksToolbar = PlacesUtils.getFolderContents(PlacesUtils.toolbarFolderId);
    var folders = [bookmarksToolbar, bookmarksMenu];

    var bookmarks = [];
    for (var f=0; f < folders.length; f++) {
        var nodeParent = folders[f]

        //iterate over the immediate children of all folders
        for (var i = 0; i < nodeParent.root.childCount; i ++) {
            var node = nodeParent.root.getChild(i);

            bookmarks.push({
                id: node.itemId,
                url: node.uri,
                title: node.title,
                folder: node.type == node.RESULT_TYPE_FOLDER,
            });

            if(PlacesUtils.nodeIsFolder(node)=== true) {
                var folderId = node.itemId;
                bookmarks.push(folderRefresh(folderId));
            }
        }
        console.log("Full array:",bookmarks);
    }
    return bookmarks;
}

function folderRefresh(folderId) {
    var contents = [];
    var nodeParent = PlacesUtils.getFolderContents(folderId);
    for(var i=0; i < nodeParent.root.childCount; i ++) {
        var node = nodeParent.root.getChild(i);
        contents.push({
            id: node.itemId,
            url: node.uri,
            title: node.title,
            folder: node.type == node.RESULT_TYPE_FOLDER,
        });
        if (PlacesUtils.nodeIsFolder(node)===true) {
            var subFolderId = node.itemId;
            contents.push(folderRefresh(subFolderId));
        }
    }
    // console.log("folder contents:",contents);
    return contents;
}


