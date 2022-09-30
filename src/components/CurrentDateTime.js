import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';


function CurrentDateTime() {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);
    return (
        <div>
            <Typography variant='p'>

              {' '}
              {dateState.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              {' '}
             {dateState.toLocaleString('en-US', {
                 hour: 'numeric',
                 minute: 'numeric',
                 hour12: true,
                })}
            </Typography>
        </div>
    );
}

export { CurrentDateTime };