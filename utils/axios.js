import axios from 'axios'

const intro = axios.create({
  baseURL: 'http://3.36.30.114:9999/hh-record-intro/',
})

const main = axios.create({
  baseURL: 'http://3.36.30.114:9999/hh-record/',
})

const calendar = axios.create({})

// const image = axios.create({
//     baseURL:'http://3.36.30.114:9999/image/'
// })

function login(request) {
  return intro.post('login', request)
}

function signUp(request) {
  return intro.post('sign-up', request)
}

function myPageCheck(auth) {
  return main.get('my-page/', {
    headers: {
      AUTH_TOKEN: auth,
    },
  })
}

function recordsGet(auth) {
  return main.get(
    'records-main/',
    {
      headers: {
        AUTH_TOKEN: auth,
      }
    }
  )
}

function recordsGetId(auth, id) {
  const request = {
    recordId:id
  }
  return main.post(
    'records/'+id,
    request,
    {
      headers: {
        AUTH_TOKEN: auth,
      }
    },
    
  )
}

function recordsRegist(auth, title2, content2, fileKey2, thumbnailUrl2) {
  const request = {
    title: title2,
    content: content2,
    fileKey: fileKey2,
    thumbnailUrl: thumbnailUrl2,
  }
  return main.post('records', request, {
    headers: {
      AUTH_TOKEN: auth,
    },
  })
}

export async function fetchHoliday({ year, month }) {
  const response = await calendar.get('/getRestDeInfo', {
    params: {
      ServiceKey: process.env.KASI_API_KEY,
      solYear: year,
      solMonth: month,
      _type: 'json',
    },
  })

  console.log(response)
  return response?.data?.response?.body?.items?.item?.map?.((value) => {
    const temp = value?.locdate.toString?.()
    console.log(temp)
    return `${temp.substr(0, 4)}-${temp.substr(4, 2)}-${temp.substr(6, 2)}`
  })
}

export { login, signUp, myPageCheck, recordsGet, recordsRegist, recordsGetId }
