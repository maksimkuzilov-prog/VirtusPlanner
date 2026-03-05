import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <Text style={styles.headerTitle}>Настройки</Text>

                {/* Блок профиля */}
                <View style={styles.sectionCard}>
                    <Text style={styles.sectionLabel}>Профиль</Text>
                    <View style={styles.profileInfo}>
                        <View style={styles.avatarContainer}>
                            <Image 
                                source={{ uri: 'https://via.placeholder.com/100' }} 
                                style={styles.avatar} 
                            />
                        </View>
                        <Text style={styles.userName}>Александр Петров</Text>
                        <Text style={styles.userEmail}>alex@email.com</Text>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={styles.editButtonText}>Редактировать профиль</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Блок Внешний вид */}
                <View style={styles.sectionCard}>
                    <Text style={styles.sectionLabel}>Внешний вид</Text>
                    
                    <View style={styles.settingRow}>
                        <Text style={styles.settingText}>Темная тема</Text>
                        <Switch 
                            value={isDarkMode} 
                            onValueChange={setIsDarkMode}
                            trackColor={{ false: "#e2e8f0", true: "#6366f1" }}
                        />
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.settingColumn}>
                        <Text style={styles.settingText}>Размер текста</Text>
                        <View style={styles.sliderMock}>
                            <Text style={styles.fontSizeLabel}>Мелкий</Text>
                            <View style={styles.sliderTrack}>
                                <View style={styles.sliderThumb} />
                            </View>
                            <Text style={styles.fontSizeLabel}>Крупный</Text>
                        </View>
                    </View>
                </View>

                {/* Блок Уведомления */}
                <View style={styles.sectionCard}>
                    <Text style={styles.sectionLabel}>Уведомления</Text>
                    
                    <View style={styles.settingRow}>
                        <Text style={styles.settingText}>Push-уведомления</Text>
                        <Switch 
                            value={notificationsEnabled} 
                            onValueChange={setNotificationsEnabled}
                            trackColor={{ false: "#e2e8f0", true: "#6366f1" }}
                        />
                    </View>

                    <View style={styles.divider} />

                    <TouchableOpacity style={styles.settingRow}>
                        <View>
                            <Text style={styles.settingText}>Время тишины</Text>
                            <Text style={styles.settingSubtext}>22:00 - 8:00</Text>
                        </View>
                        <Text style={styles.linkText}>Изменить</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Выйти из аккаунта</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    scrollContent: { paddingBottom: 40 },
    headerTitle: { fontSize: 28, fontWeight: "700", textAlign: "center", marginVertical: 20, color: "#0f172a" },
    
    sectionCard: {
        marginHorizontal: 20,
        marginBottom: 24,
        padding: 16,
        borderRadius: 20,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#f1f5f9",
        // Тень для iOS/Android
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    sectionLabel: { fontSize: 14, fontWeight: "600", color: "#94a3b8", marginBottom: 16, textTransform: "uppercase", letterSpacing: 1 },
    
    profileInfo: { alignItems: "center" },
    avatarContainer: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#eaddff", justifyContent: "center", alignItems: "center", marginBottom: 12 },
    avatar: { width: 80, height: 80, borderRadius: 40 },
    userName: { fontSize: 20, fontWeight: "700", color: "#0f172a" },
    userEmail: { fontSize: 14, color: "#94a3b8", marginTop: 4 },
    editButton: { marginTop: 16 },
    editButtonText: { color: "#6366f1", fontWeight: "600", fontSize: 14 },

    settingRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 12 },
    settingColumn: { paddingVertical: 12 },
    settingText: { fontSize: 16, fontWeight: "600", color: "#1e293b" },
    settingSubtext: { fontSize: 14, color: "#94a3b8", marginTop: 4 },
    divider: { height: 1, backgroundColor: "#f1f5f9" },
    linkText: { color: "#6366f1", fontWeight: "600" },

    sliderMock: { flexDirection: "row", alignItems: "center", marginTop: 15, justifyContent: "space-between" },
    sliderTrack: { flex: 1, height: 6, backgroundColor: "#f1f5f9", borderRadius: 3, marginHorizontal: 15, position: "relative" },
    sliderThumb: { width: 20, height: 20, borderRadius: 10, backgroundColor: "#6366f1", position: "absolute", top: -7, left: "40%" },
    fontSizeLabel: { fontSize: 12, color: "#94a3b8" },

    logoutButton: { marginHorizontal: 20, padding: 16, alignItems: "center" },
    logoutText: { color: "#ef4444", fontWeight: "600", fontSize: 16 }
});

export default SettingsScreen;