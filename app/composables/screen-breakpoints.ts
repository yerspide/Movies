import { useBreakpoints } from "#imports";
import { MAX_LG, MAX_MD, MAX_SM, MAX_XL } from '@/constants/screens'

export function useScreenBreakpoints() {
  const breakpoints = useBreakpoints({
    xl: MAX_XL + 1,
    lg: MAX_LG + 1,
    md: MAX_MD + 1,
    sm: MAX_SM + 1
  })

  const isSm = breakpoints.smaller('sm')
  const isMd = breakpoints.between('sm', 'md')
  const isLg = breakpoints.between('md', 'lg')
  const isXl = breakpoints.between('lg', 'xl')
  const isDesktop = breakpoints.greaterOrEqual('xl')

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    isDesktop
  }
}