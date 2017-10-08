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
import { loadProfile } from '../action';
import { connect } from 'react-redux';
import { Card, Avatar } from 'react-native-elements'

class Profile extends Component {

  componentWillMount() {
    this.props.loadProfile();
  }

  renderProfile = (profile) => {
    return (
      <View>
        <Card>
          <View style={{flexDirection: 'row'}}>
          <Avatar
            large
            roounded
            source={{uri: profile.profileThumbnail}}
            activeOpacity={0.7}
          />
          <Text>
              {profile.bio}
          </Text>
          </View>
        </Card>
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
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  typeButton: {
    padding: 5,
  },
  flashButton: {
    padding: 5,
  },
  buttonsSpace: {
    width: 10,
  },
});

const mapStateToProps = state => {  
  const {profile, loading}  = state.main;
  return {profile, loading};
};

export default connect(mapStateToProps, { loadProfile })(Profile);
