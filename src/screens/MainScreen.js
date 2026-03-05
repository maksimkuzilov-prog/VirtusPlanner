import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import TodayScreen from "./TodayScreen";
import TasksScreen from "./TasksScreen";
import AssistantScreen from "./AssistantScreen";
import AnalyticsScreen from "./AnalyticsScreen";
import SettingsScreen from "./SettingsScreen";

const MainScreen = () => {
    const [currentTab, setCurrentTab] = useState("Today");

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {currentTab === "Today" && <TodayScreen />}
                {currentTab === "Tasks" && <TasksScreen />}
                {currentTab === "Assistant" && <AssistantScreen />}
                {currentTab === "Analytics" && <AnalyticsScreen />}
                {currentTab === "Settings" && <SettingsScreen />}
            </View>

            <View style={styles.tabBar}>
                {/* ВСТАВЬ СЮДА СВОИ ПУТИ К ИКОНКАМ В REQUIRES */}
                <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab("Today")}>
                    <Image source={require("../../assets/today-icon.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab("Tasks")}>
                    <Image source={require("../../assets/tasks-icon.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab("Assistant")}>
                    <Image source={require("../../assets/ai-icon.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab("Analytics")}>
                    <Image source={require("../../assets/chart-icon.png")} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentTab("Settings")}>
                    <Image source={require("../../assets/settings-icon.png")} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    content: { flex: 1 },
    tabBar: { 
        flexDirection: 'row', 
        height: 70, 
        borderTopWidth: 1, 
        borderColor: '#eee',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    tabItem: { alignItems: 'center', justifyContent: 'center' },
    icon: { width: 25, height: 25 }
});

export default MainScreen;