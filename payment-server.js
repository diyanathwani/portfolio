const crypto = require('node:crypto');
const Razorpay = require('razorpay');
function config() {
  const key = process.env.RAZORPAY_KEY_ID, secret = process.env.RAZORPAY_KEY_SECRET;
  // This release deliberately cannot process live payments.
  if (!key || !secret) throw new Error('Checkout environment not configured');
  if (!key.startsWith('rzp_test_')) throw new Error('Only test checkout is enabled');
  return {key, secret, client: new Razorpay({key_id:key,key_secret:secret})};
}
function response(res, code, body) {res.setHeader('Cache-Control','no-store');return res.status(code).json(body);}
function request(req,res) {
  if(req.method!=='POST'){res.setHeader('Allow','POST');response(res,405,{error:'POST required'});return null;}
  const origin=req.headers.origin,host=req.headers.host;
  if(origin && !['https://'+host,'http://'+host].includes(origin)){response(res,403,{error:'Origin not allowed'});return null;}
  try {const body=typeof req.body==='string'?JSON.parse(req.body):req.body; if(!body||Array.isArray(body))throw Error();return body;} catch {response(res,400,{error:'Invalid JSON body'});return null;}
}
function digest(value,secret) {return crypto.createHmac('sha256',secret).update(value).digest('hex');}
function equal(a,b) {return typeof a==='string'&&typeof b==='string'&&/^[a-f0-9]{64}$/.test(a)&&/^[a-f0-9]{64}$/.test(b)&&crypto.timingSafeEqual(Buffer.from(a,'hex'),Buffer.from(b,'hex'));}
function token(order,secret) {const data=Buffer.from(JSON.stringify({id:order.id,amount:order.amount,currency:order.currency,expires:Date.now()+60*60*1000})).toString('base64url');return data+'.'+digest(data,secret);}
function untoken(value,secret) {if(typeof value!=='string'||value.length>2000)throw Error();const [data,mac,...rest]=value.split('.');if(rest.length||!equal(digest(data,secret),mac))throw Error();const order=JSON.parse(Buffer.from(data,'base64url').toString());if(order.expires<Date.now())throw Error();return order;}
module.exports={config,response,request,digest,equal,token,untoken};
