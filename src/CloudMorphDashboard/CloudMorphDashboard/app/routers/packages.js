/// <reference path="../../js/backbone.support.js" />

define(["Support", "app/app", "packageViews/packages_index", "packageViews/package_info", "packageViews/new_package"], function (Support, DashboardApp) {

    DashboardApp.Routers.Packages = Support.SwappingRouter.extend({
        routes: {
            //'': "index",
            'packages': "index",
            //'packages/new': "new",
            'packages/:id': "show",
            'packages/:id/edit': "edit"
        },
        initialize: function (options) {
            console.log("Initializing Packages router");
            this.el = $('div#app-content');
            this.collection = options.collection;
        },
        index: function () {
            console.log("Invoking index route");
            var view = new DashboardApp.Views.PackagesIndex({ collection: this.collection });
            this.swap(view);
        },
        show: function (id) {
            console.log("Invoking show route");
            var package = this.collection.getByCid(id) || new DashboardApp.Models.Package();
            var self = this;
            package.fetch({
                success: function () {
                    var view = new DashboardApp.Views.PackageInfo({ model: package, collection: self.collection });
                    self.swap(view);
                },
                error: function (e) {
                    console.error(e);
                }
            });
        },
        /*    new: function () {
                console.log("Invoking new route");
                var view = new DashboardApp.Views.NewPackage({ collection: this.collection });
                this.swap(view);
            }, */
        edit: function (id) {
            console.log("Invoking edit route");
            var package = this.collection.getByCid(id) || new DashboardApp.Models.Package({ Id: id });
            var self = this;
            package.fetch({
                success: function () {
                    var view = new DashboardApp.Views.NewPackage({ collection: self.collection, model: package });
                    self.swap(view);
                },
                error: function (e) {
                    console.error(e);
                }
            });
        }
    });

})