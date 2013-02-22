/// <reference path="../../Scripts/backbone.js" />

// BackBone Live Collections - http://weblog.bocoup.com/backbone-live-collections/

define(["app/app", "Backbone", "app/models/package"], function (DashboardApp, Backbone) {

    DashboardApp.Collections.Packages = Backbone.Collection.extend({
        model: DashboardApp.Models.Package,
        url: '/svc/packages/',
        comparator: function (package) {
            return package.get('Id');
        },
        add: function (models, options) {
            var newModels = [];
            _.each(models, function (model) {
                if (_.isUndefined(this.get(model.Id))) {
                    newModels.push(model);
                }
            }, this);
            return Backbone.Collection.prototype.add.call(this, newModels, options);
        }
    });

})