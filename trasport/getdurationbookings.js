var c = db.PermanentBookings.aggregate (
    [
      {$match: {city : "Milano"} },
      { $project:
          { _id: 0,
            init_time: 1, 
            duration: { $subtract : [ "$final_time", "$init_time"] }
          }
      }
    ]
)
var i = 0 
while (c.hasNext() && i<100) {
   var o = c.next()
   var date = new Date(o.init_time * 1000)
   print(date.getDay() + " " + o.duration)
   i++
}
   