app.Models.DeviceClass = Backbone.Model.extend({
    urlRoot: function () {
         return app.restEndpoint + "/device/class";
    },
    defaults: { equimpent: [], isPermanent: false, version: 1 },
    getEquipments: function (success, error) {
        if (this.equipmentColl != null) {
            if(_.isFunction(success))
                success(this.equipmentColl);
        }
        else {
            var that = this;
            this.equipmentColl = new app.Models.EquipmentsCollection({},{ deviceClass: this });
            this.equipmentColl.fetch({ success: function (coll, response) {
                if (_.isFunction(success))
                    success(coll);
            }
            });
        }
        return this.equipmentColl;
    }
});

app.Models.DeviceClassesCollection = Backbone.Collection.extend({
    url: function () {
        return app.restEndpoint + "/device/class";
    },
    model: app.Models.DeviceClass
});
