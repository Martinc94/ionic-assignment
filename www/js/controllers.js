angular.module('calorific.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Breakfasts', 'Lunches', 'Dinners', 'Drinks'];
})

.controller('DishesCtrl', function($scope, $stateParams) {
  categories = ['Breakfasts', 'Lunches', 'Dinners', 'Drinks'];

  dishes = [
    [
      "Cornflakes	(390 calories per 100g)",
      "Porridge		(368 calories per 100g)",
      "Weetabix 	(338 calories per 100g)",
      "Full Irish Breakfast (687 calories per 300g)",
    ],
    [
      "Ham and Cheese Sandwich 	(267 calories per 100g)",
      "BLT Sandwich 	(246 calories per 100g)",
      "Vegetable soup	(42 calories per 100g)",
      "Chocolate Bar 	(530 calories per 100g)",
      "Grilled Cheese 	(239 calories per 100g)",
      "Sausage Roll		(355 calories per 100g)",
      "Yoghurt	(61 calories per 100g)",
      "Apple 	(52 calories per 100g)",
      "Orange	(62 calories per 100g)",
    ],
    [
      "Irish bacon and cabbage 	(72 calories per 100g)",
      "Potato 	(75 calories per 100g)",
      "Beef 	(194 calories per 100g)",
      "Mutton (292 calories per 100g)",
      "Fries  (239 calories per 100g)",
      "Chicken Nuggets (297 calories per 100g)",
      "Chicken Fillet  (138 calories per 100g)",
      "Beef burger  (135 calories per 100g)",
      "Lasagna  (163 calories per 100g)",
      "Spaghetti(157 calories per 100g)",
      "Macaroni(157 calories per 100g)",
      "Minced Beef(137 calories per 100g)",
      "Cod fillet(82 calories per 100g)",
      "Salmon fillet(100 calories per 100g)",
    ],
    [
      "Tea  (17 calories per 100ml)",
      "Coca-Cola  (42 calories per 100ml)",
      "Orange Squash(2 calories per 100ml)",
      "Apple juice(55 calories per 100ml)",
      "Coffee(5 calories per 100ml)",
	  "Latte(135 calories per 100ml)",
	  "Cappuccino(31 calories per 100ml)",
    ]
  ];
  
  $scope.category = categories[$stateParams.dishesId];
  $scope.dishes = dishes[$stateParams.dishesId];

});
