import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert
} from 'react-native';

import Note from './note';

export class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        };
        this.addInitialNotes()
    }
    render() {
        let notes = this.state.noteArray.map((val, key)=>{
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)}
                    updateMethod={()=>this.updateNote(key)}/>
        });

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Not Defteri</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='Yeni notunuzu buraya giriniz.'
                        onChangeText={(noteText)=> this.setState({noteText})}
                        value={this.state.noteText}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
    
    addInitialNotes(){
        this.state.noteArray.push({
            'date': "9.5.2018",
            'note': "Cuma günü Network Proje teslimi var"
        });
        this.state.noteArray.push({
            'date': "10.5.2018",
            'note': "React Native sunumu hazırla"
        });
        this.setState({ noteArray: this.state.noteArray });
        this.setState({noteText:''});
    }

    addNote(){
        if(this.state.noteText){
            var d = new Date();
            this.state.noteArray.push({
                'date': d.getDate()+ "." + (d.getMonth()+1) + "."+ d.getFullYear(),
                'note': this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({noteText:''});
        }
        else{
            Alert.alert(
                'Notunuz boş olmamalı.'
             )
        }
    }
    

    deleteNote(key){
        Alert.alert(
            'Notunuz silinsin mi?',null,
            [
              {text: 'Sil', onPress: () => this.delete(key)},
              {text: 'İptal', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
            ],
            { }
          )
    }

    delete(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray});
    }

    updateNote(key){
       this.state.noteArray[key] = this.state.noteText;
       this.setState({noteArray: this.state.noteArray});
       this.setState({noteText:''});
    }
}

export default Main


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(32, 53, 70)",
    },
    header: {
        backgroundColor: '#008000',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#32CD32'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#008000',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 10,
        bottom: 80,
        backgroundColor: '#008000',
        width: 70,
        height: 70,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});