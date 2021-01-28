import { useMatchMediaQuery } from 'use-match-media-query'

export const Comp = () => {
  const isMobile = useMatchMediaQuery('screen and (max-width: 60em')
  return isMobile ? 'on mobile' : 'not on mobile'
}
