import React, { Component } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  Image,  
  View
} from 'react-native'
import Swiper from 'react-native-swiper'
import { loadUserPhotos } from '../action'
import { connect } from 'react-redux'
const { width } = Dimensions.get('window')
import { bool, array, func } from 'prop-types'

class PumpupSwiper extends Component {

  componentWillMount() {
    this.props.loadUserPhotos()
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
    const {loading_user_photos, user_photos} = this.props    
    if (loading_user_photos) {
      return <ActivityIndicator />
    }

    return(
      <View>
        <Swiper showsButtons={true} height={400}>
          {user_photos.map(photo => this.renderPhoto(photo))}
        </Swiper>
      </View>
    )
  }

}


PumpupSwiper.propTypes = {
  loading_user_photos: bool.isRequired, 
  loadUserPhotos: func.isRequired,  
  user_photos: array.isRequired
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
  const {loading_user_photos, user_photos}  = state.main
  return {loading_user_photos, user_photos}
}

export default connect(mapStateToProps, { loadUserPhotos })(PumpupSwiper)
