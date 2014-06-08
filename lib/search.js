var version = 'NIV'; // put this in the settings later

var OLD_TESTAMENT = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua,',
  'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings',
  '1 Chronicles', '2 Chronicles', 'Ezra' 'Nehemiah', 'Esther', 'Job',
  'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah',
  'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
  'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah',
  'Haggai', 'Zechariah', 'Malachi'
];
var NEW_TESTAMENT = [
  'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans',
  '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians',
  '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon',
  'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John',
  '3 John', 'Jude', 'Revalation'
];

var form = document.forms[0],
    BASE_URL = 'http://biblegateway.com/passage/?search=';

// Populate Book list
form.book.insertAdjacentHTML('beforeend', '<option disabled name="book" value="">(Old Testament)</option>');
for(var i in OLD_TESTAMENT){
  if(OLD_TESTAMENT.hasOwnProperty(i)){
    form.book.insertAdjacentHTML('beforeend', "<option name='book' value='"+book+"'>"+book+"</option>");
  }
}
form.book.insertAdjacentHTML('beforeend', '<option disabled name="book" value="">(New Testament)</option>');
for(var i in NEW_TESTAMENT){
  if(NEW_TESTAMENT.hasOwnProperty(i)){
    form.book.insertAdjacentHTML('beforeend', "<option name='book' value='"+book+"'>"+book+"</option>");
  }
}

form.addEventListener('submit', function(){
  var book = form.book.value,
      chapterVerse = form.chapterVerse.value;
  var fields = [book, chapterVerse];
  
  // Make sure no fields are empty
  for(var i in fields){
    if(fields.hasOwnProperty(i)){
      if(!i) return false;
    }
  }

  var params = book + '+' + chapterVerse + '&version=' + version;
  var url = BASE_URL + params;

  window.open(url);
});
