(function(global) {
  'use strict';

  var MessageDispatcher = function() {
  };

  MessageDispatcher.prototype.constructor = MessageDispatcher;

  MessageDispatcher.prototype.dispatch = function(data) {
    var dataArray, messages;

    dataArray = data.toString().split('\n');

    messages = dataArray.filter(function(elem) {
      return elem === 0 || elem;
    });

    return messages.map(function(message) {
      var msg = JSON.parse(message);

      return {
        callbackId: msg.callback_id,
        data: msg.system_browser_client
      };
    });
  };

  global.app.service('messageDispatcher', [MessageDispatcher]);
})(window.global);
