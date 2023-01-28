import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { LaunchInfoCardProps } from '../types/types';
import { format, parseISO } from 'date-fns';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Info from './Info';

const LaunchInfoCard = (props: LaunchInfoCardProps) => {
    // object destructuring
    const { launch_success, launch_date_local, mission_name, flight_number, upcoming, rocket, links, launch_site } = props.launch;
    const { site_name } = launch_site;
    const { mission_patch_small } = links;
    const { rocket_name, rocket_type } = rocket;

    // date and time formatting
    const formatedLaunchDate = format(parseISO(launch_date_local), 'd MMMM yyyy');

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
                <Info keyPoint='Mission Name' value={mission_name} />
                {
                    upcoming ? (
                        <Info keyPoint='Launch Status' value='Upcoming' />
                    ) : (
                        launch_success ? (
                            <Info keyPoint='Launch Status' value='Success' />
                        ) : (
                            <Info keyPoint='Launch Status' value='Failure' />
                        )
                    )
                }
                <Info keyPoint='Rocket name' value={rocket_name} />
                <Info keyPoint='Rocket type' value={rocket_type} />
                <Info keyPoint='Launch Site Name' value={site_name} />
                <Info keyPoint='Launch date' value={`${formatedLaunchDate} (local)`} />
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