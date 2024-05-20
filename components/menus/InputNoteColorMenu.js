import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const options = [
  { label: 'Option 1', onPress: () => console.log('Option 1 selected') },
  { label: 'Option 2', onPress: () => console.log('Option 2 selected') },
  { label: 'Option 3', onPress: () => console.log('Option 3 selected') },
  { label: 'Option 4', onPress: () => console.log('Option 4 selected') },
  { label: 'Option 5', onPress: () => console.log('Option 5 selected') },
  { label: 'Option 6', onPress: () => console.log('Option 6 selected') },
  { label: 'Option 7', onPress: () => console.log('Option 7 selected') },
  { label: 'Option 8', onPress: () => console.log('Option 8 selected') },
  { label: 'Option 9', onPress: () => console.log('Option 9 selected') },
];

export const InputNoteColorMenu = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text>Show Action Sheet</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <ScrollView horizontal style={styles.optionContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => {
                  option.onPress();
                  setModalVisible(false);
                }}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'lightblue',
    borderRadius: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  optionContainer: {
    minHeight: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  optionButton: {
    padding: 12,
    marginHorizontal: 6,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    height: 100,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
