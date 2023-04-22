import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Linking } from 'react-native';

const App = () => {
  const [activeTab, setActiveTab] = useState('menu');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const scores = [
    { sport: 'Basketball', home: 'BDS EFREI', homeScore: 110, away: 'BDS ULM', awayScore: 105, homeImage: require('./assets/teamA-logo.png'), awayImage: require('./assets/teamB-logo.png') },
    { sport: 'Football', home: 'BDS EFREI', homeScore: 2, away: 'BDS ULM', awayScore: 1, homeImage: require('./assets/teamA-logo.png'), awayImage: require('./assets/teamB-logo.png') },
    { sport: 'Tennis', home: 'BDS EFREI', homeScore: '6', away: 'BDS ULM', awayScore: '4', homeImage: require('./assets/teamA-logo.png'), awayImage: require('./assets/teamB-logo.png') },
  ];
  
  const seances = [
    { id: 1, title: 'Séance de Tennis', date: '25-03-2023', time: '10:00' },
    { id: 2, title: 'Séance de Football', date: '26-03-2023', time: '15:30' },
    { id: 3, title: 'Séance de Basketball', date: '27-03-2023', time: '09:00' },
    { id: 4, title: 'Séance de Natation', date: '28-03-2023', time: '14:00' },
    { id: 5, title: 'Séance de Volleyball', date: '29-03-2023', time: '11:00' }
];

const evenements = [
  { id: 1, titre: 'Soirée crêpes', date: '29-03-2023' },
  { id: 2, titre: 'Voyage Sportif du BDS', date: '30-03-2023 au 10-04-2023' },
];

const handleInscriptionPress = () => {
  Linking.openURL('https://www.bds-efrei.fr/');
};


  const handleFormLink = () => {
  Linking.openURL('https://forms.gle/CchD7U2mcDYmZ8ck8');
  };
  

  return (
    <View style={styles.container}>
      {/* Contenu de la page */}
      {activeTab === 'menu' && (
        <View style={styles.container}>
  {scores.map((score, index) => (
    <View key={index} style={styles.scoreContainer}>
      <Text style={styles.sport}>{score.sport}</Text>
      <View style={styles.teamContainer}>
        <Image source={score.homeImage} style={styles.image} />
        <Text style={styles.teamName}>{score.home}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.score}>{score.homeScore}</Text>
        <Text style={styles.divider}>-</Text>
        <Text style={styles.score}>{score.awayScore}</Text>
      </View>
      <View style={styles.teamContainer}>
        <Image source={score.awayImage} style={styles.image} />
        <Text style={styles.teamName}>{score.away}</Text>
      </View>
    </View>
  ))}
</View>
      )}
      {activeTab === 'calendrier' && (
        <View style={styles.calendrierContainer}>
  {seances.map((seance) => (
    <View key={seance.id} style={styles.seanceContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.seanceTitle}>{seance.title}</Text>
      </View>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.seanceDate}>{seance.date}</Text>
        <Text style={styles.seanceTime}>{seance.time}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  ))}
</View>
)}

      {activeTab === 'événement' && (    
    <View style={styles.evenementcontainer}>
    <Text style={styles.titre}>Événements de l'association</Text>
    {evenements.map((evenement) => (
      <TouchableOpacity 
        key={evenement.id} 
        style={styles.evenement}
        onPress={handleInscriptionPress}
      >
        <Text style={styles.evenementTitre}>{evenement.titre}</Text>
        <Text style={styles.evenementDate}>{evenement.date}</Text>
        <Text style={styles.inscription}>Inscription</Text>
      </TouchableOpacity>
    ))}
  </View>
    )}
      {activeTab === 'inscription' && (
        <View style={styles.formcontainer}>
        <Text style={styles.formheader}>Inscription</Text>
        <Text style={styles.formtext}>Afin d'avoir accès aux divers entraînements proposés par le BDS vous devez impérativement être munis d'une licence FFSU.</Text>
        <Text style={styles.formtext}>Vous pourrez ensuite trouver votre licence sur le site de la FFSU, sous une semaine maximum, en entrant votre adresse mail et votre date de naissance.</Text>
                <Text style={styles.formtext}>Pour cela, il suffit de remplir le formulaire en cliquant sur le boutton ci-dessous !</Text>
        <TouchableOpacity style={styles.formbutton} onPress={handleFormLink}>
    <Text style={styles.formbuttonText}>Deviens Membre !</Text>
  </TouchableOpacity>
</View>
      )}

      {/* Menu en bas de page */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'menu' && styles.activeTab]}
          onPress={() => handleTabPress('menu')}>
          <Text style={styles.tabText}>Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'calendrier' && styles.activeTab]}
          onPress={() => handleTabPress('calendrier')}>
          <Text style={styles.tabText}>Calendrier</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'événement' && styles.activeTab]}
          onPress={() => handleTabPress('événement')}>
          <Text style={styles.tabText}>Événement</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tabItem, activeTab === 'inscription' && styles.activeTab]}
          onPress={() => handleTabPress('inscription')}>
          <Text style={styles.tabText}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  scoreContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    width: '94%',
    alignItems: 'center',
  },
  sport: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft: 10
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 20,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },

    tabBar: {
      flexDirection: 'row',
      backgroundColor: '#1E1E1E',
      height: 60,
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      left: 5,
      right: 5,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      borderRadius: 20,
    },
    tabText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      textTransform: 'uppercase',
    },
    activeTab: {
      backgroundColor: '#2C2C2C',
    },




    calendrierContainer: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 10,
      marginBottom: 20,
    },
    seanceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,

    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',

    },
    seanceTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
      marginHorizontal :20,

    },
    dateTimeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    seanceDate: {
      fontSize: 14,
      marginRight: 5,
    },
    seanceTime: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    buttonContainer: {
      backgroundColor: '#FFFFFF',
    },
    button: {
      backgroundColor: '#1E90FF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
      marginRight :15,

    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 10,
      fontWeight: 'bold',
    },  




    evenementcontainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#F8F8F8',
      borderRadius: 10,
      marginBottom: 20,
    },
    titre: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    evenement: {
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: 10,
    },
    evenementTitre: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    evenementDate: {
      fontSize: 16,
      color: '#777777',
    },
    inscription: {
      alignSelf: 'flex-end',
      backgroundColor: '#FDB813',
      color: '#FFFFFF',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      marginTop: 10,
      fontWeight: 'bold',
    },



    formcontainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF',
      paddingHorizontal: 20
      },
      formheader: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20
      },
      formtext: {
      fontSize: 16,
      marginBottom: 10,
      textAlign: 'center'
      },
      formbutton: {
      backgroundColor: '#3F51B5',
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 5,
      marginTop: 20
      },
      formbuttonText: {
      color: '#FFF',
      fontSize: 16,
      textAlign: 'center'
      }

  });
    
    export default App;
