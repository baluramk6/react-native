import React from "react";
import {View,Text,SafeAreaView,StyleSheet,useColorScheme} from "react-native"


function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === "light"
    
    return(
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World Pro</Text>
                <Text>Hiii</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    whiteText:{
        color:'white',
        fontSize:32,
        backgroundColor:'black',
        padding:8
    },
    darkText:{
        color:'black',
        fontSize:32,
        backgroundColor:'white',
        padding:8
    }
}) 

export default AppPro;