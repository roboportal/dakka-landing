import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { useState, useRef, useMemo } from 'react'
import Popper from '@mui/material/Popper'
import { css } from '@emotion/react'
import Link from 'next/link'

export const Search = ({ handleSearch }) => {
  const [searchPhrase, setSearchPhrase] = useState('')
  const [_isPopperOpen, setIsPopperOpen] = useState(false)

  const anchorElementRef = useRef(null)
  const isMouseOverRef = useRef(false)

  const handleChange = (e) => setSearchPhrase(e.target.value)
  const handleFocus = () => setIsPopperOpen(true)
  const handleBlur = () => {
    if (!isMouseOverRef.current) {
      setIsPopperOpen(false)
    }
  }

  const searchResults = useMemo(
    () => handleSearch(`${searchPhrase}*`),
    [handleSearch, searchPhrase],
  )

  const handleMouseEnter = () => (isMouseOverRef.current = true)
  const handleMouseLeave = () => (isMouseOverRef.current = false)

  const handleLinkClick = () => {
    setIsPopperOpen(false)
    setSearchPhrase('')
  }

  const isPopperOpen = _isPopperOpen && !!searchResults.length

  return (
    <Box
      css={css`
        display: flex;
        align-items: flex-start;
      `}
    >
      <SearchIcon />
      <TextField
        ref={anchorElementRef}
        value={searchPhrase}
        onChange={handleChange}
        variant="standard"
        inputProps={{
          onFocus: handleFocus,
          onBlur: handleBlur,
        }}
      />
      <Popper open={isPopperOpen} anchorEl={anchorElementRef.current}>
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          css={css`
            display: flex;
            flex-direction: column;
            background-color: white;
            padding: 16px;
          `}
        >
          {searchResults.map(({ id, title }) => (
            <Link key={title} href={`/documentation/${id}`}>
              <a
                onClick={handleLinkClick}
                css={css`
                  margin-bottom: 8px;
                  text-decoration: none;
                  cursor: pointer;

                  &:hover {
                    text-decoration: underline;
                  }
                `}
              >
                {title}
              </a>
            </Link>
          ))}
        </Box>
      </Popper>
    </Box>
  )
}
