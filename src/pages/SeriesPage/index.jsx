import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { connect } from 'react-redux';

import { SerieCard } from '../../components/SerieCard';
import { AddSerieCard } from '../../components/AddSerieCard';

const SeriesPage = ({ series, navigation }) => {
  return (
    <View>
      <FlatList
        data={[...series, { isLast: true }]}
        renderItem={({ item, index }) =>
          item.isLast ? (
            <AddSerieCard
              isFirstColumn={index % 2 === 0 ? true : false}
              onNavigate={() => navigation.navigate('SerieForm')}
            />
          ) : (
            <View style={styles.container}>
              <SerieCard
                serie={item}
                isFirstColumn={index % 2 === 0 ? true : false}
                onNavigate={() =>
                  navigation.navigate('SerieDetail', { serie: item })
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

const mapStateToProps = (state) => {
  const { series } = state;
  return { series };
};

export default connect(mapStateToProps)(SeriesPage);
