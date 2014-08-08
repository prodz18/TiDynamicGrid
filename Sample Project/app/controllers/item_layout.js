var args = arguments[0]||{};

var the_image = args.image || '';
var the_title = args.title || '';
var the_subtitle = args.subtitle || '';

$.thumb.image = the_image;
$.title.text = the_title;
$.subtitle.text = the_subtitle;