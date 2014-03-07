

Template.home.events({
  'click .clicky': function(event, template) {
    template.find('.clicky').innerHTML='Clicked.';
  }
});