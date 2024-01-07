import React from "react";
import {View,Text,SafeAreaView} from "react-native";
import AppPro from "./AppPro";

// const App = ()=>{}
function App(){
return(
<SafeAreaView>
  <View>
    <Text>Hello World 1</Text>
    <Text>Hello World 2</Text>
    <Text>Hello World 3</Text>
    <Text>Hello World 4</Text>
    <Text>Hello World 5</Text>
    <AppPro/>
  </View>
</SafeAreaView>
)
}

export default App;