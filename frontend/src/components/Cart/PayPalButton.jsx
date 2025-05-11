import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";



const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AeVw6C_QUwNP_AvAE3qn7GHJdvGMn9wISbKTOmmHTFpwlLk-cFpWpfIDNYFoBb1AjxzZuOseKopkLOfh"
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: parseFloat(amount ).toFixed(2)} }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;