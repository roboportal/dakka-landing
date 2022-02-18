import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import { useState, useRef, useMemo } from 'react'
import Popper from '@mui/material/Popper'
import { css } from '@emotion/react'
import Link from 'next/link'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'

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

  const searchResults = useMemo(() => {
    const searchTerm = searchPhrase
      .split(' ')
      .filter((it) => !!it)
      .map((it) => it + '*')
      .join(' ')

    return handleSearch(searchTerm)
  }, [handleSearch, searchPhrase])

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

        @media (max-width: 900px) {
          width: 100%;
          justify-content: end;
        }
      `}
    >
      <Paper
        ref={anchorElementRef}
        component="form"
        css={css`
          box-shadow: none;
          border: 1px solid #eaeaea;
          padding: 0px 8px;
          display: flex;
          align-items: center;
          width: 280px;
          border-radius: 2px;

          @media (max-width: 900px) and (min-width: 678px) {
            margin-top: 24px;
            margin-right: 20px;
            margin-left: 20px;
            width: 45%;
          }

          @media (max-width: 678px) {
            margin-top: 24px;
            width: 100%;
          }
        `}
      >
        <SearchIcon
          css={css`
            color: #787878;
          `}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          value={searchPhrase}
          onChange={handleChange}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{
            onFocus: handleFocus,
            onBlur: handleBlur,
          }}
        />
      </Paper>

      <Popper
        css={css`
          margin-top: 20px;
          border: 1px solid #eaeaea;
          border-radius: 4px;
          width: 280px;
        `}
        open={isPopperOpen}
        anchorEl={anchorElementRef.current}
      >
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
                  color: #4a4a4a;
                  &:hover {
                    text-decoration: underline;
                    color: #046e7a;
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
