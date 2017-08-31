/**
 * Created by app on 2017/5/10.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

var NewsDetail = React.createClass({

    getDefaultProps(){
        return{

        }
    },

    getInitialState(){
        return{
            detailData:''

        }

    },
    render() {
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                style={styles.webView}
                source={{html:this.state.detailData, baseUrl:''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />
        );
    },

    componentDidMount(){

        var  url_api ='http://c.3g.163.com/nc/article/' + this.props.data.docid + '/full.html';
        fetch(url_api)
            .then((response)=>response.json())
            .then((responseData)=>{

            var allData = responseData[this.props.data.docid];

            var bodyHtml = allData['body'];

            if (allData['img'].length>0){

                for (var i= 0 ;i<allData['img'].length;i++){

                    var img = allData['img'][i];
                    var imgSrc = img['src'];

                    var  imgHtml = '<img src="'+imgSrc+ '" width = "100%">';

                    bodyHtml = bodyHtml.replace(img['ref'], imgHtml);

                    console.log(bodyHtml);
                }

            }


                this.setState({

                    detailData:bodyHtml
                });

            })

            .catch((error)=>{

              alert("数据请求失败");
            })




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

});

//输出类
module.exports = NewsDetail;