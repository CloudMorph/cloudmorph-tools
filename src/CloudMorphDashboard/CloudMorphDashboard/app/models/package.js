/// <reference path="../../Scripts/underscore.js" />

define(["app/app", "Backbone", "underscore"], function (DashboardApp, Backbone, _) {

    DashboardApp.Models.Package = Backbone.Model.extend({
        urlRoot: '/svc/packages',

        defaults: {
            "Id": ""
        },

        idAttribute: "Id",

        initialize: function (attributes, arguments) {
            if (_.isUndefined(attributes)) {
                this.cid = this.get("Id");
            }
            else {
                this.cid = attributes.Id;
            }
        }
    });

})