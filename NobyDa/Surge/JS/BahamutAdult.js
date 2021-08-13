/*
Bahamut animation app removes ads. The script is compatible with Surge 4.0 and QX 1.0.5
If reprinted, please indicate the source. My TG channel @NobyDa

Surge4.0 : [Script]
http-request https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js
http-response https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v3\/token\.php requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Bahamut.js

QX 1.0.5 : [rewrite_local] 
https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v1\/vip_info\.php url script-request-header https://raw.githubusercontent.com/UncleDeron/QuantumultX/master/NobyDa/Surge/JS/BahamutAdult.js
https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v1\/vip_info\.php url script-response-body https://raw.githubusercontent.com/UncleDeron/QuantumultX/master/NobyDa/Surge/JS/BahamutAdult.js


QX or Surge MITM = api.gamer.com.tw
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj["adultContent"] = true;

body = JSON.stringify(obj);


$done({body});
