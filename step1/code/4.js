db.getCollection('PermanentParkings').find({}).sort({init_time:1}).limit(1).forEach(function(o){
        c=new Date(o.init_time*1000)
        print("The collection start "+c)
    })
