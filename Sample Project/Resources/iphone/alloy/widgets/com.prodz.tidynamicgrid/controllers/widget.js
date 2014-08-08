function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.prodz.tidynamicgrid/" + s : s.substring(0, index) + "/com.prodz.tidynamicgrid/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    new (require("alloy/widget"))("com.prodz.tidynamicgrid");
    this.__widgetId = "com.prodz.tidynamicgrid";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.tdgMain = Ti.UI.createView({
        backgroundColor: "#fff",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "tdgMain"
    });
    $.__views.tdgMain && $.addTopLevelView($.__views.tdgMain);
    $.__views.tdgWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "transparent",
        id: "tdgWrapper"
    });
    $.__views.tdgMain.add($.__views.tdgWrapper);
    $.__views.tdgScrollView = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        contentHeight: Ti.UI.SIZE,
        contentWidth: Ti.UI.FILL,
        layout: "horizontal",
        backgroundColor: "transparent",
        scrollType: "vertical",
        id: "tdgScrollView"
    });
    $.__views.tdgWrapper.add($.__views.tdgScrollView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var params, columns, space, data, screenWidth, newWidth, columnWidth, frameBGcolor, colViews, itemsOptions, onItemClick, currentCol, delayTime;
    var init = function(opts) {
        params = opts || {};
        columns = params.columns || 3;
        space = params.space || 3;
        data = params.data || {};
        currentCol = 0;
        delayTime = params.delayTime || null;
        null == delayTime && (delayTime = 500);
        screenWidth = params.width || Ti.Platform.displayCaps.getPlatformWidth();
        newWidth = screenWidth - space;
        columnWidth = newWidth / columns - space;
        $.tdgScrollView.left = space;
        $.tdgScrollView.top = space;
        $.tdgScrollView.right = -1;
        frameBGcolor = params.gridBackgroundColor || "#fff";
        $.tdgMain.backgroundColor = frameBGcolor;
        itemsOptions = {
            backgroundColor: params.itemBackgroundColor || "transparent",
            borderWidth: params.itemBorderWidth || 0,
            borderColor: params.itemBorderColor || "transparent",
            borderRadius: params.itemBorderRadius || 0
        };
        onItemClick = params.onItemClick || function() {
            Ti.API.info("TiDynamicGrid -> onItemClick is not defined.");
        };
        colViews = [];
        for (var x = 0; columns > x; x++) {
            colViews[x] = Ti.UI.createView({
                width: columnWidth,
                height: Ti.UI.SIZE,
                backgroundColor: "transparent",
                top: 0,
                left: 0,
                right: space,
                bottom: space,
                layout: "vertical"
            });
            $.tdgScrollView.add(colViews[x]);
        }
        Ti.API.info("TiDynamicGrid -> Widget initialized.");
        addGridItems(data);
    };
    var addGridItems = function(args) {
        data = args || {};
        for (var x = 0; data.length > x; x++) addGridItem(data[x]);
    };
    var addGridItem = function(item) {
        var tmpView = Ti.UI.createView({
            width: columnWidth,
            height: Ti.UI.SIZE,
            visible: false
        });
        tmpView.add(item.view);
        $.tdgMain.add(tmpView);
        setTimeout(function() {
            var frame = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: tmpView.size.height,
                backgroundColor: itemsOptions.backgroundColor,
                bottom: space,
                borderColor: itemsOptions.borderColor,
                borderRadius: itemsOptions.borderRadius,
                borderWidth: itemsOptions.borderWidth
            });
            var overlay = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.FILL,
                backgroundColor: "transparent",
                zIndex: 1,
                data: item.data
            });
            var gridElement = item.view;
            overlay.addEventListener("click", function(e) {
                onItemClick(e);
            });
            frame.add(gridElement);
            frame.add(overlay);
            $.tdgMain.remove(tmpView);
            tmpView = null;
            $.tdgScrollView.children[currentCol].add(frame);
            currentCol++;
            currentCol == colViews.length && (currentCol = 0);
        }, delayTime);
    };
    var clearGrid = function() {
        Ti.API.info("TiDynamicGrid -> clearGrid ran.");
        $.tdgScrollView.removeAllChildren();
    };
    var setOnItemClick = function(fnt) {
        onItemClick = fnt || function() {
            Ti.API.info("TiDynamicGrid -> onItemClick is not defined.");
        };
    };
    exports.init = init;
    exports.addGridItems = addGridItems;
    exports.clearGrid = clearGrid;
    exports.addGridItem = addGridItem;
    exports.setOnItemClick = setOnItemClick;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;