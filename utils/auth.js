const setSession = function (token2) {
  const object = { token: token2, expire: new Date() }
  sessionStorage.setItem('SESSION', btoa(JSON.stringify(object)))
}

function getSession() {
  if (sessionStorage.getItem('SESSION') == null) {
    return null
  }
  try {
    const object = sessionStorage.getItem('SESSION')
    return object
  } catch (error) {
    return null
  }
}

const checkSession = function () {
  const token = getSession()
  if (token == null) {
    return false
  } else {
    return true
  }
}

export { setSession, getSession, checkSession }
