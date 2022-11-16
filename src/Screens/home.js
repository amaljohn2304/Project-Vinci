import React from 'react';
import {View, StyleSheet,Text,Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useEffect,useState } from 'react';
import { Buffer } from "buffer";

import BottomBar from '../Components/bottomBar.js';
import { render } from 'react-dom/cjs/react-dom.production.min.js';
import {option} from '../Components/bottomBar.js';


const Home = () => {
    const [opt,setOpt]=useState(0);
    const [tab,setTab]=useState(0);
    const CLOUDINARY_CLOUD_NAME="doqftogqb"
    const CLOUDINARY_API_KEY ="257295441867453"
    const CLOUDINARY_API_SECRET="iT5Ona04lfHQ5SVyaQ-fZQQzZTY"
    const content=[
        "https://res.cloudinary.com/doqftogqb/image/upload/v1667932760/shirt/img3.png.jpg",
        "https://res.cloudinary.com/doqftogqb/image/upload/v1667932738/shirt/img2.png.jpg",
        "https://res.cloudinary.com/doqftogqb/image/upload/v1667932717/shirt/img1.png.jpg",
        "https://res.cloudinary.com/doqftogqb/image/upload/v1667932695/shirt/img0.png.jpg",
    ]

    const [data, setData] = React.useState(content);

    


    console.log("hello"+CLOUDINARY_API_KEY);

    const logResult = 1

    useEffect(() => {
        // Update the document title using the browser API
        console.log("render");

        getStaticProps()
        
    },[opt]);



    async function getStaticProps() {
        let results = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image`, {
        headers: {
        Authorization: `Basic ${Buffer.from(CLOUDINARY_API_KEY + ':' + CLOUDINARY_API_SECRET).toString('base64')}`
        }
    }).then(r => r.json());
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

    console.log(images)

    let filterImage=[]

    if(opt==0){
        for(let i=0;i<images.length;i++){
            console.log(images[i].title.slice(0,5))
            if(images[i].title.slice(0,5)=="shirt"){
                filterImage.push(images[i].url);
            }
        }
    }
    if(opt==1){
        for(let i=0;i<images.length;i++){
            console.log(images[i].title.slice(0,4))
            if(images[i].title.slice(0,4)=="pant"){
                filterImage.push(images[i].url);
            }
        }
    }
    let final=filterImage

    
    //str = str.slice(0, -3);
    for (var i = 0; i < final.length; i++) { 
        final[i]=final[i].slice(0, -3)+"jpg"
    }
    console.log(final)
    
    setData(final)
    return final
    }
    
    return (
        <View>
                    <ScrollView style={{margin:'0.5%'}}>
                    {
                    data.map((items, index) => (
                        <View key={index} style={{width:'100%',aspectRatio:1,alignItems:'center'}}>

                            <Paper uri={items}/>
                        </View>
                    ))
                    }
                    </ScrollView>
                    <TouchableOpacity style={{position:'absolute',right:tab==0?'-25%':'-28%',top:5,backgroundColor:'#F7A4A4',width:'35%',height:'8%',
                    borderBottomEndRadius:0,borderBottomStartRadius:20,borderTopStartRadius:20,borderTopEndRadius:0}}
                    onPress={()=>{if(tab==1){
                        setOpt(0)
                        setTab(0) 
                    }     
                    else{
                        setOpt(1)
                        setTab(1) 
                    }               
                    }}
                    >
                        <Text style={{transform:[{rotateZ:'-90deg'}],right:50,top:-20}}>SHIRT</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{position:'absolute',right:tab==1?'-25%':'-28%',top:90,backgroundColor:'#CFF5E7',width:'35%',height:'8%',
                    borderBottomEndRadius:0,borderBottomStartRadius:20,borderTopStartRadius:20,borderTopEndRadius:0}}
                    onPress={()=>{if(tab==0){
                        setOpt(1)
                        setTab(1) 
                    }         
                    else{
                        setOpt(0)
                        setTab(0) 
                    }             
                    }}
                    >
                        <Text style={{transform:[{rotateZ:'-90deg'}],right:50,top:-20}}>PANT</Text>
                    </TouchableOpacity>
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
