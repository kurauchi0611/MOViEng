import TextFieldAtoms from "../../../components/atoms/TextFieldAtoms";
import ButtonMolecules from "../../../components/molecules/buttons/ButtonMolecules";
import GeneralColorStyle from "styles/colors/GeneralColorStyle";
import styled from "styled-components";
import { useState, ChangeEvent } from "react";
import { GeneralSpacer } from "../../../styles/spacer/GeneralSpacerStyle";
import { useRouter } from "next/router";
import {
  GeneralAlignItems,
  GeneralDirection,
  GeneralFlex,
  GeneralJustify,
} from "../../../styles/flex/GeneralFlexStyle";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { db } from "../../../utils/firebase/firebase";

const stripePromise = loadStripe(process.env.STRIPE_KEY);

const Wrap = styled.div`
  width: 360px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#87bbfd",
      },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const userId = router.query.id as string;
  const movieId = router.query.movie as string;

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", token);
      db.collection("stripe_customers")
        .doc(userId)
        .collection("tokens")
        .add({ token: token.id })
        .then(() => {
          router.replace(`/my_page/${userId}/nagesen?movie=${movieId}`);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const PaymentRegistration = () => {
  const router = useRouter();
  const userId = router.query.id as string;
  const movieId = router.query.movie as string;

  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [ccv, setCCV] = useState("");

  const moveNagesen = () => {
    router.replace(`/my_page/${userId}/nagesen?movie=${movieId}`);
  };

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentRegistration;
