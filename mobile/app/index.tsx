import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export default function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" }}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.overlay} />
                <SafeAreaView style={styles.content}>
                    <Text style={styles.brand}>LABEL NISHITA GUPTA</Text>

                    <View style={styles.heroContent}>
                        <Text style={styles.season}>SPRING / SUMMER 2026</Text>
                        <Text style={styles.title}>ETHEREAL ELEGANCE</Text>

                        <Link href="/collections" asChild>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>EXPLORE COLLECTION</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 40,
    },
    brand: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "600",
        letterSpacing: 4,
        marginTop: 20,
    },
    heroContent: {
        alignItems: "center",
        marginBottom: 80,
    },
    season: {
        color: "#ffffff",
        fontSize: 14,
        letterSpacing: 6,
        marginBottom: 20,
        opacity: 0.9,
    },
    title: {
        color: "#ffffff",
        fontSize: 36,
        fontWeight: "300",
        letterSpacing: 2,
        marginBottom: 40,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#ffffff",
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 0,
    },
    buttonText: {
        color: "#000000",
        fontSize: 14,
        fontWeight: "600",
        letterSpacing: 2,
    },
});
