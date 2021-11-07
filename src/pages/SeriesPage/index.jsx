import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { connect } from 'react-redux';

import { SerieCard } from '../../components/SerieCard';
import { AddSerieCard } from '../../components/AddSerieCard';
import { watchSeries } from '../../actions';

class SeriesPage extends React.Component {
  componentDidMount() {
    this.props.watchSeries();
  }

  render() {
    const { series, navigation } = this.props;
    if (series === null) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

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
  }
}

const mapStateToProps = (state) => {
  const { series } = state;
  if (series === null) {
    return { series };
  }

  const keys = Object.keys(series);
  const seriesWithKeys = keys.map((key) => {
    return { ...series[key], id: key };
  });
  return { series: seriesWithKeys };
};

export default connect(mapStateToProps, { watchSeries })(SeriesPage);
