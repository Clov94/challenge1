import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import registers from '../components/register.json'
import Typography from '@material-ui/core/Typography'

export const DeletePaymentsComponent = () => {
  const [unHidden, setUnHidden] = React.useState(true)
  return (
    <div style={{ margin: 'auto', float: 'left', width: 300 }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setUnHidden(!unHidden)}
      >
        <Typography>Delete</Typography>
      </Button>
      <div hidden={unHidden}>
        {registers.payments.map(({ id, toPay }) => (
          <div key={id}>
            <TextField disabled id={`${toPay}-${id}`} defaultValue={toPay} />
            <Button id={`Edit-${id}`} variant="contained" color="primary">
              <Typography>X</Typography>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
