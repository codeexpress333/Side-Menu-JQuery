//Create Function

var MainMenu = (function() {
    var MainMenu = function(config) {
        config = config || {};
        this.toggleBtn = $(config.toggleBtn);
        this.menu = $(config.menu);
        this.close = $(config.close);

        this.init();
        config = null;
    };

    // Public interface
    MainMenu.prototype = {
        constructor: MainMenu,
        init: function() {
            this.eventManager();
        },
        eventManager: function() {
            //Event
            this.toggleBtn.on('click.openMenu', onButtonClickHandler.bind(this));
            this.close.on('click.closeMenu', onCloseClickHandler.bind(this));
        }
    };


    // Private interface
    function onButtonClickHandler(menu, evt) {
        if (!this.menu.hasClass('open')) {
            this.menu.addClass('open');
        };

    }

    function onCloseClickHandler(evt) {
        this.menu.removeClass('open')
    }


    function onDocumentClickHandler(evt) {
        var $target = $(evt.target);

        if (!$target.closest(this.menuForm).length && !$target.closest(this.menuContent).length && this.menu.hasClass('open')) {
            this.menu.removeClass('open')
        }
    }

    return MainMenu;

})();

$(document).ready(function() {
    var mainMenu = new MainMenu({
        menu: '.menu',
        toggleBtn: '.menu-btn',
        close: '.menu-close'
    });
});

