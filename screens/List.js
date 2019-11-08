import React, {Component} from 'react';
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme';

const {width, height} = Dimensions.get('screen');
const mocks = [
  {
    id: 1,
    user: {
      name: 'Dahlia Iskandar',
      avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    location: 'Bromo, Indonesia',
    temperature: 38,
    title: 'Mount Bromo',
    description:
      'Mount Bromo, is an active volcano and part of the Tengger massif, in East Java, Indonesia',
    rating: 4.9,
    reviews: 5931,
    preview:
      'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 2,
    user: {
      name: 'Dahlia Iskandar',
      avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    location: 'Bali, Indonesia',
    temperature: 38,
    title: 'Bali',
    description:
      'Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands.',
    rating: 4.9,
    reviews: 5931,
    preview:
      'https://images.unsplash.com/photo-1533394094150-e718bd2a3f12?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1533394094150-e718bd2a3f12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533394094150-e718bd2a3f12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533394094150-e718bd2a3f12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533394094150-e718bd2a3f12?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 3,
    user: {
      name: 'Dahlia Iskandar',
      avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    location: 'Bromo, Indonesia',
    temperature: 38,
    title: 'Mount Bromo',
    description:
      'Mount Bromo, is an active volcano and part of the Tengger massif, in East Java, Indonesia',
    rating: 4.9,
    reviews: 5931,
    preview:
      'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    id: 4,
    user: {
      name: 'Dahlia Iskandar',
      avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    location: 'Bali, Indonesia',
    temperature: 38,
    title: 'Bali',
    description:
      'Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands.',
    rating: 4.9,
    reviews: 5931,
    preview:
      'https://images.unsplash.com/photo-1533394094150-e718bd2a3f12?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1533394094150-e718bd2a3f12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533394094150-e718bd2a3f12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533394094150-e718bd2a3f12?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533394094150-e718bd2a3f12?auto=format&fit=crop&w=800&q=80',
    ],
  },
];
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {
    // paddingHorizontal: theme.sizes.padding,
  },
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
  },
  destination: {
    width: width - theme.sizes.padding * 2,
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.base,
    bottom: -theme.sizes.padding,
    right: theme.sizes.padding,
    left: theme.sizes.padding,
    backgroundColor: theme.colors.white,
  },
  recommended: {
    //   padding: theme.sizes.padding,
  },
  recommendedList: {
    //   paddingHorizontal: theme.sizes.padding,
  },
  recommendation: {
    width: (width - theme.sizes.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
  },
  recommendationImage: {
    width: (width - theme.sizes.padding * 2) / 2,
    height: (width - theme.sizes.padding * 2) / 2,
    padding: 16,
    justifyContent: 'space-between',
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.base,
  },
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active,
  },
});

class Articles extends Component {
  scrollX = new Animated.Value(0);

  static navigationOptions = {
    header: (
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <Text style={{color: theme.colors.caption}}>Search for place</Text>
          <Text style={{fontSize: theme.sizes.font * 2}}>Destination</Text>
        </View>
        <View>
          <Image
            style={styles.avatar}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/883458234685587456/KtCFjlD4.jpg',
            }}
          />
        </View>
      </View>
    ),
  };

  renderDots = () => {
    const {destinations} = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View
        style={[
          styles.flex,
          styles.row,
          {
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: theme.sizes.margin * 2,
          },
        ]}>
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, {borderWidth}]}
            />
          );
        })}
      </View>
    );
  };

  renderDestinations = () => {
    return (
      <View style={[styles.column, styles.destinations]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          style={{overflow: 'visible'}}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: this.scrollX}}},
          ])}
          renderItem={({item}) => this.renderDestination(item)}
        />

        {this.renderDots()}
      </View>
    );
  };

  renderDestination = item => {
    return (
      <ImageBackground
        style={[styles.flex, styles.destination, styles.shadow]}
        imageStyle={{borderRadius: theme.sizes.radius}}
        source={{uri: item.preview}}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View style={{flex: 0}}>
            <Image source={{uri: item.user.avatar}} style={styles.avatar} />
          </View>
          <View
            style={[
              styles.column,
              {flex: 2, paddingHorizontal: theme.sizes.padding / 2},
            ]}>
            <Text style={{color: theme.colors.white, fontWeight: 'bold'}}>
              {item.user.name}
            </Text>
            <Text style={{color: theme.colors.white}}>{item.location}</Text>
          </View>
          <View
            style={{flex: 0, justifyContent: 'center', alignItems: 'flex-end'}}>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: theme.sizes.font * 1.28,
              fontWeight: '500',
              paddingBottom: 8,
            }}>
            {item.title}
          </Text>
          <Text style={{color: theme.colors.caption}} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View
          style={[
            styles.row,
            {
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              paddingHorizontal: theme.sizes.padding,
              marginVertical: 24,
            },
          ]}>
          <Text style={{fontSize: theme.sizes.font * 1.4}}>Recommended</Text>
          <Text style={{color: theme.colors.caption, fontWeight: 'bold'}}>
            More
          </Text>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            // contentOffset={{x: 16, y: 0}}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({item, index}) =>
              this.renderRecommendation(item, index)
            }
          />
        </View>
      </View>
    );
  };

  renderRecommendation = (item, index) => {
    const {destinations} = this.props;
    const isLastItem = index === destinations.length - 1;
    return (
      <View
        style={[
          styles.flex,
          styles.column,
          styles.recommendation,
          styles.shadow,
          index === 0 ? {marginLeft: theme.sizes.margin} : null,
          isLastItem ? {marginRight: theme.sizes.margin / 2} : null,
        ]}>
        <View style={styles.flex}>
          <ImageBackground
            style={[styles.flex, styles.row, styles.recommendationImage]}
            imageStyle={{borderTopLeftRadius: 12, borderTopRightRadius: 12}}
            source={{uri: item.preview}}>
            <Text style={{color: theme.colors.white}}>{item.temperature}℃</Text>
            <Icon name='bookmark' size={theme.sizes.font} color={theme.colors.white} />
            <Text style={{color: theme.colors.white}} />
          </ImageBackground>
        </View>
        <View
          style={[
            styles.flex,
            styles.column,
            {justifyContent: 'space-evenly', padding: theme.sizes.base},
          ]}>
          <Text
            style={{
              fontSize: theme.sizes.font * 1.25,
              fontWeight: '500',
              paddingBottom: theme.sizes.padding / 4.5,
            }}>
            {item.title}
          </Text>
          <Text style={{color: theme.colors.caption}}>{item.location}</Text>
          <Text style={{color: theme.colors.active}}>{item.rating}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: theme.sizes.padding}}>
        {this.renderDestinations()}
        {this.renderRecommended()}
      </ScrollView>
    );
  }
}

Articles.defaultProps = {
  destinations: mocks,
};

export default Articles;
