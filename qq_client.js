(function () {
  Meteor.loginWithQq = function (callback) {
    var config = Accounts.configuration.findOne({
      service: 'qq'
    });
    if (!config) {
      callback && callback(new Accounts.ConfigError("Service not configured"));
      return;
    }

    var state = Meteor.uuid();

    var scope = ['get_user_info'];
    if (Accounts.qq._options && Accounts.qq._options.scope) {
      scope = _.union(scope, Accounts.qq._options.scope);
    }
    var flat_scope = _.map(scope, encodeURIComponent).join(',');

    var loginUrl = 
          'https://graph.qq.com/oauth2.0/authorize' + 
          '?response_type=code' + 
          '&client_id=' + config.clientId + 
          '&scope=' + flat_scope + 
          '&redirect_uri=' + Meteor.absoluteUrl('_oauth/qq?close') + 
          '&state=' + state;

    Accounts.oauth.initiateLogin(state, loginUrl);
  };

})();
