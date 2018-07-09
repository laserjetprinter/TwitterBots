//rRate.js
console.log('The bot has started');

//connect to your twitter dev account
var Twit = require('twit');
var T = new Twit({
  consumer_key: '//PUT CONSUMER KEY HERE',
  consumer_secret: '//PUT CONSUMER SECRET HERE' ,
  access_token: '//PUT ACCESS TOKEN HERE' ,
  access_token_secret: '//PUT ACCESS TOKEN SECRET HERE', 
  timeout_ms: 60*1000,
});

//twitter user to track
var userID = '//PUT USER ID HERE';

//opens a stream, which tracks the actions of the targeted user
var stream = T.stream('statuses/filter', { follow: ( userID ) });

  stream.on('tweet', function (tweet) {
    
    //if the tweet's user id is the same as the targeted user
    if (tweet.user.id == userID) {
      
      console.log("Tweet matches targeted user");
     
      //Set of random phrases and adjectives
      var rBeginning = ['Uhhhhhh....', 'This is so ', 'Honestly, I am shook at how ',
        'Okay, now this tweet really made me feel ', 'Why does this make me think of how ',
        'Really thought provoking, but a little too ', 'When I saw this I literally felt ',
        'I mean, it is a tweet...kinda '];
      var rAdj = ['nasty', 'disgust', 'adorable', 'immature', 'undeveloped', 'dazzling',
       'emotional', 'cute', 'swaggie', 'horrible', 'awful', 'nauseous', '...hmm..awkward?',
       'really really really weird...but tasteful', 'straight booty'];
      var rRate = ['1/10', '2.3/10', '9/10', '1.298/10', '4/10', '5.8/10','3.3/10','7.9/10',
       '4.8/10','8.4/10','9.2/10','2.22/10','6.3/10','5.3/10','0.9/10','0.4/10','5/10','0.001/10',
        '10/10','5.5/10','6.7/10','2/10',];

      var rNumBeg = Math.floor(Math.random()*rBeginning.length);
      var rNumAdj = Math.floor(Math.random()*rAdj.length);
      var rNumRate = Math.floor(Math.random()*rRate.length);

      //Formulates a tweet
      var toTweet = rBeginning[rNumBeg] + rAdj[rNumAdj] + ". This tweet is a " + rRate[rNumRate]
        + "\n" + "\n"+ " \"" + tweet.text + "\"" + " - @" + tweet.user.screen_name;

      //passes the tweet into function to update tweet
      tweetIt(toTweet);
    } else {

      //otherwise we ignore the tweet
      console.log(tweet.user.id + " - " + tweet.user.screen_name)
    } //end of else
  }); //end of stream

function tweetIt(txt){
  var tweet = {
      status: txt
  } //end of var

  //posts tweet, and returns results to tweeted method
  T.post('statuses/update',tweet,tweeted);
}//end of tweetIt

function tweeted(err, data, response){

  if(err){
    console.log(err);
  } else{
    console.log("Tweet has been posted.");
  }//end of else
}//end of tweeted