db.PermanentBookings.aggregate([
{
    $match:{city:"Wien"}
},
{
    $project:{
    duration:{$divide:[{$subtract:["$final_time", "$init_time"]},60]},
    distance_lat:{$subtract: ["$init_lat", "$final_lat"]},
    distance_lon:{$subtract: ["$init_lon", "$final_lon"]},
     day: {$add:[ {$subtract :["$init_time",{ $mod:["$init_time", 3600*24]}]}, 3600]}
    hour:{$add:[{$subtract:["$init_time", {$mod:["$init_time", 3600]}]}, 3600]}
            }
},
{
    $match:{
        $and:[
            {distance_lat:{$ne:0}},
            {distance_lon:{$ne:0}},
            {duration:{$gt:1, $lt:180}}
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
            _id: "$hourOfDay",
            tot:{$sum:1},
            avg_duration: {$avg:"$duration"}
        }},
    {
        $sort:{_id:1}
    }]).forEach(function(o){
        print((o._id)/3600 + " " + o.tot, o.avg_duration)
    })
