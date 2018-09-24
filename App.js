/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Repo from './components/Repo';
import NewRepoModal from './components/NewRepoModal';



type Props = {};
export default class App extends Component<Props> {

  state = {
    modalVisible: false,
    repos : [
      {
        id:1,
        thumb:'',
        title: 'Repo',
        author: 'autor'
      },
      {
        id:1,
        thumb:'',
        title: 'Repo',
        author: 'autor'
      }
    ]
  
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Go Native!</Text>
          <TouchableOpacity onPress={()=> {this.setState({modalVisible:true})}}> 
            <Text style={styles.headerButton}> + </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>
        {this.state.repos.map(repo => <Repo key={repo.id} data={repo} />)}
        </ScrollView>
        <NewRepoModal onCancel={() => this.setState({modalVisible: false})} visible={this.state.modalVisible} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: (Platform.OS === 'ios' ? 70 : 50),
    paddingTop: (Platform.OS === 'ios' ? 20 : 0),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  repoList: {
    padding:20
  }
});
