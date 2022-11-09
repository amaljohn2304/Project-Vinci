import React from 'react';
import {View, StyleSheet,Text,Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useEffect,useState } from 'react';
import { Buffer } from "buffer";

import BottomBar from '../Components/bottomBar.js';
import { render } from 'react-dom/cjs/react-dom.production.min.js';



const Home = () => {
    const CLOUDINARY_CLOUD_NAME="doqftogqb"
    const CLOUDINARY_API_KEY ="257295441867453"
    const CLOUDINARY_API_SECRET="iT5Ona04lfHQ5SVyaQ-fZQQzZTY"
    const content=[
        {
            url:'https://res.cloudinary.com/doqftogqb/image/upload/v1667483817/img4.png.png',
        },
        {
            url:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            url:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        },
        {
            url:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            url:'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        },
        {
            url:'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
        },
    ]

    const [data, setData] = React.useState(content);




    console.log("hello"+CLOUDINARY_API_KEY);


    useEffect(() => {
        // Update the document title using the browser API
        console.log("render");

        getStaticProps()
        
    },[data]);



    async function getStaticProps() {
        console.log("hello")
        let results = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image`, {
        headers: {
        Authorization: `Basic ${Buffer.from(CLOUDINARY_API_KEY + ':' + CLOUDINARY_API_SECRET).toString('base64')}`
        }
    }).then(r => r.json());
    console.log(results)
    let { resources } = results;
    let images = resources.map(resource => {
        const { width, height } = resource;
        return {
        id: resource.asset_id,
        title: resource.public_id,
        url: resource.secure_url,
        width,
        height
        }
    });
    let final=images.map((items, index) => (
        items.url
    ))
    console.log(final)
    return final
    console.log(data)
    }
    
    return (
        <View>
                    <ScrollView style={{margin:'0.5%'}}>
                    {
                    content.map((items, index) => (
                        <View key={index} style={{width:'100%',aspectRatio:1,alignItems:'center'}}>
                            <Paper uri={items.url}/>
                        </View>
                    ))
                    }
                    </ScrollView>
                    <BottomBar>

                    </BottomBar>
        </View>
    );
}

const Paper = (props) => {
    return (
    <View style={{margin:'2.5%'}}>
        <TouchableOpacity >
            <Image source={{uri:props.uri}} style={{height:'100%',aspectRatio:0.8,
            borderRadius:10,borderWidth:1,borderColor:'#dddddd'}}/>
        </TouchableOpacity>
    </View>
    );
}

export default Home;
