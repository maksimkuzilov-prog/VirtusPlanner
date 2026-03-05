import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Импортируем твои исправленные файлы
import TodayScreen from './src/screens/TodayScreen';
import TasksScreen from './src/screens/TasksScreen';
import AssistantScreen from './src/screens/AssistantScreen';
import AnalyticsScreen from './src/screens/AnalyticsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false,
          tabBarActiveTintColor: '#6366f1', // Твой фирменный цвет из кода
          tabBarInactiveTintColor: '#94a3b8',
        }}
      >
        <Tab.Screen name="Сегодня" component={TodayScreen} />
        <Tab.Screen name="Задачи" component={TasksScreen} />
        <Tab.Screen name="Ассистент" component={AssistantScreen} />
        <Tab.Screen name="Аналитика" component={AnalyticsScreen} />
        <Tab.Screen name="Настройки" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}