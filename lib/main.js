var {ActionButton} = require('sdk/ui/button/action'),
    {Frame_} = require('sdk/ui/frame'),
    {Tabs} = require('sdk/tabs'),
    {Toolbar} = require('sdk/ui/toolbar');

var frame = new Frame_({
  url: './frame.html'
});

var toolbar = Toolbar({
  title: 'Bible Toolbar',
  items: [myFrame]
});