import { Plan } from '@/types';
import React, {
  useMemo,
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  Pressable,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { styles } from './Carousel.styles';
import { Back, BackActive } from '@/assets/icons';

type Props = {
  data: Plan[];
  initialIndex?: number;
  contentHorizontalPadding?: number;
  onIndexChange?: (i: number) => void;
  renderItem: ({ item }: { item: Plan }) => React.ReactElement;
};

export default function Carousel({
  data,
  initialIndex = 0,
  contentHorizontalPadding = 30,
  onIndexChange,
  renderItem,
}: Props) {
  const listRef = useRef<FlatList<Plan>>(null);
  const [index, setIndex] = useState(initialIndex);

  const { width: screenWidth } = Dimensions.get('window');
  // espacio entre ítems
  const itemSpacing = 16;
  const itemWidth = useMemo(
    () => screenWidth - contentHorizontalPadding * 2,
    [screenWidth, contentHorizontalPadding],
  );

  // Acelera scrollToIndex y evita parpadeos
  const getItemLayout = useCallback(
    (_: ArrayLike<Plan> | null | undefined, i: number) => ({
      length: itemWidth + itemSpacing,
      offset: (itemWidth + itemSpacing) * i,
      index: i,
    }),
    [itemWidth],
  );

  const scrollTo = useCallback(
    (i: number) => {
      const clamped = Math.max(0, Math.min(i, data.length - 1));
      listRef.current?.scrollToIndex({
        index: clamped,
        animated: true,
        viewPosition: 0,
      });
      setIndex(clamped);
      onIndexChange?.(clamped);
    },
    [data.length, onIndexChange],
  );

  const handleNext = () => scrollTo(index + 1);
  const handlePrev = () => scrollTo(index - 1);

  const onMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const page = Math.round(x / (itemWidth + itemSpacing));
    if (page !== index) {
      setIndex(page);
      onIndexChange?.(page);
    }
  };

  // Si cambia la data, reinicia índice sin “duplicar”
  useEffect(() => {
    scrollTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.length]);

  return (
    <View style={styles.container}>
      {/* Carrusel */}
      <FlatList
        ref={listRef}
        data={data}
        horizontal
        keyExtractor={(_, i) => String(i)}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: contentHorizontalPadding }}
        onMomentumScrollEnd={onMomentumEnd}
        pagingEnabled
        snapToInterval={itemWidth + itemSpacing}
        decelerationRate="fast"
        getItemLayout={getItemLayout}
        // iOS
        snapToAlignment="start"
        disableIntervalMomentum
      />

      {/* Paginación */}
      <View style={styles.paginationBar}>
        <Pressable
          onPress={handlePrev}
          disabled={index === 0}
          style={[styles.circleBtn]}
          accessibilityRole="button"
          accessibilityLabel="Anterior"
        >
          {
            index === 0 ? <Back width={24} height={24} /> : <BackActive width={24} height={24} />
          }
        </Pressable>

        <Text style={styles.pageText}>
          {data.length === 0 ? '0 / 0' : `${index + 1} / ${data.length}`}
        </Text>

        <Pressable
          onPress={handleNext}
          disabled={index === data.length - 1 || data.length === 0}
          style={[
            styles.circleBtn
          ]}
          accessibilityRole="button"
          accessibilityLabel="Siguiente"
        >
          {
            (index === data.length - 1 || data.length === 0) ? <Back width={24} height={24} style={{ transform: [{ rotate: "180deg" }] }} /> : <BackActive width={24} height={24} style={{ transform: [{ rotate: "180deg" }] }} />
          }
        </Pressable>
      </View>
    </View>
  );
}
