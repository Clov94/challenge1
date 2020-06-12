import React from "react";
import { AddPaymentsComponent } from "./add-payments.component";
import registers from "../components/register.json";
import { EditableSectionComponent } from "./editable-section.component";
import { ViewPaymentsComponent } from "./view-payments.component";

export const TrackerPaymentsComponent = (payments) => {
  const [listOfPayments, setListOfPayments] = React.useState(
    registers.payments
  );

  const onAddPayment = (payment) => {
    const idPlus = listOfPayments.length + 1;
    setListOfPayments({
      ...listOfPayments,
      payments: [...listOfPayments, { id: idPlus, toPay: payment }],
    });
  };

  const onDeletePayment = (idToDelete) => {
    const payments = listOfPayments.filter(
      (payment) => payment.id !== idToDelete
    );
    setListOfPayments({ payments });
  };

  const onUpdatePayment = (id, editedPayment) => {
    const listUpdated = listOfPayments.filter((pay) => {
      if (pay.id === id) {
        return (pay.toPay = parseInt(editedPayment));
      }
      return pay.toPay;
    });
    setListOfPayments({
      ...listOfPayments,
      payments: listUpdated,
    });
  };

  // console.log(listOfPayments);

  return (
    <div>
      <EditableSectionComponent
        listOfPayments={listOfPayments}
        onDeletePayment={onDeletePayment}
        onUpdatePayment={onUpdatePayment}
      />
      <AddPaymentsComponent
        onAddPayment={onAddPayment}
        listOfPayments={listOfPayments}
      />
      <ViewPaymentsComponent listOfPayments={listOfPayments} />
    </div>
  );
};
