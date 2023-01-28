import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='100vh'
        >
            <CircularProgress disableShrink />
        </Box>
    );
};

export default Spinner;