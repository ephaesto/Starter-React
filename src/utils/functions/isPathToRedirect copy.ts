export const isPathToRedirect = (path: string, redirect: string): boolean => {
  if(path.startsWith(redirect)){
    return true
  }
  return false
}
