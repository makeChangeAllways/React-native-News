/**
 * Created by app on 2017/7/3.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var Socket = React.createClass({

    render() {

        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={()=>this.ConnectToSocket()}>
                <View style={{marginTop:15}}>
                    <Text style={styles.textStyle}>Socket连接</Text>
                </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.confirmSocket()}>
                    <View style={{marginTop:15}}>
                        <Text style={styles.textStyle}>认证</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.disconnectSocket()}>
                    <View style={{marginTop:15}}>
                        <Text style={styles.textStyle}>断开</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );




    },

    ConnectToSocket(){

        var ws = new WebSocket("ws://192.168.1.105:9091");

        ws.onopen =() => {

            //ws.send('4114444303030303230313741303132000000000000000032001C0000083838383838383838 ');

            alert('成功');
        };

        ws.onerror = (e) => {

            alert(e.message);
        };
        ws.onmessage = (e) => {
            // 接收到了一个消息
            alert(e.data);
        };

    },
    confirmSocket(){

        //ws.send('4114444303030303230313741303132000000000000000032001C0000083838383838383838 ');
        alert('认证成功');
    },
    disconnectSocket(){

        alert('断开');
    },





});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textStyle:{
        fontSize:18,
        color:'blue'
    }

});

//输出类
module.exports = Socket;