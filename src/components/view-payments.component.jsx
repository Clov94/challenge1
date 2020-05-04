import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { EditPaymentsComponent } from "./edit-payments.component";
import { SavePaymentComponent } from "./save-payment.component";

export const ViewPaymentsComponent = ({
  listOfPayments,
  onDeletePayment,
  onUpdatePayment,
}) => {
  const [enabled, setEnabled] = React.useState(true);

  return (
    <div style={{ margin: "auto", float: "left", width: 500 }}>
      <div>{"View Payments"}</div>
      <div>
        {listOfPayments.payments.map(({ id, toPay }) => (
          <div key={id}>
            <TextField disabled={enabled} id={`${toPay}-${id}`} value={toPay} />
            <Button
              id={`Edit-${id}`}
              variant="contained"
              color="primary"
              onClick={() => {
                setEnabled(false);
              }}
            >
              {enabled ? (
                <EditPaymentsComponent />
              ) : (
                <SavePaymentComponent onClick={() => onUpdatePayment(id)} />
              )}
            </Button>
            <Button
              id={`delete-${id}`}
              variant="contained"
              color="secondary"
              onClick={() => onDeletePayment(id)}
            >
              <Typography>X</Typography>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
