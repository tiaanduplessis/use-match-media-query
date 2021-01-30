import { useRef, useState, useEffect } from 'react'

/**
 * Match Media as a React hook
 * 
 * @param {String} queryStr Media query string
 * 
 * @returns {Boolean} match Matches query
 */
export const useMatchMediaQuery = queryStr => {
  const matchMedia = useRef(window.matchMedia(queryStr))
  const [match, setMatch] = useState(matchMedia.current.matches)

  useEffect(() => {
    const handleMediaChange = event => {
      setMatch(event.matches)
    }

    matchMedia.current.addListener(handleMediaChange)
    return matchMedia.current.removeListener(handleMediaChange)
  }, [])

  return match
}
