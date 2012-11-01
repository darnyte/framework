app.Models.Device = Backbone.Model.extend({
    urlRoot: function () {
         return app.restEndpoint + "/device";
    }
});

app.Models.DevicesCollection = Backbone.Collection.extend({
    url: function () {
         return app.restEndpoint + "/device";
    },
    model: app.Models.Device
});
