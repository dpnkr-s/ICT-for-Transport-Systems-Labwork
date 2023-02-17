db.auth({user: "ictts", pwd: "Ictts16!"})

var c = db.ActiveBookings.find( {city: "Torino"} ).limit(5)
var i = 0
while (c.hasNext() && i<10) {
  var o = c.next() // this is the object
  print(o.init_time + " " + o.city)
  i++
}