import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

// Экраны
import TodayScreen from '../screens/TodayScreen';
import TasksScreen from '../screens/TasksScreen';
import AssistantScreen from '../screens/AssistantScreen'; 
import AnalyticsScreen from '../screens/AnalyticsScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Твои SVG (проверь, чтобы названия файлов в папке были именно такие!)
import IconToday from '../assets/icons/icon1.svg';     // Сегодня
import IconTasks from '../assets/icons/icon2.svg';     // Задачи
import IconAssistant from '../assets/icons/icon4.svg'; // Помощник
import IconAnalytics from '../assets/icons/icon3.svg'; // Аналитика
import IconSettings from '../assets/icons/icon5.svg';  // Настройки

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false, // УБИРАЕМ ВООБЩЕ ВЕСЬ ТЕКСТ И ШРИФТЫ СНИЗУ
          tabBarStyle: { 
            backgroundColor: '#121212', 
            borderTopWidth: 0,
            height: 70, // Высота под твой дизайн
          },
        }}
      >
        <Tab.Screen name="Today" component={TodayScreen} options={{
            tabBarIcon: ({ focused }) => <IconToday width={28} height={28} fill={focused ? '#00FF41' : '#FFFFFF'} />
        }} />
        <Tab.Screen name="Tasks" component={TasksScreen} options={{
            tabBarIcon: ({ focused }) => <IconTasks width={28} height={28} fill={focused ? '#00FF41' : '#FFFFFF'} />
        }} />
        <Tab.Screen name="Assistant" component={AssistantScreen} options={{
            tabBarIcon: ({ focused }) => <IconAssistant width={28} height={28} fill={focused ? '#00FF41' : '#FFFFFF'} />
        }} />
        <Tab.Screen name="Analytics" component={AnalyticsScreen} options={{
            tabBarIcon: ({ focused }) => <IconAnalytics width={28} height={28} fill={focused ? '#00FF41' : '#FFFFFF'} />
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
            tabBarIcon: ({ focused }) => <IconSettings width={28} height={28} fill={focused ? '#00FF41' : '#FFFFFF'} />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}