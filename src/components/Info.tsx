import Typography from '@mui/material/Typography';

interface InfoProps {
    keyPoint: string,
    value: string | React.ReactNode
} 

const Info = ({ keyPoint, value }: InfoProps) => {
    return (
        <Typography component='p' variant='body2' gutterBottom>
            <Typography component='span' variant='body2' fontWeight='bold'>{keyPoint}: </Typography>
            {value}
        </Typography>
    );
};

export default Info;