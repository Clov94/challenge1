import React from 'react'
import { ViewPaymentsComponent } from './view-payments.component'
import { AddPaymentsComponent } from './add-payments.component'
import { DeletePaymentsComponent } from './delete-payments.component'
import { makeStyles } from '@material-ui/styles'

export const TrackerPaymentsComponent = () => {
  const classes = useStyles()
  return (
    <div>
      <ViewPaymentsComponent styles={classes.floatButton} />
      <AddPaymentsComponent styles={classes.floatButton} />
      <DeletePaymentsComponent styles={classes.floatButton} />
    </div>
  )
}

const useStyles = makeStyles(() => ({
  floatButton: { float: 'left' },
}))
