Template.configureLoginServiceDialogForQq.isLocalhost = function () {
  return /localhost|127.0.0.1/.test(Meteor.absoluteUrl());
};

Template.configureLoginServiceDialogForQq.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForQq.fields = function () {
  return [{
    property: 'clientId',
    label: 'App ID'
  }, {
    property: 'secret',
    label: 'App Key'
  }];
}; 