app.component("itemsNeeded", {
    templateUrl: "components/items-needed/items-needed.component.html",
    controller: function () {
        this.itemsNeeded = [];

        let createItemNeeded = function (item){
            this.itemsNeeded.push(item);
        }

        let updateItemNeeded = function(item){

        }

        let deleteItemNeeded = function(item){

        }
        // This will move our list of needed items to a list of completed items.
        let purchaseItemsNeeded = function(){

        }

    },
    controllerAs: "$ctrlItemsNeeded"
});
