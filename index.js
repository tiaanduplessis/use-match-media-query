import { useRef, useState, useEffect } from 'react'

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
