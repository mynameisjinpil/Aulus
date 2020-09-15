import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeStack = createStackNavigator();
import HomeScreen from './src/components';

function HomeStackScreen() {}

const MenuStack = createStackNavigator();

function MenuStackScreen() {}

const ChatStack = createStackNavigator();

function ChatStackScreen() {}

const SearchStack = createStackNavigator();

function SearchStackScreen() {}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {}

const Tab = createBottomTabNavigator();

function MainScreen() {}

const AuthStack = createStackNavigator();

function AuthStackScreen() {}

const AppStack = createStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen name={'흠냐'} component={HomeScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
