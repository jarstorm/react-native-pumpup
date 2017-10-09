import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native'
import { readMore, readLess } from '../action'
import { connect } from 'react-redux'
import { bool, object, func} from 'prop-types'

class Bio extends Component {

  renderWord(word) {
    if ('@' === word[0]) {
      return (<Text key={word} style={styles.link} onPress={() => 
        Linking.openURL('https://twitter.com/' + word.slice(1))}>{word} </Text>)
    } else if ('#' === word[0]) {
      return (<Text key={word} style={styles.link} onPress={() => 
        Linking.openURL('https://twitter.com/hashtag/' + word.slice(1))}>{word} </Text>)
    } 
    return (<Text key={word}>{word} </Text>)  
  }

  renderLine(line) {
    const parts = line.split(' ')
    return (
      <Text key={line}>
        {parts.map(word => this.renderWord(word))}
        <Text>{'\n'}{'\n'}</Text>
      </Text>
    )
  }

  parseText(text) {
    const lines = text.split('\n\n')
    return lines.map(line => this.renderLine(line))
  }

  render() {
    if (!this.props.expanded) {
      return (
        <View>
          <Text numberOfLines={3}
            ellipsizeMode='tail'
            style={{flexWrap: 'wrap'}}>
            {this.parseText(this.props.profile.bio)} 
          </Text>
          <View style={styles.actionButton}>
            <Text style={styles.actionText} onPress={this.props.readMore}>
              Read more
            </Text>
          </View>
        </View>
      )
    } 
    return (
      <View>
        <Text>{this.parseText(this.props.profile.bio)}</Text>
        <View style={styles.actionButton}>
          <Text style={styles.actionText} onPress={this.props.readLess}>
            Read less
          </Text>   
        </View>
      </View>
    )    
  }
}

Bio.propTypes = {
  expanded: bool.isRequired,
  profile: object.isRequired,
  readMore: func.isRequired,
  readLess: func.isRequired
}

const styles = StyleSheet.create({
  actionButton: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    marginRight: 10
  },
  actionText: {
    color: 'blue'
  },
  link: {
    color: 'blue'
  }
})

const mapStateToProps = state => {  
  const {profile, read_more, expanded}  = state.main
  return {profile, read_more, expanded}
}

export default connect(mapStateToProps, { readMore, readLess })(Bio)

