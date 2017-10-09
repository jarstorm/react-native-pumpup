import React, { Component } from 'react'
import {    
  ActivityIndicator,
  ScrollView
} from 'react-native'
import Profile from './Profile'
import PumpupSwiper from './PumpupSwiper'
import PopularPhotos from './PopularPhotos'

class Principal extends Component {

  render() {
    const {loading} = this.props
    // If we're loading, show a spinner.
    if (loading) {
      return <ActivityIndicator />
    }

    return (
      <ScrollView>
        <Profile />
        <PumpupSwiper />
        <PopularPhotos />
      </ScrollView>
    )
  }
}

export default Principal
