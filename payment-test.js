const test=require('node:test'),assert=require('node:assert/strict');
const shared=require('./payment-server');
function call(handler,body,method='POST',headers={host:'localhost',origin:'http://localhost'}){return new Promise(resolve=>{const res={setHeader(){},status(n){this.code=n;return this;},json(data){resolve({code:this.code,data});}};handler({method,headers,body},res);});}
process.env.RAZORPAY_KEY_ID='rzp_test_dummy';process.env.RAZORPAY_KEY_SECRET='unit-test-only-secret';
test('invalid amounts, currency and methods rejected before API',async()=>{const h=require('./create-order-test');for(const amount of [0,99,-1,100.5,'100',10000001])assert.equal((await call(h,{amount})).code,400);assert.equal((await call(h,{amount:100,currency:'USD'})).code,400);assert.equal((await call(h,{},'GET')).code,405);assert.equal((await call(h,{amount:100},'POST',{host:'localhost',origin:'https://evil.invalid'})).code,403);});
test('signed server order is authenticated, expires, and detects tampering',()=>{const secret='unit-test-only-secret';const tok=shared.token({id:'order_abc',amount:100,currency:'INR'},secret);assert.equal(shared.untoken(tok,secret).id,'order_abc');assert.throws(()=>shared.untoken(tok+'x',secret));const raw=Buffer.from(JSON.stringify({id:'order_abc',expires:0})).toString('base64url');assert.throws(()=>shared.untoken(raw+'.'+shared.digest(raw,secret),secret));});
test('verification rejects missing fields, bad order, bad signature',async()=>{const h=require('./verify-payment-test');assert.equal((await call(h,{})).code,400);const tok=shared.token({id:'order_abc',amount:100,currency:'INR'},process.env.RAZORPAY_KEY_SECRET);const b={razorpay_payment_id:'pay_abc',razorpay_order_id:'order_abc',razorpay_signature:'0'.repeat(64),order_token:tok};assert.equal((await call(h,b)).code,400);assert.equal((await call(h,{...b,razorpay_order_id:'order_wrong'})).code,400);});
test('live credentials cannot be enabled by env swap',()=>{process.env.RAZORPAY_KEY_ID='rzp_live_dummy';assert.throws(()=>shared.config());process.env.RAZORPAY_KEY_ID='rzp_test_dummy';});

test('order response and verified captured/authorized/mismatched statuses with a mocked SDK',async()=>{
 const original=shared.config,secret='unit-test-only-secret',order={id:'order_mock',amount:100,currency:'INR'};let payment={id:'pay_mock',order_id:order.id,amount:100,currency:'INR',status:'captured'};
 shared.config=()=>({key:'rzp_test_dummy',secret,client:{orders:{create:async input=>({...order,receipt:input.receipt})},payments:{fetch:async()=>payment}}});
 try {
 for(const file of ['./api/create-order','./api/verify-payment'])delete require.cache[require.resolve(file)];
 const create=require('./api/create-order'),verify=require('./api/verify-payment');
 const made=await call(create,{amount:100,currency:'INR'});assert.equal(made.code,200);assert.equal(made.data.mode,'test');assert.equal(made.data.order_id,order.id);assert.equal('secret' in made.data,false);
 const b={razorpay_payment_id:payment.id,razorpay_order_id:order.id,razorpay_signature:shared.digest(order.id+'|'+payment.id,secret),order_token:made.data.order_token};
 assert.equal((await call(verify,b)).data.success,true);payment={...payment,status:'authorized'};assert.equal((await call(verify,b)).data.success,false);payment={...payment,amount:101};assert.equal((await call(verify,b)).code,400);
 }finally{shared.config=original;}
});
