export const pathToRedirect = (path: string, redirect: string): string => {
  if(path.startsWith(redirect)){
    return path
  }
  return redirect
}
