import React from "react";
import { EditPaymentsComponent } from "./edit-payments.component";

export const EditableSectionComponent = ({
  listOfPayments,
  onDeletePayment,
  onUpdatePayment,
}) => {
  return (
    <div style={{ margin: "auto", float: "left", width: 500 }}>
      <div>{"Editable Payments"}</div>
      {listOfPayments.payments.map(({ id, toPay }) => (
        <EditPaymentsComponent
          key={id}
          id={id}
          onUpdatePayment={onUpdatePayment}
          toPay={toPay}
          onDeletePayment={onDeletePayment}
        />
      ))}
    </div>
  );
};
