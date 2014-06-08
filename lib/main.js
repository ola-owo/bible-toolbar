const {Frame} = require('sdk/ui/frame');
const {Tabs} = require('sdk/tabs');
const {Toolbar} = require('sdk/ui/toolbar');

console.log(typeof(Frame));
console.log(typeof(Tabs));
console.log(typeof(Toolbar));
var frame = new Frame({
  url: './frame.html'
});

var toolbar = Toolbar({
  name: 'bible-toolbar',
  title: 'Bible Toolbar',
  items: [frame]
});