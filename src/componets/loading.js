import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Loading = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl 
	    style={styles.refrescar}	
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  refrescar:{
    position: "absolute",
    top :200
  },
  

});

export default Loading;
