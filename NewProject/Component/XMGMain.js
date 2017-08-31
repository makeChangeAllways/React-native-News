/**
 * Created by app on 2017/5/10.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

//引入外部的组件

var Home= require('../Component/XMGHome');
var Find= require('../Component/XMGFind');
var Message= require('../Component/XMGMessage');
var Mine= require('../Component/XMGMine');

var Main = React.createClass({

    //初始化方法
    getInitialState(){
        return{
            selectedItem:'home'//默认首页被选中
        }
    },

    render() {
        return (
            <TabBarIOS
                tintColor={"orange"}
            >
                {/*首页*/}
                <TabBarIOS.Item
                    icon = {require("../ios/NewProject/Images.xcassets/Tabbar/tabbar_home.imageset/tabbar_home.png")}
                    title = "首页"
                    selected={this.state.selectedItem=='home'}
                    onPress={()=>{this.setState({selectedItem:'home'})}}
                >

                   <NavigatorIOS
                       style={{flex:1}}
                       tintColor={"orange"}
                       initialRoute = {{

                           component:Home,//具体的版块
                           title:'网易',
                           leftButtonIcon:require("../ios/NewProject/Images.xcassets/NavigationBar/navigationbar_friendattention.imageset/navigationbar_friendattention.png"),
                           rightButtonIcon:require("../ios/NewProject/Images.xcassets/NavigationBar/navigationbar_pop.imageset/navigationbar_pop.png")

                   }}/>

                </TabBarIOS.Item>

                {/*消息*/}
                <TabBarIOS.Item
                    icon = {require("../ios/NewProject/Images.xcassets/Tabbar/tabbar_message_center.imageset/tabbar_message_center.png")}
                    title = "消息"
                    selected={this.state.selectedItem=='message'}
                    onPress={()=>{this.setState({selectedItem:'message'})}}
                >
                   <NavigatorIOS style = {{flex:1}}
                       initialRoute = {{

                           component:Message,
                           title:'消息'
                   }}/>

                </TabBarIOS.Item>

                {/*发现*/}
                <TabBarIOS.Item
                    icon = {require("../ios/NewProject/Images.xcassets/Tabbar/tabbar_discover.imageset/tabbar_discover.png")}
                    title = "发现"
                    selected={this.state.selectedItem=='find'}
                    onPress={()=>{this.setState({selectedItem:'find'})}}
                >
                   <NavigatorIOS style={{flex:1}}
                       initialRoute = {{

                           component:Find,
                           title:'发现'
                   }}/>
                </TabBarIOS.Item>

                {/*我的*/}
                <TabBarIOS.Item
                    icon = {require("../ios/NewProject/Images.xcassets/Tabbar/tabbar_profile.imageset/tabbar_profile.png")}
                    title = "我的"
                    selected={this.state.selectedItem=='mine'}
                    onPress={()=>{this.setState({selectedItem:'mine'})}}
                >
                   <NavigatorIOS style = {{flex:1}}
                       initialRoute = {{

                           component:Mine,
                           title:'我的'
                   }}/>
                </TabBarIOS.Item>

            </TabBarIOS>

        );
    }
});

//输出类
module.exports = Main;