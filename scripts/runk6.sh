
clear 

path=$1

read -p "Deseja gerar Web DashBoard [true ou false]: " wd

K6_WEB_DASHBOARD=$wd K6_WEB_DASHBOARD_EXPORT=report/html-report.html k6 run $path
