set style boxplot

set terminal png
set output '1ap_mil.png'

set xlabel "Time of Day (Hours)"
set ylabel "No. of Cars"
set xrange [-1:24]
set yrange [*:*]

plot "1ap Milano.data" using 1:2 title 'Parked cars per hour for Milano'

pause -1