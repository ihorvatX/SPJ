//definicija modula
var oModul = angular.module('oModul', ['ngRoute']);

oModul.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'predlosci/naslovna.html',
        controller: 'naslovnicaKontroler'
    });
    $routeProvider.when('/taskovi', {
        templateUrl: 'predlosci/taskovi.html',
        controller: 'taskKontroler'
    });
    $routeProvider.when('/trgovina', {
        templateUrl: 'predlosci/trgovina.html',
        controller: 'trgovinaKontroler'
    });
    $routeProvider.otherwise({
        template: 'Došlo je do pogreške'
    });
});


//definicija naslovniController
oModul.controller('naslovnicaKontroler', function ($scope) {
    $scope.pozdravnaPoruka = "Nalazite se na naslovnoj stranici.";
});
//definicija opisController
oModul.controller('taskKontroler', function ($scope) {

$scope.task = "";

$scope.AddTask = function()
{
    $scope.oZadaci.push({
        id: $scope.oZadaci.length,
        name: $scope.task
    });

    $scope.task = "";
}

$scope.DeleteTask = function(index)
{
    $scope.oZadaci.splice(index, 1);
}


    $scope.oZadaci = [
        {
        id: 1,
        name: 'Proučiti predložak'
        },
        {
        id: 2,
        name: 'Položiti blic'
        },
        {
        id: 3,
        name: 'Riješiti obavezne zadatke'
        }
        ];
        
});


oModul.controller('trgovinaKontroler', function ($scope, $filter) {
    $scope.oProizvodi = [
        {
            id:1,
            ime: 'Laptop',
            cijena: 433.21,
            dostupnaKolicina: 3,
            message : ''
        },
        {
            id:2,
            ime: 'racunalo',
            cijena: 874.21,
            dostupnaKolicina: 1,
            message : ''
        }
    ];

    $scope.Kosarica = [];


    $scope.AddToCart = function(product)
    {
        var flist = $filter('filter')($scope.Kosarica, { cart_id: product.id }, true);

        if(flist.length == 0){ 
            $scope.Kosarica.push({cart_id: product.id, cart_ime: product.ime, cart_cijena: product.cijena, cart_kolicina: 0}); 
        }	
    }

    $scope.UkupnaCijena = 0;
    
    
    $scope.Kolicina = function(proizvod)
    {
       var flist = $filter('filter')($scope.oProizvodi, { id: proizvod.cart_id }, true);


        
        console.log(proizvod.cart_kolicina);
        if(proizvod.cart_kolicina <= flist[0].dostupnaKolicina && proizvod.cart_kolicina != 0)
        {
            proizvod.message = "";
            proizvod.cijena = flist[0].cijena * proizvod.cart_kolicina;
        }
        else
        {
            proizvod.message ="upisana veca kolicina od dostupne"
            proizvod.cijena = 0;
        }

        
    }

$scope.Izracunaj = function ()
{
    $scope.UkupnaCijena =0;
    angular.forEach( $scope.Kosarica, function(value, key) {
        if(value.cijena != 0 && value.cijena != undefined)
        {
            $scope.UkupnaCijena += value.cijena;
        }
      });
}


    
   

});