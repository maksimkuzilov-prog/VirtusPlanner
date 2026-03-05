import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

const AssistantScreen = () => {
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = () => {
        if (inputText.trim().length > 0) {
            setMessages([...messages, { id: Date.now().toString(), text: inputText, sender: 'user' }]);
            // Сюда позже добавим ответ ИИ (Глава 1.2)
            setInputText("");
        }
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={styles.container}
        >
            <View style={styles.chatArea}>
                {messages.length === 0 ? (
                    <View style={styles.centerContent}>
                        <Text style={styles.headerText}>ИИ-помощник</Text>
                        <Image 
                            style={styles.bigLogo} 
                            source={require('../assets/logo.png')} // ПУТЬ ИСПРАВЛЕН
                            resizeMode="contain" 
                        />
                        <Text style={styles.welcomeText}>Чем я могу помочь?</Text>
                    </View>
                ) : (
                    <ScrollView contentContainerStyle={styles.messageList}>
                        {messages.map((item) => (
                            <View key={item.id} style={styles.messageBubble}>
                                <Text style={styles.messageText}>{item.text}</Text>
                            </View>
                        ))}
                    </ScrollView>
                )}
            </View>

            {/* ПОЛЕ ВВОДА В СТИЛЕ ТВОЕГО ПРОТОТИПА */}
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Напишите сообщение"
                    placeholderTextColor="#94a3b8"
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Text style={styles.sendIcon}>➔</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    chatArea: {
        flex: 1,
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    headerText: {
        fontSize: 24,
        fontFamily: "Inter-Medium",
        color: "#000",
        position: 'absolute',
        top: 60,
    },
    bigLogo: {
        width: 200,
        height: 200,
    },
    welcomeText: {
        fontSize: 18,
        fontFamily: "Inter-Medium",
        color: "#6366f1",
        marginTop: 20,
    },
    messageList: {
        padding: 20,
        paddingTop: 100,
    },
    messageBubble: {
        backgroundColor: "#F3F0F8",
        padding: 15,
        borderRadius: 20,
        alignSelf: 'flex-end',
        marginBottom: 10,
        maxWidth: '80%',
        borderWidth: 1,
        borderColor: '#6366f1',
    },
    messageText: {
        color: "#000",
        fontSize: 16,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 30, // Подняли над меню
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#6366f1",
        paddingHorizontal: 15,
        height: 50,
        backgroundColor: '#fff',
    },
    textInput: {
        flex: 1,
        height: '100%',
        color: "#000",
    },
    sendButton: {
        padding: 5,
    },
    sendIcon: {
        color: "#6366f1",
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default AssistantScreen;