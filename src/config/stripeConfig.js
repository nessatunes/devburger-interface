import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51QEItbEeTfSdkLvGBSHRXSvpP1GCyoewOHg5iHtrHzpiW1qIvDi1Wz4YxkfQgqpz4SwJ0eanhROejtS4MxEEgRyr00pA640NeD',
);
export default stripePromise;
