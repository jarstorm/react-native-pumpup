import {
  LOAD_PROFILE,
  LOAD_USER_PHOTOS,
  LOAD_POPULAR_PHOTOS,
  READ_MORE
} from './types'

export const loadProfile = () => {
  return (dispatch) => {
    const body = {
      '_method': 'GET',
      '_version': '5.0.5',
      '_SessionToken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
    }

    fetch('http://api.pumpup.com/1/classes/User/318381', {
      method: 'post',
      headers: {         
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(data => {      
        dispatch({ type: LOAD_PROFILE, payload: data })
      })
  }
}

export const loadUserPhotos = () => {
  return (dispatch) => {

    const body = {
      'isThumbnailsOnly': true,
      'limit': 5,
      'userId': 2707798,
      '_method': 'POST',
      '_version': '5.0.5',
      '_SessionToken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
    }

    fetch('http://api.pumpup.com/1/functions/feed/profile/load-batch', {
      method: 'post',
      headers: {         
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(data => {      
        dispatch({ type: LOAD_USER_PHOTOS, payload: data })
      })    
  }
}

export const loadPopularPhotos = () => {
  return (dispatch) => {
    const body = {
      'isThumbnailsOnly': true,
      'limit': 18,
      '_method': 'POST',
      '_version': '5.0.5',
      '_SessionToken': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g'
    }

    fetch('http://api.pumpup.com/1/functions/feed/popular/load-batch', {
      method: 'post',
      headers: {         
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },  
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(data => {      
        dispatch({ type: LOAD_POPULAR_PHOTOS, payload: data })
      })    
  }
}

export const readMore = () => {
  return (dispatch) => {
    dispatch({ type: READ_MORE, payload: true })
  }
}

export const readLess = () => {
  return (dispatch) => {
    dispatch({ type: READ_MORE, payload: false })
  }
}
