![logo](http://www.lineartpr.com/img/github/tdg_logo.png)
================================

An Alloy Widget for creating a dynamic grid layout (like Pinterest) in iOS and Android. It works on phones and tablets in any orientation. Create your own grid layout item and assign it to TiDynamicGrid. You can set different parameters depending the orientations, each item could have it's own layout, add a custom function when an item is clicked, add a single item or group of items, clear the grid, etc. Please refer to the sample project to see it in action.

This widget is based on [TiFlexiGrid](http://www.github.com/pablorr18/TiFlexiGrid), but with some changes. If you want a more standard grid layout, check out [TiFlexiGrid](http://www.github.com/pablorr18/TiFlexiGrid).

If anyone have some ideas, requests, contributions or want to show how you are using the widget , contact me at [@pablorr18](http://twitter.com/pablorr18).

### Changelog

**1.0** 
* Initial Release

### Screenshots

![iPhone](http://www.lineartpr.com/img/github/tdg_iphone.jpg)

![iPad](http://www.lineartpr.com/img/github/tdg_ipad.jpg)

![Android Handset](http://www.lineartpr.com/img/github/tdg_android_phone.jpg)

![Android Tablet](http://www.lineartpr.com/img/github/tdg_android_tablet.jpg)


### How to use

First, add the widget to the dependencies list in your Alloy Project (config.json):

```javascript
"dependencies": {
	"com.prodz.tidynamicgrid":"1.0"
}
```

Add the widget to a window or view:

```xml
<Alloy>
	<Window id="win">
		<Require type="widget" src="com.prodz.tidynamicgrid" id="tdg"/>
	</Window>		
</Alloy>
```

Now, initialize the widget:

```javascript
$.tdg.init({
	columns:3,
	space:5,
	delayTime:1000,
	gridBackgroundColor:'#e1e1e1',
	itemBackgroundColor:'#fff',
	itemBorderColor:'transparent',
	itemBorderWidth:0,
	itemBorderRadius:5
});

```

Now, this is the important part. Create an empty array. In this array, each object should contain the following properties: "view" and "data". The "view" is our custom grid item (it should be a view containing all the elements or layout that you want). The "data" is the information that we want to be available once we click the item. Once we have all our items ready in the array, add it to the grid. For example:

```javascript

var items = [];
	
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

for (var x=0; x < sample_data.length; x++){
	
	//CREATES A VIEW WITH OUR CUSTOM LAYOUT
	var view = Alloy.createController('YOUR_CUSTOM_LAYOUT_CONTROLLER').getView();
		
	//THIS IS THE DATA THAT WE WANT AVAILABLE FOR THIS ITEM WHEN onItemClick OCCURS
	var values = {
		title: sample_data[x].title,
		image: sample_data[x].image,
		subtitle:sample_data[x].subtitle
	};
		
	//NOW WE PUSH TO THE ARRAY THE VIEW AND THE DATA
	items.push({
		view: view,
		data: values
	});
};
	
//ADD ALL THE ITEMS TO THE GRID
$.tdg.addGridItems(items);

```

Notice that in the "**data**" property of the items we added the variable "**values**", which contains "**title**", "**image**" and  "**subtitle**". Now, we can get this data on  "**onItemClick**" by doing this:

```javascript
$.tdg.setOnItemClick(function(e){
	alert('Title is: ' + e.source.data.title + '. Image is: ' + e.source.data.image);
});
```

Of course, you can add whatever you want. For example, could add "**url**" to "**values**" and you could get it like:

```javascript
alert('URL is: ' + e.source.data.url);
```
Please refer to the Sample included in the project to see it in action.


### Methods

**init(parameters)** - initialize the grid layout with the following parameters:
* columns - number of columns
* space - space between each element
* data - array with objects (view and data)
* delayTime - amount of time to let the app render each item correctly (especially on Android). Default is 500ms.
* gridBackgroundColor - background color for the grid view
* itemBackgroundColor
* itemBorderColor
* itemBorderWidth
* itemBorderRadius
* onItemClick - function; fire when an item from the grid is clicked

**addGridItems(array)** - add a group of items to the grid. Each object in the array should contains:
* view - a view with the custom layout
* data - the data we want available when an item is clicked

**addGridItem(object)** - add a single item to the grid. The object should contains:
* view - a view with the custom layout
* data - the data we want available when an item is clicked

**clearGrid()** - clears all the elements of the grid. 

**setOnItemClick(function)** - set the event that will trigger once an item from the grid is clicked


### Note for Android

The widget uses anydensity = true and system units as dp (now default in the latest Titanium SDK) in the tiapp.xml. 
 
 You can use something like this in your tiapp.xml:
```xml
<property name="ti.ui.defaultunit" type="string">dp</property>
  <android xmlns:android="http://schemas.android.com/apk/res/android">
        <manifest android:versionCode="1" android:versionName="1.0">
        <supports-screens android:anyDensity="true"
            android:largeScreens="true" android:normalScreens="true"
            android:smallScreens="false" android:xlargeScreens="true"/>
        </manifest>
   </android>
```
See the tiapp.xml in the sample project for more details. 

To understand it better, please refer to the sample project included.

###Regarding Incorrect Layout Rendering
If for any reason the layout doesn't render correctly (especially on Android), play with the **delayTime** property and try to set a higher time. This could happen for many reasons, like: slow connection, images too big, slow processes, etc. I'll be working on a better way to approach this.

###License
The MIT License (MIT)

Copyright (c) 2014 Pablo Rodriguez Ruiz, [@pablorr18](http://twitter.com/pablorr18) 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.