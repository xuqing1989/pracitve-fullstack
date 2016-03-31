(function(){
    'use strict';
    angular.module('app', ['ui.bootstrap'])
        .filter('moment',function(){
            return function(dataString,format) {
                var format = format || 'MM/DD/YYYY';
                return moment(dataString).format(format);
            }
        })
        .controller('it',['$http','$scope','$uibModal',function($http, $scope,$uibModal){
            $http.get('/interview').then(function(res){
                $scope.list = res.data;
            });
            $scope.showQuestions = function(interview){
                $uibModal.open({
                    templateUrl:'/questions.html',
                    controller:function($scope){
                        console.log(interview.questions);
                        $scope.questions = interview.questions;
                    },
                });
            };
        }]);
})();
