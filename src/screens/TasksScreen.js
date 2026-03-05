import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TasksScreen = () => {
    const [activeFilter, setActiveFilter] = useState("Все");

    // Данные для календаря (упрощенно)
    const days = ["П", "В", "С", "Ч", "П", "С", "В"];
    const dates = Array.from({ length: 30 }, (_, i) => i + 1);

    // Пример списка задач
    const tasks = [
        { id: "1", title: "Дизайн мобильного приложения", category: "Работа", time: "14:00" },
        { id: "2", title: "Купить продукты", category: "Личное", time: "18:30" },
        { id: "3", title: "Тренировка", category: "Личное", time: "19:00" },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.headerTitle}>Задачи</Text>

                {/* Поиск */}
                <View style={styles.searchContainer}>
                    <TextInput 
                        style={styles.searchInput} 
                        placeholder="Поиск задачи" 
                        placeholderTextColor="#94a3b8"
                    />
                </View>

                {/* Фильтры (Чипсы) */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
                    {["Все", "Работа", "Личное", "Важное"].map((filter) => (
                        <TouchableOpacity 
                            key={filter} 
                            style={[styles.filterChip, activeFilter === filter && styles.filterChipActive]}
                            onPress={() => setActiveFilter(filter)}
                        >
                            <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>
                                {filter}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Мини-календарь */}
                <View style={styles.calendarCard}>
                    <View style={styles.daysRow}>
                        {days.map((day, i) => (
                            <Text key={i} style={styles.dayLabel}>{day}</Text>
                        ))}
                    </View>
                    <FlatList
                        data={dates}
                        numColumns={7}
                        scrollEnabled={false}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={[styles.dateItem, item === 19 && styles.activeDate]}>
                                <Text style={[styles.dateText, item === 19 && styles.activeDateText]}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Список задач */}
                <View style={styles.tasksHeader}>
                    <Text style={styles.tasksTitle}>Задачи на 19 апреля ({tasks.length})</Text>
                </View>

                {tasks.map((task) => (
                    <View key={task.id} style={styles.taskItem}>
                        <View style={[styles.categoryIndicator, { backgroundColor: task.category === "Работа" ? "#6366f1" : "#10b981" }]} />
                        <View style={styles.taskInfo}>
                            <Text style={styles.taskTitle}>{task.title}</Text>
                            <Text style={styles.taskTime}>{task.time}</Text>
                        </View>
                    </View>
                ))}

                {/* Кнопка добавить */}
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Добавить задачу</Text>
                </TouchableOpacity>
                
                <View style={{ height: 100 }} /> 
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    headerTitle: { fontSize: 28, fontWeight: "700", textAlign: "center", marginVertical: 20, color: "#0f172a" },
    searchContainer: { paddingHorizontal: 20, marginBottom: 20 },
    searchInput: { backgroundColor: "#f1f5f9", padding: 12, borderRadius: 12, fontSize: 16, color: "#0f172a" },
    filterScroll: { paddingLeft: 20, marginBottom: 20, flexDirection: "row" },
    filterChip: { paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20, backgroundColor: "#f1f5f9", marginRight: 10, borderWidth: 1, borderColor: "#e2e8f0" },
    filterChipActive: { backgroundColor: "#6366f1", borderColor: "#6366f1" },
    filterText: { color: "#64748b", fontWeight: "500" },
    filterTextActive: { color: "#fff" },
    calendarCard: { marginHorizontal: 20, backgroundColor: "#f8fafc", borderRadius: 20, padding: 15, borderWidth: 1, borderColor: "#e2e8f0" },
    daysRow: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
    dayLabel: { color: "#94a3b8", fontSize: 12, fontWeight: "600", width: 40, textAlign: "center" },
    dateItem: { width: 40, height: 40, justifyContent: "center", alignItems: "center", marginVertical: 2 },
    dateText: { fontSize: 14, color: "#0f172a" },
    activeDate: { backgroundColor: "#6366f1", borderRadius: 10 },
    activeDateText: { color: "#fff", fontWeight: "700" },
    tasksHeader: { paddingHorizontal: 20, marginTop: 30, marginBottom: 15 },
    tasksTitle: { fontSize: 18, fontWeight: "700", color: "#0f172a" },
    taskItem: { flexDirection: "row", marginHorizontal: 20, backgroundColor: "#fff", padding: 15, borderRadius: 16, marginBottom: 12, borderWidth: 1, borderColor: "#f1f5f9", alignItems: "center", elevation: 2 },
    categoryIndicator: { width: 4, height: 40, borderRadius: 2 },
    taskInfo: { marginLeft: 15 },
    taskTitle: { fontSize: 16, fontWeight: "600", color: "#1e293b" },
    taskTime: { fontSize: 14, color: "#6366f1", marginTop: 2 },
    addButton: { backgroundColor: "#6366f1", margin: 20, padding: 16, borderRadius: 12, alignItems: "center" },
    addButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" }
});

export default TasksScreen;