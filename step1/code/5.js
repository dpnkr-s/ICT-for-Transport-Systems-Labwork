var cities = ["Milano", "Wien", "Toronto"], len = cities.length
for(i=0; i<len; i++){
    c=cities[i]

one=db.getCollection('ActiveParkings').find({city: c }).count()
two=db.getCollection('ActiveBookings').find({city: c }).count()

three=one+two


    print("Car available in " + c + ": " + three)
                     }
