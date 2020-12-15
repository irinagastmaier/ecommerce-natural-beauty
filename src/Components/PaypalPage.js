import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function PaypalPage() {
  const total = useSelector(state => state.cartReducer.total);
  const btn = useRef();
  console.log(btn);

  useEffect(() => {
    console.log(window);
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          console.log(actions, data);
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: { total },
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          console.log(actions, data);
          return actions.order.capture()
        },
        onCancel: (data, actions) => {
          console.log(actions, data);
        },
      })
      .render(btn.current);
  }, []);

  return (
    <div className="paypal" ref={btn}>
      <p>{total}</p>
    </div>
  );
}
