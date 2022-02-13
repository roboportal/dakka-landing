import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'

export const Search = ({ handleSearch }) => {
  const [searchPhrase, setSearchPhrase] = useState('')

  const handleChange = (e) => setSearchPhrase(e.target.value)

  useEffect(() => {
    console.log(handleSearch(searchPhrase))
  }, [handleSearch, searchPhrase])

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <SearchIcon />
      <TextField
        value={searchPhrase}
        onChange={handleChange}
        variant="standard"
        inputProps={{
          onFocus: () => console.log('focus'),
          onBlur: () => console.log('blur'),
        }}
      />
    </Box>
  )
}
