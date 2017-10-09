import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  View,
  Linking
} from 'react-native';
import { loadProfile, readMore, readLess } from '../action';
import { connect } from 'react-redux';
import { Card, Avatar } from 'react-native-elements'
import ReadMore from '@expo/react-native-read-more-text';
import Autolink from 'react-native-autolink';
import Bio from './Bio';

class Profile extends Component {

  componentWillMount() {
    this.props.loadProfile();
  }

  renderProfile = (profile) => {
    return (
      <View style={styles.container}>        
          <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.image}
            source={{uri: profile.profileThumbnail}}
          />
          <View style={{flexDirection: 'column', flex: 2}}>
            <Text style={styles.name}>
              {profile.name} 
            </Text>
            <Bio />
            </View>
          </View>        
      </View>
    )
  }

  render() {
    const {loading, profile} = this.props;
    // If we're loading, show a spinner.
    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <ScrollView>
        {this.renderProfile(profile)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  name: {
    fontWeight: 'bold'
  },
  image: {
    width: 50, 
    height: 50, 
    borderRadius: 50, 
    borderColor: 'black', 
    borderWidth: 1, 
    marginLeft: 5, 
    marginRight: 5, 
    flex:0
  }
});

const mapStateToProps = state => {  
  const {profile, loading, read_more, expanded}  = state.main;
  return {profile, loading, read_more, expanded};
};

export default connect(mapStateToProps, { loadProfile, readMore, readLess })(Profile);
