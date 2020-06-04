import React, { useState } from 'react';
import { StyleSheet, View, Image} from 'react-native';
import {Surface, Text, withTheme, useTheme} from 'react-native-paper';
import Constants from 'expo-constants';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';


function Item({stepNum, stepText}) {
    return (
    <View>
        <Text style={styles.textList}>{stepNum}. {stepText}</Text>
    </View>
    );
}

function RecipeDetails(props) {
    const DATA = [
        {
            id: '1', 
            title: "Hario V60",
            paragraph: "v60 paragraph",
            image: require('../assets/harioV60.png'),
            steps: [
                {
                    stepNum: '1',
                    stepText: 'Boil water',
                },
                {
                    stepNum: '2',
                    stepText: 'Grind Beans',
                },
                {
                    stepNum: '3',
                    stepText: 'Brew Coffee',
                },
                {
                    stepNum: '4',
                    stepText: 'Enjoy!',
                }
            ]
        },
        {
            id: '2',
            title: "Chemex",
            paragraph: "chemex paragraph",
            image: require('../assets/chemex.png'),
            steps: [
                {
                    stepNum: '1',
                    stepText: 'Boil water',
                },
                {
                    stepNum: '2',
                    stepText: 'Grind Beans',
                },
                {
                    stepNum: '3',
                    stepText: 'Brew Coffee',
                },
                {
                    stepNum: '4',
                    stepText: 'Enjoy!',
                }
            ]
        },
        {
            id: '3',
            title: "Aero Press",
            paragraph: "Aero Press paragraph",
            image: require('../assets/aeropress.png'),
            steps: [
                {
                    stepNum: '1',
                    stepText: 'Boil water',
                },
                {
                    stepNum: '2',
                    stepText: 'Grind Beans',
                },
                {
                    stepNum: '3',
                    stepText: 'Brew Coffee',
                },
                {
                    stepNum: '4',
                    stepText: 'Enjoy!',
                }
            ]
        },
        {
            id: '4',
            title: "Cold Brew",
            paragraph: "Cold brew paragraph",
            image: require('../assets/coldbrew.png'),
            steps: [
                {
                    stepNum: '1',
                    stepText: 'Boil water',
                },
                {
                    stepNum: '2',
                    stepText: 'Grind Beans',
                },
                {
                    stepNum: '3',
                    stepText: 'Brew Coffee',
                },
                {
                    stepNum: '4',
                    stepText: 'Enjoy!',
                }
            ]
        },
        {
            id: '5',
            title: "French Press",
            paragraph: "French Press paragraph",
            image: require('../assets/frenchpress.png'),
            steps: [
                {
                    stepNum: '1',
                    stepText: 'Boil water',
                },
                {
                    stepNum: '2',
                    stepText: 'Grind Beans',
                },
                {
                    stepNum: '3',
                    stepText: 'Brew Coffee',
                },
                {
                    stepNum: '4',
                    stepText: 'Enjoy!',
                }
            ]
        },
    ]

    const { colors } = useTheme();
    const rId = parseInt(props.route.params.recipeId) - 1;
    return (
        <Surface style={styles.container}>
            <Image style={styles.image}source={DATA[rId].image} />
            <Text style={styles.textTitle}>{DATA[rId].title}</Text>
            <Text style={styles.textParagraph}>{DATA[rId].paragraph}</Text>
            <FlatList
                style={{backgroundColor: colors.background, marginTop: Constants.statusBarHeight}}
                data={DATA[rId].steps}
                renderItem={({item}) => {
                    return(
                        <TouchableHighlight>
                           <Item stepNum={item.stepNum} stepText={item.stepText} />
                        </TouchableHighlight>
                    )
                    }
                }
                keyExtractor={item => item.id}
                />
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
      elevation: 2,
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    image: {
        padding: 25,
        width: 400,
        height: 250,
    },
    textTitle: {
        fontSize: 38,
    },
    textParagraph: {
        fontSize: 24,
    },
    textList: {
        fontSize: 18,
    }
  });

export default withTheme(RecipeDetails);