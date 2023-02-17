
var max_lat=45.5137
var  max_lon=9.247297
var delta_lat=0.0045
var delta_lon=0.00641944
var lat0=45.4235972
var lon0=9.13154167

for(la1=lat0; la1<=max_lat; la1=la1+delta_lat){
    
for(lo1=lon0; lo1<=max_lon; lo1=lo1+delta_lon){
   print(lo1,la1)
    
print("box:"+la1,lo1+". density:"+db.getCollection('PermanentParkings').find({
    lat:{$gte:la1,$lte:la1+delta_lat},
    lon:{$gte:lo1,$lte:lo1+delta_lon}
 }).count())
 
}

}

