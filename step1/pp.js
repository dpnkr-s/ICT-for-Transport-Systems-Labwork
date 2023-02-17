var cities = ["Milano", "Wien", "Toronto"], 
len = cities.length
for(i=0; i<len; i++){
    c=cities[i]
    one=db.ActiveBookings.aggregate([
    {$group: { // now compute the totals, per city
        city: c,
        num_car: {$sum: 1}
    
}