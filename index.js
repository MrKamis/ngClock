(() => {
    let ngClock = angular.module('ngClock', []);
    ngClock.directive('clock', ['$interval', ($interval) => {
        return{
            restrict: 'EA',
            template: '<span ng-bind="format"></span>',
            controller: ($interval, $scope) => {
                $scope.date = new Date();
                $scope.math = Math;
                $scope.hour = $scope.date.getHours();
                $scope.minute = $scope.date.getMinutes();
                $scope.second = $scope.date.getSeconds();
                $scope.format = $scope.hour + ':' + $scope.minute + ':' + $scope.second;
                $scope.interval = $interval(() => {
                    if(++$scope.second == 60){
                        $scope.second = 0;
                        if(++$scope.minute == 60){
                            $scope.minute = 0;
                            if(++$scope.hour == 24){
                                $scope.hour = 0;
                            }
                        }
                    }
                    $scope.format = $scope.hour + ':' + $scope.minute + ':' + $scope.second;
                }, 1000);
            }
        }
    }]);
})()