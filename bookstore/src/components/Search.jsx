import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import { Button, OutlinedInput, Stack } from '@mui/material';

const Search = () => {
    return (
        <>
            <div className='m-auto my-3 d-flex align-items-center justify-content-center'>
                <FormControl sx={{ width: '55ch' }} >
                    <OutlinedInput placeholder="What are you looking for..." style={{
                        height: '40px',
                        padding: 3,
                        fontWeight: 'bolder'
                    }} />
                </FormControl>
                <Stack direction="row" spacing={2} style={{
                    backgroundColor: 'green',
                    borderRadius: 4,
                    margin: '3px 10px',
                    height: 40
                }}>
                    <Button variant="outlined" style={{ color: 'white' }} startIcon={<SearchIcon style={{ color: 'white' }} />}>
                        Search
                    </Button>
                </Stack>
            </div>
        </>
    )
}

export default Search