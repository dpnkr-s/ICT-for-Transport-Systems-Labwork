set terminal png
set output 'cdf_booking.png'

stats '1_a_milano.data' using ($3)
N1 = floor(STATS_records)
stats '1_a_toronto.data' using ($3)
N2 = floor(STATS_records)
stats '1_a_wien.data' using ($3)
N3 = floor(STATS_records)


bin_width = 0.5
bin_number(x) = floor(x/bin_width)
rounded(x) = bin_width*(bin_number(x)+0.5)

set xlabel "Duration of Booking (Minutes)"
#set multiplot title "CDF of Booking Duration"
set label "CDF for Booking duration" at screen 0.5,0.90 center front

plot "1_a_milano.data" using (rounded($3)):(1/N1) title 'Milano' smooth cumulative, \
     "1_a_toronto.data" using (rounded($3)):(1/N2) title 'Toronto' smooth cumulative, \
     "1_a_wien.data" using (rounded($3)):(1/N3) title 'Wien' smooth cumulative    
pause -1
