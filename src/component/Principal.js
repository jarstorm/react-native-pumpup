import React, { Component } from 'react'
import {    
  ScrollView
} from 'react-native'
import Profile from './Profile'
import PumpupSwiper from './PumpupSwiper'
import PopularPhotos from './PopularPhotos'

class Principal extends Component {

  render() {
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
