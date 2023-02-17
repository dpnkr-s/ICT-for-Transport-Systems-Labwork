close all;
clear all;
clc;

load('coordata.mat')
data = coordinates12;
range = length(data);
zone_id = 1;
latInit = 45.4235972;
lonInit = 9.13154167;
latOld = latInit;
lonOld = lonInit;
latInc = 0.0045;
lonInc = 0.00641944;
latNew = latOld + latInc;
lonNew = lonOld + lonInc;
area_len = 10/0.5; %for 10sq km area
num_zones = area_len^2;
num_cars = zeros(num_zones,6);

for i=1:area_len
    lonOld = lonInit;
    lonNew = lonOld + lonInc;
    for j=1:area_len
        for k=1:range
            if ((data(k,2)>=latOld) && (data(k,2)<latNew) && (data(k,3) >= lonOld) && (data(k,3) < lonNew))
                if ((data(k,1)>=1485907200) && (data(k,1)<1485910800))
                    num_cars(zone_id,3) = num_cars(zone_id,3) + 1;
                end
                if ((data(k,1)>=1485928800) && (data(k,1)<1485932400))
                    num_cars(zone_id,4) = num_cars(zone_id,4) + 1;
                end
                if ((data(k,1)>=1485943200) && (data(k,1)<1485946800))
                    num_cars(zone_id,5) = num_cars(zone_id,5) + 1;
                end
                if ((data(k,1)>=1485975600) && (data(k,1)<1485979200))
                    num_cars(zone_id,6) = num_cars(zone_id,6) + 1;
                end
            end
        end
        num_cars(zone_id,2) = (lonOld+lonNew)/2;
        num_cars(zone_id,1) = (latOld+latNew)/2;
        
        lonOld = lonNew;
        lonNew = lonNew + lonInc;
        zone_id = zone_id + 1;
    end
    latOld = latNew;
    latNew = latNew+latInc;
end
csvwrite('zone_density_all.txt',num_cars);
