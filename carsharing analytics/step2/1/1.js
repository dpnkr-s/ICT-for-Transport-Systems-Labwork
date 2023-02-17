db.PermanentBookings.aggregate([
{
    $match:{city:"Vancouver"}
},
{
    $project:{
    duration:{$divide:[{$subtract:["$final_time", "$init_time"]},60]},
    distance_lat:{$subtract: ["$init_lat", "$final_lat"]},
    distance_lon:{$subtract: ["$init_lon", "$final_lon"]},
    day: {
        $subtract:
        [{$subtract :
            ["$init_time",
            {
                $mod:["$init_time", 3600*24]
            }
         ]},
            8*3600
         ]},
    hour:{$subtract:["$init_time", {$mod:["$init_time", 3600]}]}
    }
},
{
    $match:{
        $and:[
            {distance_lat:{$ne:0}},
            {distance_lon:{$ne:0}},
            {duration:{$gt:1, $lt:240}}
            ]
       }
},
{
    $project:{
        duration:1,
        day:1,
        hour:1,
        hourOfDay:{$subtract:["$hour", "$day"]}
    }
},
{
        $group:{
            //_id: "$hourOfDay",
            _id: "$hour",
            tot:{$sum:1},
            avg_duration: {$avg:"$duration"}
        }},
    {
        $sort:{_id:1}
    }]).forEach(function(o){
        print(o._id + " " + o.tot, o.avg_duration)
    })