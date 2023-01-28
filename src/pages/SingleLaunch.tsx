import { useLocation } from 'react-router-dom';
import { format, parseISO } from 'date-fns'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player/youtube';


const SingleLaunch = () => {
    const location = useLocation()
    const {
        launch_success,
        launch_date_local,
        mission_name,
        upcoming,
        rocket,
        links,
        launch_site,
        details,
    } = location.state

    const { site_id, site_name_long, } = launch_site
    const { mission_patch, video_link } = links
    const { rocket_name, rocket_type } = rocket

    // date and time formatting
    const formatedLaunchDate = format(parseISO(launch_date_local), 'd MMMM yyyy')
    const formatedLaunchTime = format(parseISO(launch_date_local), 'hh:mm:ss a')

    return (
        <Box>
            <Box
                display='flex'
                justifyContent='center'
                alignItems={'center'}
                bgcolor='#4DB2E0'
            >
                <CardMedia
                    component="img"
                    alt="Mission Pic"
                    image={mission_patch}
                    sx={{
                        py: '100px',
                        maxWidth: '300px'
                    }}
                />
            </Box>
            <Typography variant="h3" paddingTop='60px' paddingBottom='60px' textAlign='center'>{`Mission ${mission_name}`}</Typography>
            <Container>
                <Box sx={{ width: '56%', mx: 'auto' }}>
                    <Typography component='p' variant='body2' gutterBottom>
                        <Typography component='span' variant='body2' fontWeight='bold'>Mission name: </Typography>
                        {mission_name}
                    </Typography>
                    {
                        details && (
                            <Typography component='p' variant='body2' gutterBottom>
                                <Typography component='span' variant='body2' fontWeight='bold'>Mission Details: </Typography>
                                {details}.
                            </Typography>
                        )
                    }
                    <Typography component='p' variant='body2' gutterBottom>
                        <Typography component='span' variant='body2' fontWeight='bold'>Launch Site: </Typography>
                        {site_name_long}.
                    </Typography>
                    <Typography component='p' variant='body2' gutterBottom>
                        <Typography component='span' variant='body2' fontWeight='bold'>Launch Site ID: </Typography>
                        {site_id}
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
                        <Typography component='span' variant='body2' fontWeight='bold'>Launch Date: </Typography>
                        {`${formatedLaunchDate} (local)`}
                    </Typography>
                    <Typography component='p' variant='body2' gutterBottom>
                        <Typography component='span' variant='body2' fontWeight='bold'>Launch Time: </Typography>
                        {`${formatedLaunchTime} (local)`}
                    </Typography>
                    <Typography component='p' variant='body2' gutterBottom>
                        <Typography component='span' variant='body2' fontWeight='bold'>Is It Upcoming?: </Typography>
                        {upcoming ? 'Yes' : 'No'}
                    </Typography>
                </Box>
                {
                    video_link && (
                        <Box display='flex' justifyContent='center' py='60px'>
                            <ReactPlayer url={video_link} controls />
                        </Box>
                    )
                }
            </Container>

        </Box>
    );
};

export default SingleLaunch;