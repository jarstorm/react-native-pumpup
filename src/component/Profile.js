import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native'
import { loadProfile, readMore, readLess } from '../action'
import { connect } from 'react-redux'
import Bio from './Bio'
import { bool, object, func } from 'prop-types'

class Profile extends Component {

  componentWillMount() {
    this.props.loadProfile()  
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
    const {loading_profile, profile} = this.props    
    if (loading_profile) {
      return <ActivityIndicator />
    }

    return (
      <ScrollView>
        {this.renderProfile(profile)}
      </ScrollView>
    )
  }
}

Profile.propTypes = {
  loading_profile: bool.isRequired,
  loadProfile: func.isRequired,  
  profile: object.isRequired
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
})

const mapStateToProps = state => {  
  const {loading_profile, profile, read_more, expanded}  = state.main
  return {loading_profile, profile, read_more, expanded}
}

export default connect(mapStateToProps, { loadProfile, readMore, readLess })(Profile)
