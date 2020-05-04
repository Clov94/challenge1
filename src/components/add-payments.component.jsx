import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

export const AddPaymentsComponent = ({ onAddPayment }) => {
  const [addPayment, setAddPayment] = React.useState("");

  useEffect(() => {
    setAddPayment("");
  }, [onAddPayment]);

  const classes = useStyles();

  return (
    <div className={classes.addInsider}>
      <div>{"Add Payment"}</div>
      <TextField
        onChange={(e) => setAddPayment(parseInt(e.target.value))}
        value={addPayment}
        label="Payment"
        variant="outlined"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => onAddPayment(addPayment)}
      >
        <Typography>add</Typography>
      </Button>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  addContainer: { height: 75, textAlignLast: "center" },
  addInsider: { float: "left" },
}));
