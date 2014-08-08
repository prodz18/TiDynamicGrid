
var items = [];

//CUSTOM FUNCTION TO DEFINE WHAT HAPPENS WHEN AN ITEM IN THE GRID IS CLICKED
var showGridItemInfo = function(e){
	alert('Title is: ' + e.source.data.title + '. Image is: ' + e.source.data.image);
};

var delay = (OS_ANDROID) ? 1000:500;

$.tdg.init({
	columns:3,
	space:5,
	delayTime:delay,
	gridBackgroundColor:'#e1e1e1',
	itemBackgroundColor:'#fff',
	itemBorderColor:'transparent',
	itemBorderWidth:0,
	itemBorderRadius:5,
	onItemClick: showGridItemInfo
});

function createSampleData(){
	
	items = [];
	
	var sample_data = [
		{title:'Sample 1', image:'http://www.lorempixel.com/700/600/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 2', image:'http://www.lorempixel.com/900/1200/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 3', image:'http://www.lorempixel.com/400/300/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 4', image:'http://www.lorempixel.com/600/600/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 5', image:'http://www.lorempixel.com/400/310/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 6', image:'http://www.lorempixel.com/410/300/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 7', image:'http://www.lorempixel.com/500/300/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 8', image:'http://www.lorempixel.com/300/300/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 9', image:'http://www.lorempixel.com/450/320/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 10', image:'http://www.lorempixel.com/523/424/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 11', image:'http://www.lorempixel.com/610/320/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 12', image:'http://www.lorempixel.com/450/450/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 13', image:'http://www.lorempixel.com/620/420/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'Sample 14', image:'http://www.lorempixel.com/710/410/', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
	];
	
	if(OS_ANDROID){
		sample_data = [
			{title:'sample 1', image:'http://dummyimage.com/700x600/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 2', image:'http://dummyimage.com/900x1200/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 3', image:'http://dummyimage.com/400x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 4', image:'http://dummyimage.com/600x600/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 5', image:'http://dummyimage.com/400x310/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 6', image:'http://dummyimage.com/500x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 7', image:'http://dummyimage.com/300x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 8', image:'http://dummyimage.com/450x320/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 9', image:'http://dummyimage.com/523x424/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 10', image:'http://dummyimage.com/610x320/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 11', image:'http://dummyimage.com/450x450x/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 12', image:'http://dummyimage.com/620x420/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 13', image:'http://dummyimage.com/710x410/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
			{title:'sample 14', image:'http://dummyimage.com/500x500/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
		];
	}
	
	for (var x=0;x<sample_data.length;x++){
	
		//CREATES A VIEW WITH OUR CUSTOM LAYOUT
		var view = Alloy.createController('item_layout',{
			image:sample_data[x].image,
			title:sample_data[x].title,
			subtitle:sample_data[x].subtitle
		}).getView();
		
		//THIS IS THE DATA THAT WE WANT AVAILABLE FOR THIS ITEM WHEN onItemClick OCCURS
		var values = {
			title: sample_data[x].title,
			image: sample_data[x].image
		};
		
		//NOW WE PUSH TO THE ARRAY THE VIEW AND THE DATA
		items.push({
			view: view,
			data: values
		});
	}
	$.tdg.addGridItems(items);
};
createSampleData();

// EXAMPLE OF HOW TO USE TIFLEXIGRID IN iOS & ANDROID
// WITH DIFFERENT LAYOUTS IN ORIENTATION CHANGES
Ti.Gesture.addEventListener('orientationchange', function(e){

    var orientation = e.orientation;
    var nColumn,nSpace;
    
    if(OS_ANDROID){
    	if (orientation < 1 || orientation > 4){
	    	return;
	    }
	    else if (orientation == 1){
	    	nColumn = 3;
			nSpace = 5;
	    }
	    else if (orientation == 2) {
	    	nColumn = 5;
			nSpace = 7;
	    }
    }
    else{
    	if (orientation < 1 || orientation > 4){
	    	return;
	    }
		else if (orientation == 1 || orientation == 2){
			nColumn = 3;
			nSpace = 5;
	    }
	    else if (orientation == 3 || orientation == 4) {
	    	nColumn = 5;
			nSpace = 7;
	    }
    }	
	
    $.tdg.clearGrid();
    $.tdg.init({
		columns:nColumn,
		space:nSpace,
		delayTime:delay,
		gridBackgroundColor:'#e1e1e1',
		itemHeightDelta: 0,
		itemBackgroundColor:'#fff',
		itemBorderColor:'transparent',
		itemBorderWidth:0,
		itemBorderRadius:5,
		onItemClick: showGridItemInfo
	});
    createSampleData();  
});

$.win.open();
