app.Models.Network = Backbone.Model.extend({
    urlRoot: function () { return app.restEndpoint + "/network"; },
    defaults: { devices: [], key: "" }
});

app.Models.NetworksCollection = Backbone.Collection.extend({
    url: function () { return app.restEndpoint + "/network"; },
    model: app.Models.Network
});
