import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  I18nManager,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';

const Home = ({navigation}) => {
  const {t, i18n} = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: t('Home'),
    });
  });

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('Hello world')}</Text>
          <Text style={styles.regularText}>
            {t('Some text goes here, some more text goes here')}
          </Text>
        </View>
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('Row test')}</Text>
          <View style={styles.row}>
            <Text>{t('column 1')}</Text>
            <Text>{t('column 2')}</Text>
            <Text>{t('column 3')}</Text>
          </View>
        </View>
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('Textinput test')}</Text>
          <TextInput style={styles.textInput} placeholder={t('Testing')} />
        </View>
        <View style={styles.sectionWrapper}>
          <Button
            title={t('Go to Inner screen ->')}
            onPress={() => navigation.navigate('Inner')}
          />
        </View>
        <View style={styles.sectionWrapper}>
          <Button
            title={t('Change language')}
            onPress={() => {
              i18n
                .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
                .then(() => {
                  I18nManager.forceRTL(i18n.language === 'ar');
                  RNRestart.Restart();
                });
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f3f3f3',
    flex: 1,
  },
  sectionWrapper: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'left',
  },
  regularText: {
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});

export default Home;
