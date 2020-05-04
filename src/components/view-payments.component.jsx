import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const ViewPaymentsComponent = ({ listOfPayments }) => {
  const classes = useStyles();
  return (
    <div style={{ margin: "auto", float: "left", width: 500 }}>
      <div>{"View Of Payments"}</div>
      <div>
        {listOfPayments.payments.map(({ id, toPay }) => (
          <div key={id} className={classes.styledList}>
            <ListItem key={id}>
              <ListItemText primary={`$ ${toPay}`} />
            </ListItem>
          </div>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  styledList: { textAlignLast: "center" },
}));
