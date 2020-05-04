import React from "react";
import { AddPaymentsComponent } from "./add-payments.component";
import registers from "../components/register.json";
import { EditableSectionComponent } from "./editable-section.component";
import { ViewPaymentsComponent } from "./view-payments.component";

export const TrackerPaymentsComponent = () => {
  const [listOfPayments, setListOfPayments] = React.useState(registers);

  const onAddPayment = (payment) => {
    const idPlus = listOfPayments.payments.length + 1;
    setListOfPayments({
      ...listOfPayments,
      payments: [...listOfPayments.payments, { id: idPlus, toPay: payment }],
    });
  };

  const onDeletePayment = (idToDelete) => {
    const payments = listOfPayments.payments.filter(
      (payment) => payment.id !== idToDelete
    );
    setListOfPayments({ payments });
  };

  const onUpdatePayment = (id, editPayment) => {
    const listUpdated = listOfPayments.payments.filter((pay) =>
      pay.id === id ? (pay.toPay = parseInt(editPayment)) : pay.toPay
    );
    setListOfPayments({ payments: listUpdated });
  };

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
