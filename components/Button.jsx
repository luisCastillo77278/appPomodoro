import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const Button = ({ onClick, children }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Text style={styles.label}>{ children.toUpperCase() }</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#374151',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center'
  },
  label: {
    color: "white",
    fontSize: 18

  }
})

export default Button