import React from 'react';
import {createStyles,makeStyles} from '@material-ui/core/styles';
import {LinearProgress} from '@material-ui/core';

const useStyle = makeStyles((theme)=>{
  return createStyles({
    bar:{
      width:'100%',
      '& > * + *':{
        marginTop:theme.spacing(2)
      }
    }
  })
})

const ProgressBar = () =>{
  const classes = useStyle();
  return(
    <div className={classes.bar}>
      <LinearProgress/>
    </div>
  )
}
export default ProgressBar;