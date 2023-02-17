#!/usr/bin/gnuplot
#
# Interpolating a heat map
#
# AUTHOR: Hagen Wierstorf
# VERSION: gnuplot 4.6 patchlevel 0

reset

# wxt
#set terminal wxt size 350,262 enhanced font 'Verdana,10' persist
# png
set terminal pngcairo size 650,650 enhanced font 'Verdana,10'
set output 'heat_map_19to20.png'

set border linewidth 0
#unset key
#unset colorbox
#unset tics
#set lmargin screen 0.1
#set rmargin screen 0.9
#set tmargin screen 0.9
#set bmargin screen 0.1
#set palette grey
set palette maxcolors 8
set palette defined ( 0 'light-blue',\
                      1 'blue',\
                      2 'light-green',\
		      3 'green',\
		      4 'yellow',\
                      5 'orange',\
                      6 'light-red',\
		      7 'red')
set xrange [0:19]
set yrange [0:19]
set grid ytics lc rgb "#bbbbbb" lw 1.5 lt 1
set grid xtics lc rgb "#bbbbbb" lw 1.5 lt 1
#set pm3d map
#set dgrid3d
#splot 'myFile.txt' matrix with pm3d
plot "myFile4.txt" matrix w image