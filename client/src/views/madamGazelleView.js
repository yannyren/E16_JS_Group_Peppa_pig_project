const AjaxRequest = require('../services/ajax_request.js');
// const requestPaPaAPI = new AjaxRequest("http://localhost:3000/api/papapig");
const requestGazelleAPI = new AjaxRequest("http://localhost:3000/api/madamgazelle");

const MadamGazelleView = function() {

}

MadamGazelleView.prototype.render = function(video) {

    requestGazelleAPI.get(function(allVideos) {
      console.log(allVideos);
      // const ul = document.querySelector('#quotes');
      //   const li = document.createElement('li');
      //   const text = document.createElement('p');
      //   text.innerText = `${quote.name}: "${quote.quote}"`;
      //   li.appendChild(text);
      //   ul.appendChild(li);
    });

}

module.exports = MadamGazelleView;