(function () {

    "use strict";

    require.config({
        baseUrl: 'js',

        urlArgs: "bust=" +  (new Date()).getTime(),	//cache-busting for development

        paths: {
            app: '../app',
            packageViews: '../app/views/packages',
            jquery: '../scripts/jquery-1.7.2',
            underscore: '../scripts/underscore',
            Backbone: '../scripts/backbone',
            Handlebars: '../scripts/handlebars',
            Support: "../js/backbone.support"
        },
        shim: {
            underscore: {
                exports: '_'
            },
            Backbone: {
                deps: ["underscore", "jquery"],
                exports: "Backbone"
            },
            Handlebars: {
                exports: function () {
                    return this.Handlebars;
                }
            },
            Preloader: {
                deps: ["Handlebars"],
                exports: function () {
                    return this.Preloader;
                }
            },
            Support: {
                deps: ["underscore", "Backbone"],
                exports: function () {
                    return this.Support;
                }
            },
            // 'Packages': ["app/app"] //, "app/views/packages/packages_index", "app/views/packages/package_info"]
        }
    });

    require(["jquery", "app/app", "Preloader",
        "app/collections/packages",
        "app/routers/main",
        "app/routers/packages"
    ], function ($, DashboardApp, Preloader) {

        $(function () {

            DashboardApp.initialize = function (data) {
                var self = this;
                console.log("Preloading templates...");
                Preloader.loadTemplates(['home/index', 'packages/index', 'packages/package_list', 'packages/package_list_item', 'packages/package_info', 'packages/form_fields'], function () {
                    //self.packages = new DashboardApp.Collections.Contacts(JSON.parse($('#bootstrap-data').html()));
                    self.packages = new DashboardApp.Collections.Packages();
                    self.packages.fetch();
                    //self.router = new DashboardApp.Routers.Packages({
                    new DashboardApp.Routers.Main();
                    new DashboardApp.Routers.Packages({
                        collection: self.packages
                    });
                    if (Backbone.history != undefined) {
                        if (!Backbone.history.started) {
                            console.log("Staring router");
                            Backbone.history.start();
                        }
                    }
                });
            }

            console.log("Initializing app");
            DashboardApp.initialize();
        });

    });

})();