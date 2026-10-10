const {config,response,request,token}=require('../payment-server');
module.exports=async function(req,res){
 const body=request(req,res);if(!body)return;
 const amount=body.amount;
 if(!Number.isSafeInteger(amount)||amount<100||amount>10000000)return response(res,400,{error:'Enter a test amount from INR1 to INR100,000 in whole paise.'});
 if(body.currency && body.currency!=='INR')return response(res,400,{error:'Only INR is enabled.'});
 let cfg;try{cfg=config();}catch{return response(res,503,{error:'Test checkout is not configured yet.'});}
 try{
  const order=await cfg.client.orders.create({amount,currency:'INR',receipt:'test_'+require('node:crypto').randomUUID().replaceAll('-','').slice(0,30)});
  return response(res,200,{order_id:order.id,amount:order.amount,currency:order.currency,key_id:cfg.key,mode:'test',order_token:token(order,cfg.secret)});
 }catch(e){return response(res,e.statusCode===401?401:500,{error:e.statusCode===401?'Checkout credentials were rejected.':'Could not create a test order. Please try again.'});}
};
