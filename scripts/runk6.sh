clear 

path=$1

read -p "Deseja gerar Web DashBoard [true ou false]: " wd

read -p "Deseja usar o EndPoint "/public" [true ou false]: " url

if [[ "$url" == "false" ]]; then
    echo "Executando teste com URL definida no código"
    K6_WEB_DASHBOARD=$wd K6_WEB_DASHBOARD_EXPORT=report/html-report.html k6 run $path
else    
    echo "Executando teste com URL definida pelo usuário"
    K6_WEB_DASHBOARD=$wd K6_WEB_DASHBOARD_EXPORT=report/html-report.html k6 run $path --env URL=https://test-api.k6.io/public
fi