const rp = require('request');
const domin = 'https://api.jinjingzheng.zhongchebaolian.com';
const addcartypeUrl = '/enterbj/platform/enterbj/addcartype';

const addcartype = {
  uri: domin+addcartypeUrl,
  method: 'GET',
  gzip: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://api.jinjingzheng.zhongchebaolian.com',
    'Cookie': 'JSESSIONID=03451CCEFCA2975A892618509F49EB2A; CNZZDATA1260761932=1447194544-1489704663-https%253A%252F%252Fapi.jinjingzheng.zhongchebaolian.com%252F%7C1494198185; UM_distinctid=15ab66a50aa19-0ebf95ce9e49a4-2e5e056a-3d10d-15ab66a50ab7c',
    'Content-Length': 182,
    'Connection': 'keep-alive',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89',
    'Referer': 'https://api.jinjingzheng.zhongchebaolian.com/enterbj/jsp/enterbj/index.jsp',
    'Accept-Language': 'zh-cn',
    'Accept-Encoding': 'gzip,deflate'
  },
  form: {
    applyid: '',
    carid: '10223597',
    userid: '36ACEF1E65A842F3B9520936D70178FE',
    gpslon: '116.314587',
    gpslat: '40.044848',
    imei: '',
    imsi: '',
    licenseno: '%E5%86%80F362SF',
    appsource: '',
    hiddentime: '2017-12-09+00%3A46%3A52'
  },
  followRedirect: false
};

const hcode = 302;


console.time('addcartype');
const si = setInterval(function(){ rp(addcartype, callback); }, 1000);

let i = 0;
function callback(error, response, body) {
  console.log('截止到%d,请求次数%d' , new Date(), i++);
  console.log(body);
  if (!error && response.statusCode == 200) {
    clearInterval(si);
    console.timeEnd('addcartype');
    //var info = JSON.parse(body);
    console.log(body);
  }
}