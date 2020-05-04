import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import registers from "../components/register.json";

export const PaymentsListComponent = ({ idButton, paymentsList }) => {
  return (
    <div>
      {paymentsList.payments.map(({ id, toPay }) => (
        <div key={id}>
          <TextField disabled id={`${toPay}-${id}`} defaultValue={toPay} />
          {idButton === "viewButton" ? (
            <div>
              <Button
                id={id}
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                <Typography>Edit</Typography>
              </Button>
              
            </div>
          ) : (
            <div>
              <Button
                id={id}
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                <Typography>X</Typography>
              </Button>
            </div>
          )}
          {/* <Button id={`Edit-${id}`} variant="contained" color="primary">
            x
          </Button> */}
        </div>
      ))}
    </div>
  );
};
