var app = require('express')();
var Twit = require('twit');
var Flickr = require("flickrapi");
var cors = require('cors');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var p = path.resolve(__dirname,'emails.json');
// const file = fs.createWriteStream(p);

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



function twitterDetails() {
  var config = {
    consumer_key: 'A6wLf1blEAtf8T183JLHToIZN',
    consumer_secret:'5ljG3mf8lVlsfFsXDL9DlrMkH9m2bNQwvryX8F3HoLuA4TpLLr',
    access_token:'798395586072444930-UFrYRodT65QOeMbNhQuqwQwcrkDYax1',
    access_token_secret:'2uQlUUCkkdcgJoTTEs1dXHTRJkO0ENggkTnuJFZafNrw0'
  };

  var T = new Twit(config);

  var params = {
    q: 'pubg',
    count:100
  }

  return {config, T, params}
}

// Write JSON file for emails


var getTwits = () => new Promise(function(resolve,reject){
  var tweet = twitterDetails();
  tweet.T.get('search/tweets', tweet.params, function(err, data, response){
    resolve(data);
})
});

app.get('/tweets', function(req,res){
  getTwits().then(tweets => {
    res.send(tweets);
  });
  // setInterval(function(){getTwits.then(tweets => res.send(twehttp://ets))},1480000);
});


app.get('/images', function(req,res){
  var flickrOptions = {
      api_key: "066c8001d0e10ddbbd47c9ece7fe5c6b",
      secret: "89e03ab0c754cce9"
    };

Flickr.tokenOnly(flickrOptions, function(error, flickr) {
  flickr.people.getPhotos({
  api_key:  "066c8001d0e10ddbbd47c9ece7fe5c6b",
  user_id: 'Flickr',
  page: 1,
  per_page: 6
}, function(err, result) {
  /*
    This will give public results only, even if we used
    Flickr.authenticate(), because the function does not
    *require* authentication to run. It just runs with
    fewer permissions.
  */
  res.send(result);
});
});
})

var isEmpty = function(obj) {
  return Object.keys(obj).length === 0;
}
//
// fs.readFile('message.txt', function(err,data){
//   console.log(isEmpty(data));
//   // data.parse();
//   // console.log(data.length);
// })

if(!(fs.existsSync(path.resolve(__dirname,'emails.json')))) {
  fs.writeFile('emails.json','', (err) => {
    if (err) throw err;
    console.log('File created!');
  });
}

app.post('/emails', function(req,res){
  var content = JSON.stringify(req.body);
  fs.readFile('emails.json', function(err,data){
    if(isEmpty(data)){
      fs.writeFile('emails.json', content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    } else {
      var json = JSON.parse(data);
      json.push(JSON.parse(content)[0]);
      fs.writeFile('emails.json', JSON.stringify(json), function(){
        console.log('File updated!');
      });
    }
  })
})

function sc(el){
  file.write(el.toString());
  console.log('Done writing file!');
  file.end();
}

app.listen(5000, function(){
  console.log('Server started');
})
