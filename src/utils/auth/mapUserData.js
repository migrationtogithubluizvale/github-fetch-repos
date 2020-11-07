export const mapUserData = (user) => {
  const { uid, email, xa, ya, providerData } = user
  const helperProviderData = providerData.find(data => data.displayName != null)

  return {
    id: uid,
    email,
    token: xa || ya,
    displayName: helperProviderData ? helperProviderData.displayName : null
  }
}
