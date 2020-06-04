import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import {Surface, Text, withTheme, Switch} from 'react-native-paper';
import Constants from 'expo-constants';

function Settings(props) {
    const [switchOn, setTheme] = useState(false);

    function handleChange(val) {
        setTheme(val);
        props.callBack(val);
    }
  return (
    <Surface style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, }}>
            <Text style={{marginRight: 50}}>Dark Mode: </Text>
            <Switch
                Text="What"
                value={switchOn}
                onValueChange={(switchOn) => handleChange(switchOn)} />
        </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
    container: {
      elevation: 2,
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
  });

export default withTheme(Settings);