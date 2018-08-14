angular.module('infoApp.services', [])


//         $http.get("https://www.alphavantage.co/query?apikey=OZ9JC8B321CT4KET&function=TIME_SERIES_DAILY&symbol=MSFT").then(function(jsonData){
//        console.log(jsonData.data["Meta Data"]);
//        console.log(jsonData.data["Time Series (Daily)"]);
//    });

.factory('stockDataService', function($q, $http){
    
    var getPriceData = function(ticker){
        
        var defered = $q.defer(), 
        url = "https://www.alphavantage.co/query?apikey=OZ9JC8B321CT4KET&function=TIME_SERIES_DAILY&symbol="+ ticker +"";
        
        $http.get(url).success(function(json){
            
            var jsonData = json;
            defered.resolve(jsonData);
        })
            .error(function(){
            console.log("Price data Error: " + error);
            defered.reject();
        });
        
        return defered.promise;
        
    };
    
   

 var getDetailsData = function(ticker){
        
        var defered = $q.defer(), 
        url = "https://www.alphavantage.co/query?apikey=OZ9JC8B321CT4KET&function=TIME_SERIES_DAILY&symbol="+ ticker +"";
        
        $http.get(url).success(function(json){
            
            var jsonData = json;
            defered.resolve(jsonData);
        })
            .error(function(){
            console.log("Details data Error: " + error);
            defered.reject();
        });
        
        return defered.promise;
        
    };
    
   
    return { 
        getPriceData : getPriceData,
        getDetailsData : getDetailsData
    };
})
;