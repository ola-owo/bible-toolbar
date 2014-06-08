var ActionButton = require('skd/ui/button/action'),
    Frame = require('sdk/ui/frame'),
    Tabs = require('sdk/tabs'),
    Toolbar = require('sdk/ui/toolbar');

var frame = new Frame({
  url: './frame.html'
});

var toolbar = Toolbar({
  title: 'Bible Toolbar',
  items: [frame]
});