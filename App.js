import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme, Provider as PaperProvider, useTheme, Switch } from 'react-native-paper';

import Home from './src/components/Home';
import Recipes from './src/components/Recipes';
import RecipeDetails from './src/components/RecipeDetails';
import Settings from './src/components/Settings';

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
  }
}
const lightTheme={
  ...DefaultTheme,
  dark: false,
  mode: 'adaptive',
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
  }
}

const darkTheme = {
  ...DefaultTheme,
  dark: true,
  mode: 'adaptive',
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#BB86FC',
    accent: '#03DAC5',
    background: '#0d0d0d',
    surface: '#121212',
    text: '#ffffff',
    placeholder: '#BB86FC',
  }
}

const RecipeStack = createStackNavigator();

function RecipeStackScreen() {
  return (
    <RecipeStack.Navigator
      screenOptions={{headerShown: false}}>
      <RecipeStack.Screen name="Recipes" component={Recipes} />
      <RecipeStack.Screen name="Details" component={RecipeDetails} />
    </RecipeStack.Navigator>
  );
}

function MyTabs() {
  const Tab = createMaterialBottomTabNavigator();
  const [darkMode, setDarkMode] = useState(false);
  const { colors } = useTheme();
  return (
    <PaperProvider theme={darkMode ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Tab.Navigator
            activeColor="#fff"
            inactiveColor={colors.accent}
            barStyle={{backgroundColor: colors.primary}} >
            <Tab.Screen name="Home" component={Home} 
              options={{tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="coffee" color={color} size={25}/>
              )}} />
            <Tab.Screen name="Recipes" component={RecipeStackScreen} 
              options={{tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={25}/>
              )}} />
            <Tab.Screen name="Settings" 
              options={{
                tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="settings" color={color} size={25}/>
              )}}>
                {props => <Settings {...props} callBack={setDarkMode} />}
            </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );

}

export default function App() {
  return (
    MyTabs()
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
