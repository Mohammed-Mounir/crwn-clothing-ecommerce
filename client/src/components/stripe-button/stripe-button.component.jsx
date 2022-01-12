import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KBwrTDkrw68Pbycuy61vDqwqGu8wc6gcY5HXcerIMqeJOwjMCwUh3DDoZ4r7NL1vDJmr6GvFsApPRkWGo1K5Lvm008K90yEDo';

  const onToken = async token => {
    try {
      await axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token,
        },
      });
      alert('Payment successful');
    } catch (err) {
      console.log('Payment error: ', JSON.parse(err));
      alert(
        'There was an issue with your payment. Please you make sure you use the provided credit card.'
      );
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
