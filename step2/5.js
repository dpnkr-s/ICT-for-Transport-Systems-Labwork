var startUnixTime = new Date("2017-02-01") / 1000
var endUnixTime = new Date("2017-02-02") / 1000

db.getCollection('PermanentParkings').aggregate([
{ $match :{$and:[{city:"Milano"},{init_time: { $gt: startUnixTime, $lt: endUnixTime }}]}},
{$project:{
    //distance_lat:{$subtract: ["$init_lat", "$final_lat"]},
    //distance_lon:{$subtract: ["$init_lon", "$final_lon"]},
    hour:{$subtract:["$init_time", {$mod:["$init_time", 3600]}]},
    
    lat:"$lat",
    lon:"$lon",
    day: {$add:[{$subtract : ["$init_time",{$mod:["$init_time", 3600*24]}]}, 3600 
         ]},
    min:{$subtract:["$init_time", {$mod:["$init_time", 60]}]}
}},
 
{
    $project:{
        lat:1,
        lon:1,
        min:1,
        hourOfDay:{$subtract:["$hour", "$day"]},
       
    }
}


 ]).forEach(function(o){
        c=new Date(o.min*1000)
        print(c + " " + o.lat, o.lon)
    })
    
    
