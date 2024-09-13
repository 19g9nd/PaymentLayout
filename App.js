import React from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const show = async () => {
  await SystemNavigationBar.setNavigationColor('#3A2636');
  const result = await SystemNavigationBar.navigationShow();
  console.log('Show: ', result);
};
show();

const transactionsData = [
  {
    id: '1',
    title: 'Spotify Premium',
    time: '2 minutes ago',
    amount: 20,
  },
  {
    id: '2',
    title: 'Steam Top Up',
    time: '5 days ago',
    amount: 150,
  },
  {
    id: '3',
    title: 'Amazon',
    time: '1 week ago',
    amount: 57,
  },
  {
    id: '4',
    title: 'Dribble Pro',
    time: '1 week ago',
    amount: 110,
  },
  {
    id: '5',
    title: 'Epic Games',
    time: '2 minutes ago',
    amount: 200,
  },
];

const renderItem = ({item}) => (
  <View style={styles.transaction}>
    <View style={styles.profile}>
      <View style={styles.imgContainer}>
        <View style={styles.galleryContainer}>
          <Image
            style={styles.galleryImg}
            source={require('./assets/gallery.png')}
          />
        </View>
      </View>

      <View style={styles.transactionMainInfo}>
        <Text style={styles.transactionText}>{item.title}</Text>
        <Text style={styles.transactionTime}>{item.time}</Text>
      </View>
    </View>

    <View style={styles.transactionDetails}>
      <Text style={styles.transactionAmount}>${item.amount}</Text>
    </View>
  </View>
);

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
            <Text style={styles.dollarSign}>$</Text>7429,23
          </Text>
          <View style={styles.line} />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                {' '}
                <Image
                  style={styles.interractImg}
                  source={require('./assets/plus.png')}
                />{' '}
                Add New Card
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                {' '}
                <Image
                  style={styles.interractImg}
                  source={require('./assets/transfer.png')}
                />{' '}
                Change Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.body}>
        <View style={styles.transactionContainer}>
          <Text style={styles.sectionTitle}>Recent Transaction</Text>
          <Text style={styles.linkText}>Show All</Text>
        </View>
        <FlatList
          data={transactionsData}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
        />
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
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 16,
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
  interractImg: {
    width: 18,
    marginRight: 10,
    height: 18,
  },
 divider: {
  width: '20%',
  marginTop: 20,
  height: 4, 
  alignSelf: 'center', 
  borderColor: '#9c929a', 
  borderRadius: 50,
  backgroundColor: '#9c929a', 
  },
  currency: {
    fontSize: 18,
    color: '#c4bec3',
  },
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    gap: 8,
  },
  currentBalance: {
    fontSize: 48,
    color: 'white',
  },
  dollarSign: {
    color: '#FFFFFF8A',
    fontWeight: 'ultralight',
  },
  line: {
    width: '90%',
    marginTop: 20,
    borderColor: '#FFFFFF4D',
    borderWidth: 1,
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
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  transactionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  transactionTime: {
    gap: 12,
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4e3c49',
    borderRadius: 12,
    paddingVertical: 16,
    gap: 12,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    alignContent: 'center',
    color: '#FFF',
    fontSize: 18,
  },
});

export default App;
