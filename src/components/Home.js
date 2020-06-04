import React, { useState } from 'react';
import { StyleSheet, Slider } from 'react-native';
import { TextInput, Surface, Text, withTheme, useTheme} from 'react-native-paper';
import Constants from 'expo-constants';

function Home(props) {
    const [ratio, setRatio] = useState(15);
    const [volume, setVolume] = useState(0);
    const [coffeeValue, setValue] = useState(0);
    const { colors } = useTheme();
    return (
        <Surface style={styles.container}>
            <Text style={styles.topText}>Coffee Volume</Text>
            <TextInput style={{width: '50%', height: 30, textAlign: 'center'}} placeholder="" mode='outlined' label='Grams' keyboardType='number-pad'
                onChangeText={(value) => setVolume(value)} />
            <Text style={styles.text}>Brew Ratio</Text>
            <Text>1/{ratio}</Text>
            <Slider 
                style={{width: '50%', height: 40}}
                minimumValue={10}
                maximumValue={20}
                step={1}
                maximumTrackTintColor={colors.primary}
                minimumTrackTintColor={colors.primary}
                thumbTintColor={colors.accent}
                onValueChange={(sliderValue) => setRatio(sliderValue)}
                value={ratio}
            />
            <Text style={styles.coffeeText}>You need</Text>
            <Text style={styles.coffeeValue}>{Number(volume/ratio).toFixed(3)} g</Text>
        </Surface>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
  },
  topText: {
    marginTop: 80,
    fontSize: 38,
  },
  text: {
      marginTop: 20,
      fontSize: 38,
  },
  coffeeText: {
    marginTop: 100,
    fontSize: 48
  },
  coffeeValue: {
      fontSize: 64,
  }
});

export default withTheme(Home);