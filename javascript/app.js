/**
 * Created by davem on 27/11/2016.
 */
'use strict';
var learnjavascript={};

learnjavascript.showView = function(hash){
    var questionView =  $('<div class="question-view">').text('Arriving Soon!');
      $('.view-container').empty().append(questionView);
    };

