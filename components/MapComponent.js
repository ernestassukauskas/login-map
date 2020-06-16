import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class Map extends React.Component {
  render() {
    const GOOGLE_MAPS_APIKEY = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

    return (
      <View>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 59.461807,
            longitude: 40.119934,
            latitudeDelta: 15.4922,
            longitudeDelta: 15.4421,
          }}
          >
            <Marker coordinate = {{ latitude: 59.461807, longitude: 40.119934 }}
              pinColor = {"purple"}
              title={"start"}
              description={"Sokol, Vologda, Russia"}
              />
            <Marker coordinate = {{ latitude: 55.757946, longitude: 37.614576 }}
              pinColor = {"green"}
              title={"end"}
              description={"Moskva, Russia"}
              />
            <Marker coordinate = {{ latitude: 56.201916, longitude: 40.42313 }}
              pinColor = {"green"}
              title={"end"}
              description={"Vladimir, Russia"}
              />
            <Marker coordinate = {{ latitude: 61.255529, longitude: 42.136997 }}
              pinColor = {"green"} 
              title={"end"}
              description={"Vielsky, Russia"}
            />
            <MapViewDirections
              origin={{latitude: 59.461807, longitude: 40.119934}}
              destination={{latitude: 55.757946, longitude: 37.614576}}
              apikey={GOOGLE_MAPS_APIKEY}
            />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

