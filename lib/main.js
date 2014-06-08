var ActionButton = require('sdk/ui/button/action'),
    frame = require('sdk/ui/frame'),
    Tabs = require('sdk/tabs'),
    Toolbar = require('sdk/ui/toolbar');

var myFrame = new frame({
  url: './frame.html'
});

var toolbar = Toolbar({
  title: 'Bible Toolbar',
  items: [myFrame]
});