import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import userImg from "../assets/dara.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Dara</Text>
            </View>

            <Image source={userImg} style={styles.image} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 40
    },
})