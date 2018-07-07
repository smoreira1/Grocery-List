app.component("itemsPurchased", {
    templateUrl: "components/items-purchased/items-purchased.component.html",
    controller: function () {
        this.itemsPurchased = [
            { id: 11, name: 'Mr. Nice' },
        ];

        let removePurchasedItem = function(){
        }
    },
    controllerAs: "$ctrlItemsPurchased"
});
