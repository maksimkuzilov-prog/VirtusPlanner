import * as React from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TodayScreen = () => {
    
    // Функция для обработки нажатия на кнопку
    const handleStartPress = () => {
        Alert.alert("В работу!", "Таймер фокуса запущен.");
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* Заголовок */}
                <View style={styles.header}>
                    <Text style={styles.greeting}>Доброе утро!</Text>
                    <Text style={styles.date}>Понедельник, 15 апреля</Text>
                </View>

                {/* Карточка фокуса */}
                <View style={styles.focusCard}>
                    <Text style={styles.focusLabel}>ФОКУС ДНЯ</Text>
                    <Text style={styles.focusTitle}>Подготовить презентацию для клиента</Text>
                    <Text style={styles.focusTime}>10:00 - 11:30</Text>
                    
                    <TouchableOpacity 
                        style={styles.startButton} 
                        onPress={handleStartPress}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.startButtonText}>Начать</Text>
                    </TouchableOpacity>
                </View>

                {/* Расписание */}
                <Text style={styles.scheduleTitle}>Расписание</Text>
                
                <View style={styles.scheduleContainer}>
                    {/* Линия времени */}
                    <View style={styles.timeline} />
                    
                    {/* Список часов */}
                    <View style={styles.timeList}>
                        {["9:00", "10:00", "11:00", "12:00", "13:00", "14:00"].map((time, index) => (
                            <View key={index} style={styles.timeRow}>
                                <Text style={styles.timeText}>{time}</Text>
                                <View style={styles.timeDivider} />
                            </View>
                        ))}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContent: {
        paddingBottom: 40,
    },
    header: {
        marginTop: 20,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    greeting: {
        fontSize: 28,
        fontWeight: "600",
        color: "#0f172a",
        fontFamily: "Inter-Medium",
    },
    date: {
        fontSize: 16,
        color: "#64748b",
        marginTop: 4,
    },
    focusCard: {
        backgroundColor: "#f8fafc", // Светлый фон вместо картинки (для надежности)
        margin: 20,
        padding: 24,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#e2e8f0",
        // Тень
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    focusLabel: {
        fontSize: 12,
        fontWeight: "700",
        color: "#6366f1",
        letterSpacing: 1,
        marginBottom: 8,
    },
    focusTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#1e293b",
        marginBottom: 8,
    },
    focusTime: {
        fontSize: 16,
        color: "#6366f1",
        marginBottom: 20,
    },
    startButton: {
        backgroundColor: "#6366f1",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    startButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    scheduleTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#0f172a",
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 20,
    },
    scheduleContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
    },
    timeline: {
        width: 2,
        backgroundColor: "#e2e8f0",
        marginRight: 20,
        marginLeft: 10,
    },
    timeList: {
        flex: 1,
    },
    timeRow: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
    },
    timeText: {
        fontSize: 16,
        color: "#94a3b8",
        width: 50,
    },
    timeDivider: {
        flex: 1,
        height: 1,
        backgroundColor: "#f1f5f9",
        marginLeft: 10,
    }
});

export default TodayScreen;