import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useGetAllLaunchesQuery } from "../services/launchesApi";
import LaunchInfoCard from "../components/LaunchInfoCard";
import Spinner from "../components/Spinner";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

const Home = () => {
    const { data, isLoading, isSuccess } = useGetAllLaunchesQuery();

    if (isLoading) return <Spinner />;

    return (
        <>
            <Container sx={{ py: '60px' }}>
                <Typography variant="h3" paddingBottom='60px' textAlign='center'>Rocket Launches</Typography>
                <Grid container columnSpacing={2.5} rowSpacing={5}>
                    {isSuccess && data.slice(0, 6).map((launch, i) => {
                        return (
                            <Grid key={i} item xs={12} sm={6} md={4}>
                                <LaunchInfoCard launch={launch} />
                            </Grid>
                        )
                    })}
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
                    <Link to='/launches' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="large">See All Launches</Button>
                    </Link>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default Home;