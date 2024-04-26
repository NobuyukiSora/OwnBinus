import { Button, Text, View } from "react-native"
import navigationAction from "../../navigation/navigationAction"
import { white } from "../../component/color"

const Profile = () => {
    return(
        <View style={{flex: 1, marginTop: 30, backgroundColor: white}}>
            <Text>{'HELLO WORLD'}</Text>
            <Button title="goback" onPress={() => navigationAction.goBack()}></Button>
        </View>
    )
}

export default Profile