import { Button, Text, View } from "react-native"
import navigationAction from "../../navigation/navigationAction"

const Profile = () => {
    return(
        <View>
            <Text>{'HELLO WORLD'}</Text>
            <Button title="goback" onPress={() => navigationAction.goBack()}></Button>
        </View>
    )
}

export default Profile