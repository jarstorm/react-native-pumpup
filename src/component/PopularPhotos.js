import React, { Component } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Dimensions,
  Image,
  View
} from 'react-native'
import { loadPopularPhotos } from '../action'
import { connect } from 'react-redux'
import { bool, array, func} from 'prop-types'

class PopularPhotos extends Component {

  componentWillMount() {
    this.props.loadPopularPhotos()
  }

  _keyExtractor = (item, index) => item.objectId;

  renderPhoto(data) {
    const photo = data.item
    return(
      <View style={styles.slide1} key={photo.objectId}>
        <Image
          style={styles.item}
          source={{uri: photo.thumbnail}}
        />
      </View>
    )
  }

  render() {
    const {loading_popular_photos, popular_photos} = this.props
    
    if (loading_popular_photos) {
      return <ActivityIndicator />
    }

    return(
      <View style={styles.list}>
        <FlatList        
          data={popular_photos}
          renderItem={(data) => this.renderPhoto(data)}        
          keyExtractor={this._keyExtractor}
          numColumns={3}
        />
      </View>  
    )
  }
}

const {width} = Dimensions.get('window')

const styles = {
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    backgroundColor: '#CCC',
    margin: 0,
    width: width/3,
    height: width/3
  }
}

PopularPhotos.propTypes = {
  loading_popular_photos: bool.isRequired,
  loadPopularPhotos: func.isRequired,
  popular_photos: array.isRequired
}

const mapStateToProps = state => {  
  const {loading_popular_photos, popular_photos}  = state.main
  return {loading_popular_photos, popular_photos}
}

export default connect(mapStateToProps, { loadPopularPhotos })(PopularPhotos)
