import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export const SavePaymentComponent = ({ onUpdatePayment }) => {
  console.log(onUpdatePayment);
  return (
    <div>
      <Typography>Save</Typography>
    </div>
  );
};
