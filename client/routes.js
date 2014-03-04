Router.configure({
  layoutTemplate: 'layout',
  invoiceTempalte: 'invoice',
  invoiceNewTemplate: 'invoiceNew'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('invoiceNew',{
    path: '/invoice/new',
    template: 'invoiceNew'
  })

  this.route('invoice',{
    path: '/invoice',
    yieldTemplates: {
      'invoiceNewTemplate': { to: 'new' }
    }
  })
});

