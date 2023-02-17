c= {"ActiveBookings" : db.getCollection('ActiveBookings').find({}).count(),
    "PermanentBookings" : db.getCollection('PermanentBookings').find({}).count(),
    "ActiveParkings" : db.getCollection('ActiveParkings').find({}).count(),
    "PermanentParkings" : db.getCollection('PermanentParkings').find({}).count()}