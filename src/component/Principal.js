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
import { loadData } from '../action';
import { connect } from 'react-redux';
import { Card, Avatar } from 'react-native-elements'
import PumpupSwiper from './PumpupSwiper';

class Principal extends Component {

  componentWillMount() {
    this.props.loadData();
  }

  renderProfile = (profile) => {
    return (
      <View>
        <Card title="CARD WITH 2">          
          <Avatar
            large
            roounded
            source={{uri: profile.profileThumbnail}}
            activeOpacity={0.7}
          />
          <Text>
              {profile.bio}
          </Text>
        </Card>
        <PumpupSwiper />
        

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
      <ScrollView style={styles.contentContainer}>
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

export default connect(mapStateToProps, { loadData })(Principal);
