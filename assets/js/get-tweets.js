(function (){
  fetch('http://localhost:5000/tweets')
  .then(result => result.json())
  .then(json => {
    let tweets = json.statuses;
    console.log(tweets);

    let widgetContent = document.querySelector('.twitter-wrap');

    let tweetsLength = tweets.length;
    // for(var i = 0; i < tweetsLength; i++){
    //   addTweets(widgetContent,tweets,i);
    // }
    // let first = tweets.splice(0,2);
    // for(let i = 0; i < first.length; i++){
    //   addTweets(widgetContent, first, i);
    // }
    let j = 0;
    for(let i = 0; i < 2; i++){
      addTweets(widgetContent, tweets, j);
      j++;
    }

    let twitterContent = document.querySelectorAll('.twitter-wrap .widget-content');


    let tweetsInterval = setInterval(function(){
      if(j > tweetsLength-1){
        j=0;
      }
      // let pair = tweets.splice(0,2);
      // let pairLength = pair.length;

      widgetContent.innerHTML = '';
      // for(let i = 0; i < pairLength; i++){
      //   addTweets(widgetContent,pair,i)
      // }
      for(let i = 0; i < 2; i++){
        addTweets(widgetContent,tweets,j)
        j++;
      }
      if(tweetsLength < 1){
        console.log('Done reading');
        clearInterval(tweetsInterval);
      }
    },5000);
  })

  function removeTweet(elementId) {
      // Removes an element from the document
      var element = document.getElementById(elementId);
      element.parentNode.removeChild(element);
  }

  function addTweets(parent, tweets, counter) {
    // Creating elements for twitter widget
    let p = document.createElement('P');
    let br = document.createElement('BR');
    let twitImg = document.createElement('IMG');
    let span = document.createElement('SPAN');

    // Adding classes and content
    p.classList.add('widget-content');
    span.classList.add('twitter-id');
    twitImg.src = tweets[counter].user.profile_image_url;
    let twitUser = document.createTextNode(`@ ${tweets[counter].user.screen_name}`);
    let twitText = document.createTextNode(` ${tweets[counter].text}`);

    span.appendChild(twitUser);
    p.appendChild(twitImg);
    p.appendChild(span);
    p.appendChild(br);
    p.appendChild(twitText);

    parent.appendChild(p);
  }
})();
