import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, withTheme, useTheme } from 'react-native-paper';
import Constants from 'expo-constants';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';



function RecipeCard({ title, paragraph, image}) {
    return(
        <Card style={{marginBottom: 10,  }}>
            <Card.Cover style={{flexDirection: 'column', padding: 45, width: '100%', backgroundColor: 'transparent', height: 250, justifyContent: 'center'}} source={image} />
            <Card.Content>
                <Title>{title}</Title>
                <Paragraph>{paragraph}</Paragraph>
            </Card.Content>
            
            <Card.Actions>
                <Button>Continue reading...</Button>
            </Card.Actions>
        </Card>
    );
}

function Recipes(props) {

    const { colors } = useTheme();
    const DATA = [
        {
            id: '1', 
            title: "Hario V60",
            paragraph: "v60 paragraph",
            image: require('../assets/harioV60.png')
        },
        {
            id: '2',
            title: "Chemex",
            paragraph: "chemex paragraph",
            image: require('../assets/chemex.png')
        },
        {
            id: '3',
            title: "Aero Press",
            paragraph: "Aero Press paragraph",
            image: require('../assets/aeropress.png')
        },
        {
            id: '4',
            title: "Cold Brew",
            paragraph: "Cold brew paragraph",
            image: require('../assets/coldbrew.png')
        },
        {
            id: '5',
            title: "French Press",
            paragraph: "French Press paragraph",
            image: require('../assets/frenchpress.png')
        },
    ]
    
  return (
    <FlatList
        style={{backgroundColor: colors.background, marginTop: Constants.statusBarHeight}}
        data={DATA}
        renderItem={({item}) => {
              return(
                <TouchableHighlight onPress={() => props.navigation.navigate('Details', {recipeId: item.id})}>
                     <RecipeCard title={item.title} paragraph={item.paragraph} image={item.image}/>
                </TouchableHighlight>
              )
            }
          }
        keyExtractor={item => item.id}
        />
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    flex: 1,
    marginTop: 20,
  },
});

export default withTheme(Recipes);