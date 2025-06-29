import { Grid2, Typography } from '@mui/material'
// import { ReactComponent as Heart } from '../assets/heart.svg';


const Dashboard = () => {
  return (
    <>
      <Grid2 container spacing={2} direction={'column'}>
        <Typography variant='h2'>Welcome Back!</Typography>
        <Grid2>
          <Typography variant='h3'>Today's</Typography>
          {/* <Heart width={100} height={100} /> */}
        </Grid2>
      </Grid2>
    </>
  )
}

export default Dashboard