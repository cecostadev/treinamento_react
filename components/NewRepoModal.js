import React, {Component} from 'react';
import {
    View,
    Text,
    Modal,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class NewRepoModal extends Component {
    
    state = {
        newRepoText : ''
    };
    
    render(){        
        return (
            <Modal animationType="fade" transparent={true} visible={this.props.visible}> 
                <View style={styles.modalContainer}>
                    <View style={styles.boxContainer}>
                        <TextInput
                            autoFocus
                            onRequestClose={this.handleCloseModal}
                            style={styles.boxInput}
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholder="author/repositorio"
                            value={this.state.newRepoText}
                            onChangeText={newRepoText => this.setState({newRepoText})}
                        />

                        <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={this.props.onCancel} >
                            <Text style={styles.buttonText}> Cancelar </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={()=>this.props.onAdd(this.state.newRepoText)}>
                            <Text style={styles.buttonText}> Adicionar </Text>
                        </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContainer: {
        padding:20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        width:280,
        height: 190
    },
    boxInput: {
        alignSelf: 'stretch',
        marginTop: 35,
        paddingVertical: 0,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#DDD',
        height: 40,
        borderRadius: 3
    },
    buttonContainer: {
        marginTop: 10,
        height: 40,
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:3 
    },
    cancelButton: {
        backgroundColor: '#E25F5F',
        marginRight: 5
    },
    submitButton: {
        backgroundColor: '#70BD85',
        marginLeft: 5
    }
});