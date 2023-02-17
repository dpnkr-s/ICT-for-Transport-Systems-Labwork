var startUnixTime = new Date("2016-12-29") / 1000
var endUnixTime = new Date("2016-12-30") / 1000

db.PermanentBookings.aggregate([
    { $match: { // Get only those rental in the selected period 
        $and: [
            {init_time: { $gte: startUnixTime}},
            {init_time: { $lte: endUnixTime }}
            ]
        }
    },
    { $project: { // compute rental duration, and distance traveled
        city : 1,
        distance_lat: { $subtract: ["$init_lat","$final_lat" ] },
        distance_lon: { $subtract: ["$init_lon","$final_lon" ] },
        duration: {$divide: [{$subtract: ["$final_time", "$init_time"] }, 60]},
        }
    },
    { $match: { // check that the car was moved
    	$and: [
     		{distance_lat: { $gt: 0}},
                {distance_lon: {$gt: 0}},
                {duration: {$gt: 2}}
     		]
    	}
    },
    { $project: { // get then the possible cost for this rental
        city : 1,
        duration: 1,
        distance: {$add: ["$distance_lat","$distance_lon"]},
        cost: {$multiply: ["$duration", 0.25]}
        }
    },
    { $group: { // now compute the totals, per city
        _id: "$city",
        tot_rentals: {$sum: 1},
        tot_time: {$sum: "$duration"},
        avg_time: {$avg: "$duration"},
        tot_dist: {$sum: "$distance"},
        avg_dist: {$avg: "$distance"},
        tot_cost: {$sum: "$cost"},
        avg_cost: {$avg: "$cost"}
        }
    },
    { $sort: { // last stage -- sort by tot_rentals
        tot_rentals: 1
        }
    }
])
