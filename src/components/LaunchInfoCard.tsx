import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LaunchInfoCardProps } from '../types/types';
import { format, parseISO } from 'date-fns'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom'

const LaunchInfoCard = (props: LaunchInfoCardProps) => {
    // object destructuring
    const { launch_success, launch_date_local, mission_name, flight_number, upcoming, rocket, links, launch_site } = props.launch
    const { site_name } = launch_site
    const { mission_patch_small } = links
    const { rocket_name, rocket_type } = rocket

    // date and time formatting
    const formatedLaunchDate = format(parseISO(launch_date_local), 'd MMMM yyyy')

    return (
        <Card>
            <Box
                display='flex'
                justifyContent='center'
                alignItems={'center'}
                bgcolor='#4DB2E0'
            >
                <CardMedia
                    component="img"
                    alt="Mission Logo"
                    image={mission_patch_small}
                    sx={{
                        paddingTop: '32px',
                        paddingBottom: '32px',
                        width: '60%'
                    }}
                />
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" marginBottom='20px'>
                    {`Mission ${mission_name}`}
                </Typography>
                {
                    upcoming ? (
                        <Typography component='p' variant='body2' gutterBottom>
                            <Typography component='span' variant='body2' fontWeight='bold'>Launch Status: </Typography>
                            Upcoming
                        </Typography>
                    ) : (
                        <Typography component='p' variant='body2' gutterBottom>
                            <Typography component='span' variant='body2' fontWeight='bold'>Launch Status : </Typography>
                            {launch_success ? 'Success' : 'Failure'}
                        </Typography>
                    )
                }
                <Typography component='p' variant='body2' gutterBottom>
                    <Typography component='span' variant='body2' fontWeight='bold'>Rocket Name: </Typography>
                    {rocket_name}
                </Typography>
                <Typography component='p' variant='body2' gutterBottom>
                    <Typography component='span' variant='body2' fontWeight='bold'>Rocket Type: </Typography>
                    {rocket_type}
                </Typography>
                <Typography component='p' variant='body2' gutterBottom>
                    <Typography component='span' variant='body2' fontWeight='bold'>Launch Site Name: </Typography>
                    {site_name}
                </Typography>
                <Typography component='p' variant='body2' gutterBottom>
                    <Typography component='span' variant='body2' fontWeight='bold'>Launch Date: </Typography>
                    {`${formatedLaunchDate} (local)`}
                </Typography>
            </CardContent >
            <Box
                display='flex'
                justifyContent='end'
                marginRight='8px'
            >
                <CardActions>
                    <Link to={`/launches/${flight_number}`} style={{ textDecoration: 'none' }} state={props.launch}>
                        <Button size='medium'>View More Details</Button>
                    </Link>
                </CardActions>
            </Box>
        </Card >
    );
};

export default LaunchInfoCard;