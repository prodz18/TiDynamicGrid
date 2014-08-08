
var params,columns,space,data,screenWidth,newWidth,columnWidth,frameBGcolor,colViews,itemsOptions,onItemClick,currentCol,delayTime;

var init = function(opts){
	params = opts || {};
	columns = params.columns || 3;
	space = params.space || 3;
	data = params.data || {};
	
	currentCol=0;
	
	//FIX FOR GETTING RIGHT DIMENSIONS DEPENDING OS
	delayTime = params.delayTime || null;
	if(delayTime == null){
		delayTime = (OS_ANDROID) ? 1000:500;
	}
	
	screenWidth = params.width || Ti.Platform.displayCaps.getPlatformWidth();
    if (OS_ANDROID) {
        screenWidth /= Ti.Platform.displayCaps.logicalDensityFactor;
    }
	newWidth = screenWidth - space;
	columnWidth = (newWidth / columns) - space;
	
	//ADJUST THE SCROLLVIEW
	$.tdgScrollView.left = space;
	$.tdgScrollView.top = space;
	$.tdgScrollView.right = -1;
	
	//MAIN BG COLOR
	frameBGcolor = params.gridBackgroundColor || '#fff';
	$.tdgMain.backgroundColor = frameBGcolor;
	
	//ITEMS OPTIONS
	itemsOptions = {
		backgroundColor: params.itemBackgroundColor || 'transparent',
		borderWidth: params.itemBorderWidth || 0,
		borderColor: params.itemBorderColor || 'transparent',
		borderRadius: params.itemBorderRadius || 0
	};
	
	//ITEM CLICK FUNCTION
	onItemClick = params.onItemClick || function(){Ti.API.info('TiDynamicGrid -> onItemClick is not defined.');};
	
	colViews = [];
	
	for(var x=0;x<columns;x++){
		colViews[x] = Ti.UI.createView({
			width:columnWidth,
			height:Ti.UI.SIZE,
			backgroundColor:'transparent',
			top:0,
			left:0,
			right:space,
			bottom:space,
			layout:'vertical'
		});
		$.tdgScrollView.add(colViews[x]);
	}
	
	Ti.API.info('TiDynamicGrid -> Widget initialized.');
	addGridItems(data);	
};

var addGridItems = function(args){
	//clearGrid();
	data = args || {};
	for (var x=0;x < data.length; x++){
		addGridItem(data[x]);
	}
};

var addGridItem = function(item){
	
	var tmpView = Ti.UI.createView({
		width:columnWidth,
		height:Ti.UI.SIZE,
		visible:false
	});
	tmpView.add(item.view);
	$.tdgMain.add(tmpView);
	
	setTimeout(function(){
		//Ti.API.info('Item Height is:' + tmpView.size.height);
		
		var frame = Ti.UI.createView({
			width:Ti.UI.FILL,
			height:tmpView.size.height,
			backgroundColor:itemsOptions.backgroundColor,
			bottom:space,
			borderColor:itemsOptions.borderColor,
			borderRadius:itemsOptions.borderRadius,
			borderWidth:itemsOptions.borderWidth
		});
		
		var overlay = Ti.UI.createView({
			width:Ti.UI.FILL,
			height:Ti.UI.FILL,
			backgroundColor:'transparent',
			zIndex:1,
			data:item.data
		});
		
		var gridElement = item.view;
		
		//ADD CUSTOM FUNCTION ONCE AN ITEM IS CLICKED
		overlay.addEventListener('click',function(e){
			onItemClick(e);
		});
				 
		frame.add(gridElement);
		frame.add(overlay);
		
		$.tdgMain.remove(tmpView);
		tmpView = null;
		
		$.tdgScrollView.children[currentCol].add(frame);
		currentCol++;
		
		if(currentCol == colViews.length){
			currentCol=0;
		}	
	},delayTime);
};

var clearGrid = function(){
	Ti.API.info('TiDynamicGrid -> clearGrid ran.');
	$.tdgScrollView.removeAllChildren();
};

var setOnItemClick = function(fnt){
	onItemClick = fnt || function(){Ti.API.info('TiDynamicGrid -> onItemClick is not defined.');};
};

exports.init=init;
exports.addGridItems = addGridItems;
exports.clearGrid = clearGrid;
exports.addGridItem = addGridItem;
exports.setOnItemClick = setOnItemClick;
