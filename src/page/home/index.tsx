import { Button, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from "react-native"
import navigationAction from "../../navigation/navigationAction"
import BButton from "../../component/button"
import { blue, red, white } from "../../component/color"
import BBottomNavigation from "../../component/bottomNavigation"

const Home = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: "flex-end", backgroundColor: red}}>
            <ScrollView>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>
                <View style={{height: 100, width: 100, backgroundColor: white, margin: 20}}/>

                
            </ScrollView>
            <BButton title='Button' onPress={()=>navigationAction.navigate('Profile', {})}></BButton>
            <BBottomNavigation/>

        </View>

        </SafeAreaView>
    )
}

export default Home