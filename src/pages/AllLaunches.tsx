import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import LaunchInfoCard from "../components/LaunchInfoCard";
import { useGetAllLaunchesQuery } from "../services/launchesApi";
import Spinner from "../components/Spinner";

const AllLaunches = () => {
    const { data, isLoading, isSuccess } = useGetAllLaunchesQuery();

    if (isLoading) return <Spinner />;

    return (
        <Container sx={{ py: '60px' }}>
            <Typography variant="h3" pb='60px' textAlign='center'>All Rocket Launches</Typography>
            <Grid container columnSpacing={3} rowSpacing={5}>
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