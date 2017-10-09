import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  Image,
  Button,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import { loadUserPhotos } from '../action';
import { connect } from 'react-redux';
const { width } = Dimensions.get('window');

class PumpupSwiper extends Component {

componentWillMount() {
    this.props.loadUserPhotos();
  }





renderPhoto(photo) {
return(
<View style={styles.slide} key={photo.objectId}>
    <Image
          style={{flex: 1, width}}
          source={{uri: photo.thumbnail}}
        />
  </View>
  )
}

render() {
  const {user_photos} = this.props;
console.log(user_photos);
	return(
		<View>
      <Swiper showsButtons={true} height={400}>
        {user_photos.map(photo => this.renderPhoto(photo))}
    </Swiper>
    </View>
  )
}

}
const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  }
}

const mapStateToProps = state => {  
  const {user_photos}  = state.main;
  return {user_photos};
};

export default connect(mapStateToProps, { loadUserPhotos })(PumpupSwiper);
