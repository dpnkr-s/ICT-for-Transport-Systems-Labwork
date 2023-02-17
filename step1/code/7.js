var cities = ["Milano", "Wien", "Toronto"], 
len = cities.length
for(i=0; i<len; i++){
    c=cities[i]
    print("Checking " + c + " bookings with alternative transportation: " + 
            db.PermanentBookings.find({ city: c, "public_transport.duration" : {$gt: -1} }).count())}
