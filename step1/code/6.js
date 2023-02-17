var cities = ["Milano", "Wien", "Toronto"], len = cities.length
var startUnixTime = new Date("2016-12-25") / 1000
var endUnixTime = new Date("2016-12-26") / 1000

for(i=0; i<len; i++){
    c=cities[i]
    print("Bookings during christmas day in "  + c + ": " + 
            db.PermanentBookings.find({city: c,
                                       init_time: { $gte: startUnixTime, $lte: endUnixTime }
                                        }).count())
                     }
