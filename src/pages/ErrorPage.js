import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ErrorPage = () => {
    return (
        <Box
            height='100vh'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            mt='-70px'
        >
            <Typography variant='h1'>
                404
            </Typography>
            <Typography variant='h2'>
                Page Not Found!
            </Typography>
        </Box>
    );
};

export default ErrorPage;