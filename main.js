import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>TESTING...</h1>
  <div id="mounting-point"></div>
`;

Rebilly.initialize({
  publishableKey: 'pk_sandbox_HIizE-zmWgsNUk560GnClkx5pzDPxbmLB16kS6L',
  organizationId: '17J8HQ7GDT',
});

Rebilly.on('ready', () => {    
  Rebilly.applePay.mount('#mounting-point');
});

Rebilly.on('token-ready', (token) => {
  console.log(token);
});

// normal credit card
// Rebilly.on('ready', () => {
//   console.log('Rebilly.on ready');
//   Rebilly.card.mount('#mounting-point');
// });