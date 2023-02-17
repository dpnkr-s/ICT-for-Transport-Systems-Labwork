var c = db.PermanentBookings.aggregate (
    [
      {$match: {city : "Torino", "driving.distance": {$gt: 0}}},
      { $project:
          { _id: 0,
            init_time: 1,
            "driving.distance": 1,
            duration: { $subtract : [ "$final_time", "$init_time"] },
            distance_lon: { $subtract : [ "$init_lon", "$final_lon"] },
            distance_lat: { $subtract : [ "$init_lat", "$final_lat"] }
          }
      }
    ]
)
var i = 0 
while (c.hasNext()) {
   var o = c.next()
   var date = new Date(o.init_time * 1000)
   print(o.init_time + " " + date.getDay() + " " + o.duration + " " + o.distance_lon + " " + o.distance_lat + " " + o.driving.distance)
   i++
}
