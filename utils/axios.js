import axios from 'axios'

const intro = axios.create({
  baseURL: 'https://api-record.site/hh-record-intro/',
})

const main = axios.create({
  baseURL: 'https://api-record.site/hh-record/',
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
      'AUTH-TOKEN': auth,
    },
  })
}

function recordsGet(auth) {
  return main.get('records-main/', {
    headers: {
      'AUTH-TOKEN': auth,
    },
    params: {},
  })
}

export async function recordsGetByDate(auth, date) {
  return (
    await main.get('records-main/', {
      headers: {
        'AUTH-TOKEN': auth,
      },
      params: {
        date,
      },
    })
  )?.data?.data
}

function recordsGetId(auth, id) {
  const request = {
    recordId: id,
  }
  return main.post('records/' + id, request, {
    headers: {
      'AUTH-TOKEN': auth,
    },
  })
}

function recordsRegist(auth, title, content, fileKey, thumbnailUrl, themeUse) {
  const request = {
    title,
    content,
    fileKey,
    thumbnailUrl,
    themeUse,
  }
  return main.post('records', request, {
    headers: {
      'AUTH-TOKEN': auth,
    },
  })
}
function recordsDelete(params, auth, id2) {
  const request = {
    id: id2,
  }
  return main.delete(
    'records/' + params,
    {
      headers: {
        'AUTH-TOKEN': auth,
      },
    },
    request
  )
}
function recordsModify(
  params,
  auth,
  id,
  title,
  content,
  fileKey,
  thumbnailUrl,
  themeUse
) {
  const request = {
    id,
    title,
    content,
    fileKey,
    thumbnailUrl,
    themeUse,
  }
  return main.put('records/' + params, request, {
    headers: {
      'AUTH-TOKEN': auth,
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

  return response?.data?.response?.body?.items?.item?.map?.((value) => {
    const temp = value?.locdate.toString?.()
    return `${temp.substr(0, 4)}-${temp.substr(4, 2)}-${temp.substr(6, 2)}`
  })
}

export async function getCalendar(auth, { year, month }) {
  return (
    await main.get('records-calendar', {
      headers: {
        'AUTH-TOKEN': auth,
      },
      params: {
        year,
        month,
      },
    })
  ).data?.data
}

export {
  login,
  signUp,
  myPageCheck,
  recordsGet,
  recordsRegist,
  recordsGetId,
  recordsModify,
  recordsDelete,
}
