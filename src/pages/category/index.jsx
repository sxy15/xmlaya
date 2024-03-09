import React, {useEffect, useState} from 'react';
import useStore from '@/store';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeaderRightBtn from './HeaderRightBtn';
import {CategoryData} from '@/mock/category';

function RenderItem({item, isEdit, isMe, changeEdit, setCache}) {
  const handleLongPress = () => {
    changeEdit(true);
  };
  const handlePress = () => {
    if (!isEdit) {
      return;
    }
    if (item.disable) {
      return;
    }
    setCache(item, isMe);
  };
  return (
    <TouchableOpacity
      style={styles.itemWrap}
      activeOpacity={1}
      key={item.id}
      onPress={handlePress}
      onLongPress={handleLongPress}>
      <View style={[styles.item, isEdit && item.disable && styles.disabled]}>
        <Text style={styles.text}>{item.title}</Text>

        {isEdit && !item.disable && (
          <View style={styles.icon}>
            <Text style={styles.iconText}>{isMe ? '-' : '+'}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

function Category() {
  const navigation = useNavigation();
  const cacheIds = useStore(state => state.cacheIds);
  const updateCacheIds = useStore(state => state.updateCacheIds);
  const initMyCategory = useStore(state => state.initMyCategory);
  const setCategory = useStore(state => state.setCategory);
  const [edit, changeEdit] = useState(false);

  const handleEdit = () => {
    if (edit) {
      setCategory();
    }
    changeEdit(!edit);
  };

  const setCache = (item, isMe) => {
    updateCacheIds(isMe ? 'remove' : 'add', item.id);
  };

  useEffect(() => {
    initMyCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRightBtn handleEdit={handleEdit} edit={edit} />,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>我的分类</Text>
      <View style={styles.list}>
        {CategoryData.filter(item => cacheIds.includes(item.id)).map(item => (
          <RenderItem
            item={item}
            isEdit={edit}
            isMe={true}
            setCache={setCache}
            changeEdit={changeEdit}
          />
        ))}
      </View>
      <Text style={styles.h1}>其他</Text>
      <View style={styles.list}>
        {CategoryData.filter(item => !cacheIds.includes(item.id)).map(item => (
          <RenderItem
            item={item}
            isEdit={edit}
            isMe={false}
            setCache={setCache}
            changeEdit={changeEdit}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6f6',
  },
  h1: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 14,
    marginLeft: 10,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  itemWrap: {
    marginBottom: 8,
    marginTop: 14,
    marginHorizontal: '1%',
    fontSize: 18,
    height: 40,
    width: '23%',
  },
  item: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 4,
  },
  text: {
    color: '#222',
  },
  icon: {
    position: 'absolute',
    top: -4,
    right: -4,
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f86442',
    borderRadius: 8,
  },
  iconText: {
    lineHeight: 15,
    color: '#fff',
  },
  disabled: {
    backgroundColor: '#aaa',
  },
});

export default Category;
