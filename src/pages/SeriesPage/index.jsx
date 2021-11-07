import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';

import { SerieCard } from '../../components/SerieCard';
import { AddSerieCard } from '../../components/AddSerieCard';

import series from '../../../series.json';

const SeriesPage = (props) => {
  return (
    <View>
      <FlatList
        data={[...series, { isLast: true }]}
        renderItem={({ item, index }) =>
          item.isLast ? (
            <AddSerieCard
              isFirstColumn={index % 2 === 0 ? true : false}
              onNavigate={() => props.navigation.navigate('SerieForm')}
            />
          ) : (
            <View style={styles.container}>
              <SerieCard
                serie={item}
                isFirstColumn={index % 2 === 0 ? true : false}
                onNavigate={() =>
                  props.navigation.navigate('SerieDetail', { serie: item })
                }
              />
            </View>
          )
        }
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={(props) => <View style={{ marginTop: 5 }} />}
        ListFooterComponent={(props) => <View style={{ marginBottom: 5 }} />}
      />
    </View>
  );
};

export { SeriesPage };
