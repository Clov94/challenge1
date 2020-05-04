import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { EditPaymentsComponent } from "./edit-payments.component";

export const EditableSectionComponent = ({
  listOfPayments,
  onDeletePayment,
  onUpdatePayment,
}) => {
  return (
    <div style={{ margin: "auto", float: "left", width: 500 }}>
      <div>{"Editable Payments"}</div>
      <div>
        {listOfPayments.payments.map(({ id, toPay }) => (
          <div key={id}>
            <EditPaymentsComponent
              id={id}
              onUpdatePayment={onUpdatePayment}
              toPay={toPay}
              onDeletePayment={onDeletePayment}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
