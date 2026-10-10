# Razorpay test checkout

Static HTML/JS with Vercel Node serverless endpoints, Razorpay Node SDK2.9.8.

Routes: /pay/, POST /api/create-order, POST /api/verify-payment.
Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET as sensitive Vercel project environment variables. Local .env is ignored; .env.example has placeholders only. No frontend build-prefix environment variables are needed for vanilla JS. Only key_id is returned to Checkout; secret never leaves backend.

Run npm ci, npm test. Local integration development: npx vercel dev, using ignored .env. Open /pay/, enter INR1, open TEST checkout and use Razorpay's test-mode success/failure flow. Never use real payment details. Check modal dismissal, failure and success. Invalid/missing fields and signatures return400, method405, upstream auth401, other upstream errors500; unavailable configuration503. INR only, minimum100paise, test ceiling INR100,000. Receipt generated server-side. No database created.

Server-signed one-hour order token binds server-created order ID/amount/currency without an in-memory store. Verification compares HMAC using timingSafeEqual and fetches payment status and amount. Only captured state returns success. No service is booked and no fulfillment happens. The frontend never calls a signature-valid but uncaptured payment paid.

Live mode is intentionally hard-blocked in this version. Before live: user-approved live release; securely collected live keys; confirm activation/capture/settlement settings with owner; agreed invoicing amounts and currency; authenticated or invoice-bound server-side amount policy, abuse controls/rate limits; capture/refund/reconciliation handling and signed webhooks; complete end-to-end test and production checks; legal/privacy/terms decisions. Existing chat-exposed test credentials should be rotated by owner. Switching environment variables alone will NOT enable live payments.

Official reference: https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/integration-steps/
