import app from '../../app';

app.component("items-needed", {
    template: `
      <ul>
        <li ng-repeat="item in $ctrlItemsNeeded.itemsNeeded">{{ item.name }}</li>
      </ul>
    `,
    controller: function() {
      this.itemsNeeded = [
        { id: 11, name: 'Mr. Nice' }
      ];

    },
    controllerAs: "$ctrlItemsNeeded"
  });