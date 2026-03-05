import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';

// Экраны
import TodayScreen from '../screens/TodayScreen';
import TasksScreen from '../screens/TasksScreen';
import AssistantScreen from '../screens/AssistantScreen'; 
import AnalyticsScreen from '../screens/AnalyticsScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Иконки
import IconToday from '../assets/icons/icon1.svg';     
import IconTasks from '../assets/icons/icon2.svg';     
import IconAnalytics from '../assets/icons/icon3.svg'; 
import IconAssistant from '../assets/icons/icon4.svg'; 
import IconSettings from '../assets/icons/icon5.svg';  

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { 
            backgroundColor: '#F3F0F8', // Светлый фон как на фото
            height: 70,
            borderTopWidth: 0,
            paddingBottom: 10,
          },
          tabBarActiveTintColor: '#6366F1', // Цвет активной иконки (фиолетовый)
          tabBarInactiveTintColor: '#94A3B8', // Цвет неактивной
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: -5,
          },
        }}
      >
        <Tab.Screen 
          name="Сегодня" 
          component={TodayScreen} 
          options={{
            tabBarIcon: ({ color }) => <IconToday width={24} height={24} fill={color} />
          }}
        />
        <Tab.Screen 
          name="Задачи" 
          component={TasksScreen} 
          options={{
            tabBarIcon: ({ color }) => <IconTasks width={24} height={24} fill={color} />
          }}
        />
        <Tab.Screen 
          name="Помощник" 
          component={AssistantScreen} 
          options={{
            tabBarIcon: ({ color }) => <IconAssistant width={24} height={24} fill={color} />
          }}
        />
        <Tab.Screen 
          name="Аналитика" 
          component={AnalyticsScreen} 
          options={{
            tabBarIcon: ({ color }) => <IconAnalytics width={24} height={24} fill={color} />
          }}
        />
        <Tab.Screen 
          name="Настройки" 
          component={SettingsScreen} 
          options={{
            tabBarIcon: ({ color }) => <IconSettings width={24} height={24} fill={color} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}