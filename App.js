import React from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
  StatusBar,
  Image,
} from 'react-native';

const show = async () => {
  await SystemNavigationBar.setNavigationColor('#3A2636');
  const result = await SystemNavigationBar.navigationShow();
  console.log('Show: ', result);
};
show();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#3A2636" barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.galleryImg}
              source={require('./assets/gallery.png')}
            />
          </View>
          <View>
            <Text style={styles.headerSubtitle}>Hello!</Text>
            <Text style={styles.headerTitle}>Esther Howard</Text>
          </View>
          <View style={styles.walletContainer}>
            <Image
              style={styles.walletImg}
              source={require('./assets/wallet.png')}
            />
          </View>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.currency}>Current Balance</Text>
          <Text style={styles.currentBalance}>
            <Text style={styles.dollarSign}>$</Text>
            7429,23
          </Text>
          <Image
            style={styles.lineImg}
            source={require('./assets/line.png')}
          />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.transactionContainer}>
          <Text style={styles.sectionTitle}>Recent Transaction</Text>
          <Text style={styles.linkText}>Show All</Text>
        </View>
        <View>
          <Text style={styles.transactionText}>SPOTIFY</Text>
        </View>
      </View>


    </SafeAreaView>
  );
};

const imgContainerSize = 44;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#3A2636',
    height: 398,
    paddingRight: 18,
    paddingBottom: 14,
    paddingTop: 42,
    paddingLeft: 18,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  body: {
    backgroundColor: 'green',
    height: '100%',
  },
  transactionContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 16,
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    gap: 12,
  },
  imgContainer: {
    borderRadius: 9999,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    width: imgContainerSize,
    height: imgContainerSize,
  },
  walletContainer: {
    borderRadius: 9999,
    borderColor: '#FFFFFF4D',
    borderWidth: 1.5,
    width: imgContainerSize,
    height: imgContainerSize,
    position: 'absolute',
    right: 0,
  },
  galleryImg: {
    width: imgContainerSize / 2,
    height: imgContainerSize / 2,
  },
  walletImg: {
    width: imgContainerSize / 2,
    height: imgContainerSize / 2,
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  headerSubtitle: {
    color: '#9c929b',
    fontSize: 18,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },

  currency: {
    fontSize: 18,
    color: '#c4bec3',
  },
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  currentBalance: {
    fontSize: 48,
    color: 'white',
  },
  dollarSign: {
    color: '#FFFFFF8A',
    fontWeight: 'ultralight',
  },
  lineImg:{
    width: '90%',
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 20,
    lineHeight: 24.6,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#010101',
    flex: 1,
  },
  linkText: {
    color: '#5490A1',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
  },
  transactionText: {
    fontSize: 20,
    color: '#333',
  },
  transactionAmount: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  transactionDate: {
    fontSize: 12,
    color: '#666',
  },

});

export default App;
