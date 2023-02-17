db.getCollection('ActiveBookings').distinct("city")
db.getCollection('PermanentBookings').distinct("city")
db.getCollection('ActiveParkings').distinct("city")
db.getCollection('PermanentParkings').distinct("city")