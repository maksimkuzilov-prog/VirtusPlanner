import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

const AssistantScreen = () => {
    const [inputText, setInputText] = useState(""); // Храним текст, который вводим
    const [messages, setMessages] = useState([]); // Массив всех сообщений в чате

    const handleSend = () => {
        if (inputText.trim().length > 0) {
            // Добавляем новое сообщение в список
            setMessages([...messages, { id: Date.now().toString(), text: inputText }]);
            setInputText(""); // Очищаем поле ввода
        }
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={styles.androidCompact4}
        >
            {/* ВЕРХНЯЯ ЧАСТЬ: ЧАТ И ЛОГОТИП */}
            <View style={styles.chatArea}>
                {messages.length === 0 ? (
                    /* ЛОГОТИП: показывается только если сообщений нет */
                    <View style={styles.centerContent}>
                        <Image 
                            style={styles.bigLogo} 
                            source={require('./icons/logo.png')} // Убедись, что логотип лежит тут
                            resizeMode="contain" 
                        />
                        <Text style={styles.welcomeText}>Чем я могу помочь?</Text>
                    </View>
                ) : (
                    /* СООБЩЕНИЯ: появляются вместо логотипа */
                    <ScrollView contentContainerStyle={styles.messageList}>
                        {messages.map((item) => (
                            <View key={item.id} style={styles.messageBubble}>
                                <Text style={styles.messageText}>{item.text}</Text>
                            </View>
                        ))}
                    </ScrollView>
                )}
            </View>

            {/* ПОЛЕ ВВОДА (Переделано из твоей рамки androidCompact4Inner) */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Спросите Виртуса..."
                    placeholderTextColor="#94a3b8"
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>➔</Text>
                </TouchableOpacity>
            </View>

            {/* ТВОЯ НАВИГАЦИЯ (Оставил структуру из файла) */}
            <View style={styles.navigationBarVerticalItems}>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer, styles.iconContainerFlexBox]}>
            						<View style={styles.stateFlexBox}>
              							<Image style={[styles.icon, styles.iconLayout1]} resizeMode="cover" />
              							<Image style={styles.iconLayout} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Сегодня</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<View style={[styles.icon3, styles.iconLayout]} />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Задачи</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText3, styles.labelTypo]}>Помощник</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Аналитика</Text>
        				</View>
        				<View style={styles.navItem01}>
          					<View style={[styles.iconContainer2, styles.iconContainerFlexBox]}>
            						<View style={[styles.stateLayer2, styles.stateFlexBox]}>
              							<Image style={[styles.icon5, styles.iconLayout]} resizeMode="cover" />
              							<Image style={styles.iconLayout1} resizeMode="cover" />
            						</View>
          					</View>
          					<Text style={[styles.labelText, styles.labelTypo]}>Настройки</Text>
        				</View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    androidCompact4: {
        flex: 1,
        backgroundColor: "#fff",
    },
    chatArea: {
        flex: 1,
        width: '100%',
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigLogo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 18,
        fontFamily: "Inter-Medium",
        color: "#6366f1",
    },
    messageList: {
        padding: 20,
        paddingTop: 60,
    },
    messageBubble: {
        backgroundColor: "#6366f1",
        padding: 12,
        borderRadius: 16,
        alignSelf: 'flex-end',
        marginBottom: 10,
        maxWidth: '85%',
    },
    messageText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Inter-Regular",
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#f1f5f9',
        marginBottom: 80, // чтобы не перекрывало меню
    },
    textInput: {
        flex: 1,
        height: 45,
        backgroundColor: "#f1f5f9",
        borderRadius: 22,
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#1e293b",
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: "#6366f1",
        width: 45,
        height: 45,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonText: {
        color: "#fff",
        fontSize: 20,
    },
    // Твои стили навигации из исходного файла
    navigationBarVerticalItems: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 80,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#f1f5f9',
        justifyContent: 'space-around',
        paddingTop: 10
    },
      	iconContainerFlexBox: {
    		borderRadius: 16,
    		alignItems: "center",
    		justifyContent: "center",
    		overflow: "hidden"
  	},
  	iconLayout1: {
    		zIndex: 0,
    		width: 24,
    		height: 24
  	},
  	labelTypo: {
    		textAlign: "center",
    		fontFamily: "Roboto-Medium",
    		fontWeight: "500",
    		lineHeight: 16,
    		letterSpacing: 0.5,
    		fontSize: 12,
    		alignSelf: "stretch"
  	},
  	stateFlexBox: {
    		height: 32,
    		width: 56,
    		alignItems: "center",
    		justifyContent: "center",
    		flexDirection: "row"
  	},
  	iconLayout: {
    		zIndex: 1,
    		width: 24,
    		height: 24
  	},
  	textTypo: {
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 1,
    		textAlign: "center",
    		fontWeight: "500",
    		position: "absolute"
  	},
  	androidCompact4: {
    		width: "100%",
    		height: 917,
    		overflow: "hidden",
    		backgroundColor: "#fff"
  	},
  	navigationBarVerticalItems: {
    		top: 827,
    		backgroundColor: "#f3edf7",
    		width: 412,
    		alignItems: "flex-end",
    		justifyContent: "center",
    		flexDirection: "row",
    		left: 0,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	navItem01: {
    		flex: 1,
    		paddingVertical: 6,
    		gap: 4,
    		paddingHorizontal: 0,
    		alignItems: "center",
    		alignSelf: "stretch"
  	},
  	iconContainer: {
    		backgroundColor: "rgba(255, 255, 255, 0)"
  	},
  	icon: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		position: "absolute"
  	},
  	labelText: {
    		color: "#94a3b8"
  	},
  	iconContainer2: {
    		flexDirection: "row",
    		borderRadius: 16
  	},
  	stateLayer2: {
    		paddingVertical: 4,
    		gap: 10,
    		paddingHorizontal: 0
  	},
  	icon3: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		position: "absolute",
    		overflow: "hidden"
  	},
  	icon5: {
    		opacity: 0,
    		left: "50%",
    		top: "50%",
    		marginLeft: -12,
    		marginTop: -12,
    		position: "absolute"
  	},
  	labelText3: {
    		color: "#6366f1"
  	},
  	androidCompact4Inner: {
    		top: 763,
    		left: 36,
    		borderRadius: 20,
    		borderStyle: "solid",
    		borderColor: "#6366f1",
    		borderWidth: 2,
    		width: 340,
    		height: 38,
    		paddingLeft: 5,
    		paddingTop: 9,
    		paddingRight: 7,
    		paddingBottom: 8,
    		position: "absolute",
    		backgroundColor: "#fff"
  	},
  	textLayout: {
    		height: 21,
    		width: 328
  	},
  	text: {
    		top: 0,
    		fontSize: 14,
    		height: 21,
    		width: 328,
    		color: "#94a3b8",
    		left: 0,
    		fontFamily: "Inter-Medium",
    		lineHeight: 20,
    		letterSpacing: 1
  	},
  	text2: {
    		top: 84,
    		left: 88,
    		fontSize: 24,
    		color: "#0f172a",
    		width: 238,
    		height: 49
  	},
  	icon11: {
    		top: 321,
    		left: 119,
    		width: 175,
    		height: 173,
    		position: "absolute"
  	}
});

export default AssistantScreen;