import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import LaunchInfoCard from "../components/LaunchInfoCard";
import { useGetAllLaunchesQuery } from "../services/launchesApi";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const AllLaunches = () => {
    const { data, isLoading, isSuccess } = useGetAllLaunchesQuery()
    console.log(data)

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <Container sx={{ py: '60px' }}>
            <Typography variant="h3" paddingBottom='60px' textAlign='center'>All Rocket Launches</Typography>
            <Grid container columnSpacing={2.5} rowSpacing={5}>
                {isSuccess && data.map((launch, i) => {
                    return (
                        <Grid key={i} item xs={12} sm={6} md={4}>
                            <LaunchInfoCard launch={launch} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};

export default AllLaunches;