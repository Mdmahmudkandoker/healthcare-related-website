import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../../context/dataContext';


export default function CardComp({name, image, desc, specialty}) {
    const [data, setData] = React.useContext(DataContext);
    const history =  useHistory();
   const gotoDetails = () => {
       history.push(`/${name}/details`)
    }
  return (
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="h6" color="div">
           {specialty? specialty : null}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='desc'>
           {desc}
          </Typography>
          {specialty? null : <Button variant="contained" onClick={gotoDetails}>Details</Button>}
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}