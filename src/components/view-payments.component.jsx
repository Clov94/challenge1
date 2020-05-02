import React from 'react'

import registers from '../components/register.json'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { EditPaymentsComponent } from './edit-payments.component'

export const ViewPaymentsComponent = ({ styles }) => {
  const [unHidden, setUnHidden] = React.useState(true)
  const [showDialog, setShowDialog] = React.useState(false)

  const handleClick = (event) => {
    setShowDialog(event.currentTarget)
  }

  const handleClose = () => {
    setShowDialog(false)
  }

  return (
    <div style={{ margin: 'auto', float: 'left', width: 300 }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setUnHidden(!unHidden)}
      >
        <Typography>View Payments</Typography>
      </Button>

      <div hidden={unHidden}>
        {registers.payments.map(({ id, toPay }) => (
          <div key={id}>
            <TextField disabled id={`${toPay}-${id}`} defaultValue={toPay} />
            <Button
              id={`Edit-${id}`}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              <Typography>Edit</Typography>
            </Button>
            <EditPaymentsComponent
              handleClose={handleClose}
              id={id}
              open={showDialog}
              toPay={toPay}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
