(function(){
 const form=document.getElementById('payment-form'),button=document.getElementById('pay-button'),status=document.getElementById('status');
 function say(message){status.textContent=message;}
 async function post(url,body){const r=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});const data=await r.json();if(!r.ok)throw new Error(data.error||'Checkout request failed.');return data;}
 form.addEventListener('submit',async function(event){
  event.preventDefault();if(button.disabled)return;
  const text=document.getElementById('amount').value;
  if(!/^\d+(\.\d{1,2})?$/.test(text)){say('Enter an amount with no more than two decimal places.');return;}
  const amount=Math.round(Number(text)*100);
  if(!Number.isSafeInteger(amount)||amount<100||amount>10000000){say('Enter a test amount from INR1 to INR100,000.');return;}
  button.disabled=true;say('Creating a test order...');let verifying=false,finished=false;
  try{
   if(typeof window.Razorpay!=='function')throw Error('Razorpay checkout could not load. Check your connection and refresh.');
   const order=await post('/api/create-order',{amount,currency:'INR'});
   if(order.mode!=='test'||!order.key_id.startsWith('rzp_test_'))throw Error('Live payments are not enabled on this page.');
   const checkout=new Razorpay({key:order.key_id,amount:order.amount,currency:order.currency,order_id:order.order_id,name:'Diya Nathwani',description:'Test checkout - no real money',theme:{color:'#8940fa'},
    handler:async function(result){verifying=true;say('Checking the test payment...');try{const verified=await post('/api/verify-payment',{...result,order_token:order.order_token});finished=true;say(verified.message);}catch(e){finished=true;say(e.message+' Do not start another payment until this one is checked.');}finally{button.disabled=false;}},
    modal:{ondismiss:function(){if(!verifying&&!finished){say('Test checkout closed. No verified payment.');button.disabled=false;}}}
   });
   checkout.on('payment.failed',function(){say('Test payment failed. No payment verified. Close checkout to try again.');});
   say('Test checkout open. No real money will be collected.');checkout.open();
  }catch(e){say(e.message);button.disabled=false;}
 });
})();
