import React from "react";
import { ViewPaymentsComponent } from "./view-payments.component";
import { AddPaymentsComponent } from "./add-payments.component";
import { makeStyles } from "@material-ui/styles";
import registers from "../components/register.json";

export const TrackerPaymentsComponent = () => {
  const classes = useStyles();
  const [listOfPayments, setListOfPayments] = React.useState(registers);

  const onAddPayment = (payment) => {
    console.log(payment);
    const idPlus = listOfPayments.payments.length + 1;
    setListOfPayments({
      ...listOfPayments,
      payments: [...listOfPayments.payments, { id: idPlus, toPay: payment }],
    });
  };

  const onDeletePayment = (idToDelete) => {
    console.log(idToDelete);
    const payments = listOfPayments.payments.filter(
      (payment) => payment.id !== idToDelete
    );
    console.log(payments);
    console.log(listOfPayments);
    setListOfPayments({ payments });
  };

  return (
    <div>
      <ViewPaymentsComponent
        listOfPayments={listOfPayments}
        onDeletePayment={onDeletePayment}
      />
      <AddPaymentsComponent
        onAddPayment={onAddPayment}
        listOfPayments={listOfPayments}
      />
    </div>
  );
};

const useStyles = makeStyles(() => ({
  floatButton: { float: "left" },
}));
