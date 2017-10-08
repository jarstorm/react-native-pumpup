import {
  LOAD_PROFILE,
  LOAD_USER_PHOTOS,
  LOAD_POPULAR_PHOTOS
} from './types';

const PROFILE_RESULT = {"bio":"Motivation to become the best version of you!  💙💪🌎\n\nIt's #ActiveOctober\n\nShare your photos all month long to be featured!\n\n👻 Snapchat @PumpUp\n\nGet your #TeamPumpUp gear ⬇️",
  "birthday":{"__type":"Date","iso":"1992-02-17T00:00:00.000Z"},
  "followerCount":707674,"followingCount":335,"gender":2,
  "lastActiveDate":{"__type":"Date","iso":"2017-10-06T16:54:08.394Z"},
  "location":"Toronto, Canada","name":"pumpup","postCount":2931,
  "profileImage":"https://d1m37qdzmw041i.cloudfront.net/photos/users/profile/image/318381-1505247817263.jpg",
  "profileThumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/users/profile/thumbnail/318381-1505247817815.jpg",
  "role":3,"website":"https://store.pumpup.com","createdAt":"2014-02-03T07:21:44.372Z","updatedAt":"2017-10-06T17:57:13.079Z","className":"User","objectId":318381};

const USER_PHOTOS = {"result":
      {"posts":[
          {"createdAt":"2016-09-16T22:18:13.091Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/17517155-1474064295274.jpg","className":"Post","objectId":17517155,"__type":"Object"},
          {"createdAt":"2016-03-23T20:42:20.304Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080756-1458765641755.jpg","className":"Post","objectId":16080756,"__type":"Object"},
          {"createdAt":"2016-03-23T20:39:22.673Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080726-1458765465153.jpg","className":"Post","objectId":16080726,"__type":"Object"},
          {"createdAt":"2016-03-23T20:26:58.405Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080559-1458764720696.jpg","className":"Post","objectId":16080559,"__type":"Object"},
          {"createdAt":"2016-03-23T20:09:03.645Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/16080362-1458763645300.jpg","className":"Post","objectId":16080362,"__type":"Object"}
          ]}};

const POPULAR_PHOTOS = {"result":
      {"posts":[
          {"createdAt":"2017-10-06T20:37:04.928Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538610-1507322230781.jpg","className":"Post","objectId":18538610,"__type":"Object"},
          {"createdAt":"2017-10-06T20:31:37.205Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538607-1507321900679.jpg","className":"Post","objectId":18538607,"__type":"Object"},
          {"createdAt":"2017-10-06T20:14:03.004Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538602-1507320846446.jpg","className":"Post","objectId":18538602,"__type":"Object"},
          {"createdAt":"2017-10-06T20:11:13.217Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538598-1507320681459.jpg","className":"Post","objectId":18538598,"__type":"Object"},
          {"createdAt":"2017-10-06T19:55:31.764Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538584-1507319736283.jpg","className":"Post","objectId":18538584,"__type":"Object"},
          {"createdAt":"2017-10-06T19:42:35.823Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538575-1507318960948.jpg","className":"Post","objectId":18538575,"__type":"Object"},
          {"createdAt":"2017-10-06T19:30:50.439Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538567-1507318255620.jpg","className":"Post","objectId":18538567,"__type":"Object"},
          {"createdAt":"2017-10-06T19:30:46.179Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538566-1507318250751.jpg","className":"Post","objectId":18538566,"__type":"Object"},
          {"createdAt":"2017-10-06T19:11:52.238Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538557-1507317116520.jpg","className":"Post","objectId":18538557,"__type":"Object"},
          {"createdAt":"2017-10-06T19:05:01.018Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538554-1507316706316.jpg","className":"Post","objectId":18538554,"__type":"Object"},
          {"createdAt":"2017-10-06T18:53:44.377Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538552-1507316026107.jpg","className":"Post","objectId":18538552,"__type":"Object"},
          {"createdAt":"2017-10-06T18:51:21.730Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538551-1507315886129.jpg","className":"Post","objectId":18538551,"__type":"Object"},
          {"createdAt":"2017-10-06T18:38:32.123Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538538-1507315115782.jpg","className":"Post","objectId":18538538,"__type":"Object"},
          {"createdAt":"2017-10-06T18:34:10.350Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538532-1507314855918.jpg","className":"Post","objectId":18538532,"__type":"Object"},
          {"createdAt":"2017-10-06T18:24:26.990Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538519-1507314270742.jpg","className":"Post","objectId":18538519,"__type":"Object"},
          {"createdAt":"2017-10-06T18:06:38.258Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538509-1507313201359.jpg","className":"Post","objectId":18538509,"__type":"Object"},
          {"createdAt":"2017-10-06T17:55:03.553Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538500-1507312511212.jpg","className":"Post","objectId":18538500,"__type":"Object"},
          {"createdAt":"2017-10-06T17:54:37.158Z","thumbnail":"https://d1m37qdzmw041i.cloudfront.net/photos/posts/thumbnails/18538499-1507312481212.jpg","className":"Post","objectId":18538499,"__type":"Object"}
          ]}};
          
export const loadProfile = () => {
  return (dispatch) => {
  	/*var payload = {
      "_method": "GET",
      "_version": "5.0.5",
      "_SessionToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjI3MDc3OTgsImV4cCI6MTUzOTUzNTI1OTM2OH0.UK2qP1yk9QLk_Bkx1Ly0RPaitRYtec8ojZhzYRc0D-g"
    };

    var data = new FormData();
    data.append( "json",  payload);
    console.log(data)

    fetch("http://api.pumpup.com/1/classes/User/318381", {
        method: "post",
        headers: {         
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },  
        body: data
    })
    .then(response => {response.json(); console.log(response);})
  	.then(response => {
      console.log(response);
  		const arr = [];
  		arr.push(response);
  		dispatch({ type: LOADED_DATA, payload: arr });
  	});*/
    dispatch({ type: LOAD_PROFILE, payload: PROFILE_RESULT });
  };
};


export const loadUserPhotos = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_USER_PHOTOS, payload: USER_PHOTOS });
  };
};

export const loadPopularPhotos = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_POPULAR_PHOTOS, payload: POPULAR_PHOTOS });
  };
};
