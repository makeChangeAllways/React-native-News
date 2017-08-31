/**
 * Created by app on 2017/5/10.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var  localData = require("./LocalData.json");

//导入外部的组件类
var ScrollImage = require("../Component/XMGScrollImage");

var NewsDetail = require("../Component/XMGNewDetail");
var Home = React.createClass({

    getDefaultProps(){

        return{
            url_api:"http://temp.163.com/special/00804KVA/cm_guonei.js?callback=data_callback",
            key_word:'00804KVA'
        };
    },

    getInitialState(){

        return {
            headDataArray : [],
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2)=>r1!== r2})

        };
    },

    render(){
        return (
            <ListView
                dataSource= {this.state.dataSource}
                renderRow= {this.renderRow}
                renderHeader={this.renderHeader}
            />

        );
    },
    renderRow(rowData){
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=>this.pushToNesDetail(rowData)}>

                <View style={styles.cellViewStyle}>

                    <Image source={{uri:rowData.imgsrc}} style={styles.imageStyle}/>

                    <View style={styles.rightViewStyle}>
                        <Text style = {styles.titlesStyle}>{rowData.title}</Text>
                        <Text style = {styles.subTitleStyle}>{rowData.digest}</Text>
                        <Text style={styles.flowTitleStyle}>{rowData.replyCount}跟帖</Text>
                    </View>
                </View>

            </TouchableOpacity>

        );
    },

    pushToNesDetail(data){
        this.props.navigator.push({
            component:NewsDetail,
            title:data.title,
            passProps:{data}
        })

    },
    renderHeader(){
        //判断
        if (this.state.headDataArray.length==0) return;
        return(
            <ScrollImage

                imageDataArr ={this.state.headDataArray}

            />
        );
    },

    //请求网络
    componentDidMount(){
        this.loadingFromNet();
    },

    loadingFromNet(){

        fetch(this.props.url_api)
        .then((response_)=>response.json())
            .then((responseData)=>{

            var jsonData = responseData[this.props.key_word];
            console.log(jsonData);
            this.dealWithData(jsonData);  

        })
        //网络不好的时候 也要显示数据，可以从本地加载
            .catch ((error)=>{
                
            if (error){//特殊处理
                
                alert("请求出错");
                var jsonData = localData[this.props.key_word];
                this.dealWithData(jsonData);
                console.log(this.dealWithData(jsonData));
                
            }

        })


    },
    
    //处理网络数据
    dealWithData(jsonData){
        //定义临时变量
        var headArray = [], listArray = [];

        for (var i = 0 ;i<jsonData.length;i++){

            var data = jsonData[i];
            if (data.hasAD==1){//取出广告数
                headArray = data.ads;
            }else{
                listArray.push(data);

            }
        }

        //更新状态机
        this.setState({
            headDataArray:headArray,
            dataSource:this.state.dataSource.cloneWithRows(listArray)
        });


    }


});

const styles = StyleSheet.create({

    cellViewStyle:{
        //主轴对其方式
        flexDirection:'row',
        //侧轴对其方式
        //alignItems:'center'
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5



    },
    rightViewStyle:{
        width:260,
        marginLeft:8
    },

    imageStyle:{
        height:90,
        width:90,


    },
    titlesStyle:{
        fontSize:16,
        marginBottom:5


    },
    subTitleStyle:{
        color:'gray'


    },
    flowTitleStyle:{
        //绝对定位
        position:'absolute',
        right:10,
        bottom:0,
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:5,
        padding:3,
        color:'gray'


    },

});

//输出类
module.exports = Home;