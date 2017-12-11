const rp = require('request');
const domin = 'https://enterbj.zhongchebaolian.com';
const addcartypeUrl = '/enterbj/platform/enterbj/addcartype';

const addcartype = {
  url: domin + addcartypeUrl,
  method: 'POST',
  gzip: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    //'Origin': 'https://api.jinjingzheng.zhongchebaolian.com',
    'Cookie': 'JSESSIONID=7D57B56813185A501A9E55852EEA211A; UM_distinctid=160414f70260-03d489db4c86e1-4b065c28-49a10-160414f702955; CNZZDATA1260761932=296000769-1512920721-%7C1512920721',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89',
   // 'Referer': 'https://api.jinjingzheng.zhongchebaolian.com/enterbj/jsp/enterbj/index.jsp',
    'Accept-Language': 'zh-cn',
    'Accept-Encoding': 'gzip,deflate'
  },
  form: {
    applyid: '',
    carid: '19201211',
    userid: '0EA7FE7CC30B4DB7B0FF4A814434A296',
    gpslon: '4.9E-324',
    gpslat: '4.9E-324',
    imei: '630d99f5-ceb7-3f39-97bd-1391bb918f8d',
    imsi: '460018341611869',
    licenseno: '苏HB9520',
    appsource: 'bjjj',
    hiddentime: '2017-12-11+01:15:34',
    cartype: '02',
    vehicletype: '03'
  },
  followRedirect: false
};

const hcode = 302;


console.time('addcartype');
const si = setInterval(function(){ console.log(1); rp.post(addcartype, callback); }, 1000);

let i = 0;
function callback(error, response, body) {
  console.log('截止到%d,请求次数%d' , new Date(), i++);
  console.log('&&&&&&&&&&&&&&&',body);
  if (!error && response.statusCode == 200) {
    clearInterval(si);
    console.timeEnd('addcartype');
    //var info = JSON.parse(body);
    console.log(body);
  }
}