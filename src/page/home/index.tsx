import { Button, Text, View } from "react-native"
import navigationAction from "../../navigation/navigationAction"

const Home = () => {
    return(
        <View>
            <Text>{'HELLO YOU'}</Text>
            <Button title="profile" onPress={() => navigationAction.navigate('Profile', {})}></Button>
        </View>
    )
}

export default Home