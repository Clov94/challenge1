import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import registers from '../components/register.json'

import Typography from '@material-ui/core/Typography'

export const AddPaymentsComponent = () => {
  const [addPayment, setAddPayment] = React.useState('')

  const [unHiddenPay, setUnHiddenPay] = React.useState(true)

  const onAddPayment = () => {
    const idPlus = registers.payments.length
    console.log(idPlus)
    registers.payments.push({ id: idPlus + 1, toPay: addPayment })
    setAddPayment('')
  }
  return (
    <div style={{ margin: 'auto', float: 'left', width: 300 }}>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setUnHiddenPay(!unHiddenPay)}
        >
          <Typography>Add Payment</Typography>
        </Button>
      </div>
      <div hidden={unHiddenPay} style={{ float: 'left' }}>
        <TextField
          onChange={(e) => setAddPayment(e.target.value)}
          defaultValue={addPayment}
          value={addPayment}
        />
        <Button variant="contained" color="primary" onClick={onAddPayment}>
          <Typography>add</Typography>
        </Button>
      </div>
    </div>
  )
}
