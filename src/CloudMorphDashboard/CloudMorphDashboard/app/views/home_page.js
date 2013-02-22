define(["jquery", "app/app", "Support", "Preloader"], function ($, DashboardApp, Support, Preloader) {

    DashboardApp.Views.HomePage = Support.CompositeView.extend({
        initialize: function () {
            console.log("Initializing HomePage view");
            _.bindAll(this, 'render');
        },
        render: function () {
            console.log("Rendering HomePage view");
            this.$el.html(Preloader.templates['home/index']);
            return this;
        }
    });

})