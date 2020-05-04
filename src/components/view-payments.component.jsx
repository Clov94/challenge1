import React from "react";
import { ListItem, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const ViewPaymentsComponent = ({ listOfPayments }) => {
  const classes = useStyles();
  return (
    <div style={{ margin: "auto", float: "left", width: 500 }}>
      <div>{"View Of Payments"}</div>

      {listOfPayments.payments.map(({ id, toPay }) => (
        <div key={id} className={classes.styledList}>
          <ListItem key={id}>
            <TextField
              disabled
              defaultValue={`$ ${toPay}`}
              label="Payment"
              variant="outlined"
            />
          </ListItem>
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  styledList: { textAlignLast: "center" },
}));
