import React, { Component } from 'react';
import {
  ListView,
  Text,
  Image,
  View
} from 'react-native';
import { loadPopularPhotos } from '../action';
import { connect } from 'react-redux';



class PopularPhotos extends Component {

  componentWillMount() {
    this.props.loadPopularPhotos();
  }

renderPhoto(photo) {
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
  const {popular_photos} = this.props;
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	return(
		<ListView
        contentContainerStyle={styles.list}
        dataSource={ds.cloneWithRows(popular_photos)}
        renderRow={(data) => this.renderPhoto(data)}
      />
  )
}

}
const styles = {
  list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
    }
}

const mapStateToProps = state => {  
  const {popular_photos}  = state.main;
  return {popular_photos};
};

export default connect(mapStateToProps, { loadPopularPhotos })(PopularPhotos);
