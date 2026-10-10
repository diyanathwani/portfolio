const {config,response,request,digest,equal,untoken}=require('../payment-server');
module.exports=async function(req,res){
 const b=request(req,res);if(!b)return;
 if(!/^pay_[A-Za-z0-9]+$/.test(b.razorpay_payment_id||'')||!/^order_[A-Za-z0-9]+$/.test(b.razorpay_order_id||'')||typeof b.razorpay_signature!=='string'||!b.order_token)return response(res,400,{error:'Missing or invalid payment verification fields.'});
 let cfg;try{cfg=config();}catch{return response(res,503,{error:'Test checkout is not configured yet.'});}
 let order;try{order=untoken(b.order_token,cfg.secret);}catch{return response(res,400,{error:'Order verification expired or invalid. Do not treat this as paid.'});}
 if(order.id!==b.razorpay_order_id||!equal(digest(order.id+'|'+b.razorpay_payment_id,cfg.secret),b.razorpay_signature))return response(res,400,{error:'Payment signature mismatch. Payment not verified.'});
 try{
  const p=await cfg.client.payments.fetch(b.razorpay_payment_id);
  if(p.order_id!==order.id||p.amount!==order.amount||p.currency!==order.currency)return response(res,400,{error:'Payment does not match this order.'});
  const captured=p.status==='captured';
  return response(res,200,{success:captured,signature_verified:true,status:p.status,mode:'test',payment_id:p.id,message:captured?'Test payment verified. No real money was collected.':'Signature verified, but the test payment is not captured yet. Do not treat it as paid.'});
 }catch(e){return response(res,e.statusCode===401?401:500,{error:'Could not confirm payment status. Do not retry payment until its status is checked.'});}
};
