import React from "react";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
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

export const EditPaymentsComponent = ({ handleClose, id, open, toPay }) => {
  return (
    <div>
      <Button autoFocus onClick={handleClose} color="primary">
        <Typography>save</Typography>
      </Button>
    </div>
  );
};
