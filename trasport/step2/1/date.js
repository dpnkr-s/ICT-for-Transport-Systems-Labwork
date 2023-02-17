db.PermanentBookings.find({city: "Milano"}).forEach(
function(o){
var date = new Date(o.init_time*1000)
print (date + " " + o.city)
})


                     