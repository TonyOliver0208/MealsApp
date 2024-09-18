import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();
const AccountScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/girl1.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Icon name="person" size={24} color="#333" />
          <Text style={styles.optionText}>Edit Profile</Text>
          <Icon name="chevron-right" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="language" size={24} color="#333" />
          <Text style={styles.optionText}>Change Language</Text>
          <Icon name="chevron-right" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="settings" size={24} color="#333" />
          <Text style={styles.optionText}>Settings</Text>
          <Icon name="chevron-right" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="help" size={24} color="#333" />
          <Text style={styles.optionText}>Help & Support</Text>
          <Icon name="chevron-right" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="privacy-tip" size={24} color="#333" />
          <Text style={styles.optionText}>Privacy Policy</Text>
          <Icon name="chevron-right" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
  },
  logoutButton: {
    margin: 20,
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
