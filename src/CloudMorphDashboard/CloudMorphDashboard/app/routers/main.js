/// <reference path="../../Scripts/underscore.js" />

define(["underscore", "app/app", "Support", "app/views/home_page"], function (_, DashboardApp, Support) {

    DashboardApp.Routers.Main = Support.SwappingRouter.extend({
        routes: {
            // general routes for cross-app functionality
            '': "index",

            // module-specific subroutes:
            // invoke the proper module and delegate to the module's 
            // own SubRoute for handling the rest of the URL 

            // MODULE-SPECIFIC SUBROUTES IN BACKBONE
            // http://www.geekdave.com/?p=13
            // 'packages/': "invokePackagesModule",
        },
        initialize: function (options) {
            console.log("Initializing Main router");
            this.el = $('div#app-content');
            if (! _.isUndefined(options)) {
                this.collection = options.collection;
            }
        },
        index: function () {
            console.log("Invoking home page route");
            var view = new DashboardApp.Views.HomePage();
            this.swap(view);
        },

        invokePackagesModule: function (subroute) {
            if (!DashboardApp.Routers.Packages) {
                DashboardApp.Routers.Packages = new DashboardApp.Packages.Router("packages/");
            }
        }
    });

})
