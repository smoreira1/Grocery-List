import app from '../../app';

app.component("items-purchased", {
    template: `
      <ul>
        <li ng-repeat="item in $ctrlItemsPurchased.itemsPurchased">{{ item.name }}</li>
      </ul>
    `,
    controller: function() {
      this.itemsPurchased = [
        { id: 11, name: 'Mr. Nice' },
      ];
    },
    controllerAs: "$ctrlItemsPurchased"
  });