import React, { useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
} from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                😃
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos cuidar das suas plantinhas{"\n"}
                    com muito cuidado.
                </Text>

                <View style={styles.footer} >
                    <Button
                    title="Começar"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },

    content: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },

    emoji: {
        fontSize: 78
    },

    title: {
        fontSize: 22,
        lineHeight: 38,
        textAlign: "center",
        fontFamily: fonts.heading,
        color: colors.heading,
        marginTop: 15
    },

    subtitle: {
        fontSize: 17,
        textAlign: "center",
        fontFamily: fonts.text,
        color: colors.heading,
        paddingVertical: 20
    },

    footer: {
        width: "100%",
        paddingHorizontal: 50,
        marginTop: 20
    }
})