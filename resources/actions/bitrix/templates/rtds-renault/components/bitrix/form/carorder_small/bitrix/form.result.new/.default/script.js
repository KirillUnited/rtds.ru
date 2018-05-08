BX.namespace('BX.MIT.Mask');
(function() {
    "use strict";
    BX.MIT.Mask = {
        url : '/js/mask/base',
        country: 'ru',
        node : null,
        init: function(node) {
            this.node = BX(node);

            var dataNode = this.node.nextElementSibling;
            new BXMaskedPhone({
                url: this.url,
                country: this.country,
                'maskedInput': {
                    input: this.node,
                    dataInput: dataNode
                },
                //'flagNode': flagNode,
                //'flagSize': 24
            });
        }
    }
})(window);