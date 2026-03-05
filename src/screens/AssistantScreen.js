import React, { useState, useRef } from "react";
import { 
    StyleSheet, View, Text, Image, TextInput, 
    TouchableOpacity, ScrollView, KeyboardAvoidingView, 
    Platform 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AssistantScreen = () => {
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([]);
    const scrollViewRef = useRef(); // Для авто-скролла

    const handleSend = () => {
        if (inputText.trim().length > 0) {
            const userMessage = { 
                id: Date.now().toString(), 
                text: inputText, 
                sender: 'user' 
            };
            
            setMessages(prev => [...prev, userMessage]);
            setInputText("");

            // Имитация ответа ассистента через 1 секунду
            setTimeout(() => {
                const botMessage = {
                    id: (Date.now() + 1).toString(),
                    text: "Я получил ваше сообщение! Чем еще могу помочь?",
                    sender: 'bot'
                };
                setMessages(prev => [...prev, botMessage]);
            }, 1000);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
            >
                {/* ЗОНА ЧАТА */}
                <View style={styles.chatArea}>
                    {messages.length === 0 ? (
                        <View style={styles.centerContent}>
                            <Image 
                                style={styles.bigLogo} 
                                source={require('../assets/logo.png')} 
                                resizeMode="contain" 
                            />
                            <Text style={styles.welcomeTitle}>Привет, я Виртус</Text>
                            <Text style={styles.welcomeSub}>Задайте мне любой вопрос</Text>
                        </View>
                    ) : (
                        <ScrollView 
                            ref={scrollViewRef}
                            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                            contentContainerStyle={styles.messageList}
                        >
                            {messages.map((item) => (
                                <View 
                                    key={item.id} 
                                    style={[
                                        styles.messageBubble, 
                                        item.sender === 'user' ? styles.userBubble : styles.botBubble
                                    ]}
                                >
                                    <Text style={[
                                        styles.messageText,
                                        item.sender === 'user' ? styles.userText : styles.botText
                                    ]}>
                                        {item.text}
                                    </Text>
                                </View>
                            ))}
                        </ScrollView>
                    )}
                </View>

                {/* ПОЛЕ ВВОДА */}
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Спросите Виртуса..."
                            placeholderTextColor="#94a3b8"
                            value={inputText}
                            onChangeText={setInputText}
                            multiline={false}
                        />
                        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                            <Text style={styles.sendIcon}>➔</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    chatArea: { flex: 1 },
    
    // Начальный экран
    centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40 },
    bigLogo: { width: 100, height: 100, marginBottom: 20, opacity: 0.8 },
    welcomeTitle: { fontSize: 24, fontWeight: "700", color: "#0f172a", marginBottom: 8 },
    welcomeSub: { fontSize: 16, color: "#94a3b8", textAlign: 'center' },

    // Список сообщений
    messageList: { paddingHorizontal: 16, paddingVertical: 20 },
    messageBubble: {
        padding: 14,
        borderRadius: 20,
        marginBottom: 12,
        maxWidth: '80%',
    },
    userBubble: {
        backgroundColor: "#6366f1",
        alignSelf: 'flex-end',
        borderBottomRightRadius: 4, // Специфический хвостик
    },
    botBubble: {
        backgroundColor: "#f1f5f9",
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 4,
    },
    messageText: { fontSize: 15, lineHeight: 22 },
    userText: { color: "#fff" },
    botText: { color: "#1e293b" },

    // Поле ввода
    inputWrapper: {
        paddingHorizontal: 16,
        paddingBottom: Platform.OS === 'ios' ? 10 : 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#f1f5f9',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#f8fafc",
        borderRadius: 25,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#e2e8f0'
    },
    textInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#1e293b",
    },
    sendButton: {
        backgroundColor: "#6366f1",
        width: 38,
        height: 38,
        borderRadius: 19,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4,
    },
    sendIcon: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default AssistantScreen;