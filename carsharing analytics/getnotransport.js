db.PermanentBookings.aggregate (
    [
      {$match: {city : "Milano", "public_transport.duration" : {$lt: 1}} },
      { $project:
          { _id: 0, init_time: 1, init_lat: 1, final_lat: 1,
            duration: { $subtract : [ "$final_time", "$init_time"] }
          }
      }
    ]
    )