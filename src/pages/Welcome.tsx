import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import wateringImg from "../assets/watering.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";



export function Welcome() {
    const [visible, setVisible] = useState(true);

    function handleVisibility() {
        setVisible(false)
    }

    return(
        <SafeAreaView style= {styles.container}>
            <Text style= {styles.title}>
                Um jeito fácil {"\n"}
                de cuidar das {"\n"}
                suas plantas
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={styles.image}/>
            }

            <Text style= {styles.subtitle}>
                Não esqueça de regar suas plantas. 
                Nós lembramos sempre que você precisar.
            </Text>

            <Button title=">" />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.heading,
        marginTop: 40
    },

    subtitle: {
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: "center",
        color: colors.heading
    },

    image: {
        width: 292,
        height: 284
    },
});