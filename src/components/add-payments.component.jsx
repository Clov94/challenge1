import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";

export const AddPaymentsComponent = ({ onAddPayment }) => {
  const [addPayment, setAddPayment] = React.useState("");

  useEffect(() => {
    setAddPayment("");
  }, [onAddPayment]);

  return (
    <div style={{ margin: "auto", float: "left", width: 300 }}>
      <div>{"Add Payment"}</div>
      <div style={{ float: "left" }}>
        <TextField
          onChange={(e) => setAddPayment(parseInt(e.target.value))}
          value={addPayment}
          label="Payment"
          type="number"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAddPayment(addPayment)}
        >
          <Typography>add</Typography>
        </Button>
      </div>
    </div>
  );
};
