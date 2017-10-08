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
import ReadMore from '@expo/react-native-read-more-text';
import Autolink from 'react-native-autolink';

class Profile extends Component {

  componentWillMount() {
    this.props.loadProfile();
  }

_renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={{marginTop: 5}} onPress={handlePress}>
        Read more
      </Text>
    );
  }

  _renderRevealedFooter = (handlePress) => {
    return (
      <Text style={{ marginTop: 5}} onPress={handlePress}>
        Show less
      </Text>
    );
  }

  parseText(text) {
    return text;
  }

  renderProfile = (profile) => {
    return (
      <View style={styles.container}>        
          <View style={{flexDirection: 'row'}}>
          <Avatar
            large
            roounded
            source={{uri: profile.profileThumbnail}}
            activeOpacity={0.7}
          />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>
              {profile.name}
            </Text>
            <ReadMore
                numberOfLines={3}
                renderTruncatedFooter={this._renderTruncatedFooter}
                renderRevealedFooter={this._renderRevealedFooter}
                onReady={this._handleTextReady}>
                <Autolink
                  text={profile.bio}
                  hashtag="instagram"
                  mention="twitter" />
              </ReadMore>
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
  }
});

const mapStateToProps = state => {  
  const {profile, loading}  = state.main;
  return {profile, loading};
};

export default connect(mapStateToProps, { loadProfile })(Profile);
