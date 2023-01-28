import { useLocation } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player/youtube';
import Info from '../components/Info';
import { Link } from 'react-router-dom';

const SingleLaunch = () => {
    const location = useLocation();
    const {
        launch_success,
        launch_date_local,
        mission_name,
        upcoming,
        rocket,
        links,
        launch_site,
        details,
    } = location.state;

    // objeject destructing
    const { site_id, site_name_long, } = launch_site;
    const { mission_patch, video_link, wikipedia } = links;
    const { rocket_name, rocket_type } = rocket;

    // date and time formatting
    const formatedLaunchDate = format(parseISO(launch_date_local), 'd MMMM yyyy');
    const formatedLaunchTime = format(parseISO(launch_date_local), 'hh:mm:ss a');

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
            <Typography
                variant="h3"
                paddingTop='60px'
                paddingBottom='60px'
                textAlign='center'
            >
                {`Mission ${mission_name}`}
            </Typography>
            <Container>
                <Box sx={{ width: '56%', mx: 'auto' }}>
                    <Info keyPoint='Mission Name' value={mission_name} />
                    {details && <Info keyPoint='Mission Details' value={details} />}
                    <Info keyPoint='Launch Site' value={site_name_long} />
                    <Info keyPoint='Launch Site ID' value={site_id} />
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
                    <Info keyPoint='Launch date' value={formatedLaunchDate} />
                    <Info keyPoint='Launch time' value={formatedLaunchTime} />
                    {wikipedia &&
                        <Info
                            keyPoint='Wikipedia link'
                            value={
                                <Link
                                    to={wikipedia}
                                    target='_blank'
                                    style={{
                                        color: '#0049C0',
                                        marginRight: '16px',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Wikipedia
                                </Link>
                            }
                        />
                    }
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