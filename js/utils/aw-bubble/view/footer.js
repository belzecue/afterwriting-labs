define(function(require) {

    var Protoplast = require('aw-bubble/vendor/protoplast'),
        FooterPresenter = require('aw-bubble/presenter/footer-presenter');

    var Footer = Protoplast.Component.extend({

        $meta: {
            presenter: FooterPresenter
        },
        
        html: '<div class="footer"></div>',

        content: null,

        init: function() {
            Protoplast.utils.bind(this, 'content', this.render.bind(this));
        },

        render: function() {
            this.root.innerHTML = this.content
        }
        
    });

    return Footer;
});