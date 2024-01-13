import { Text, StyleSheet, TouchableOpacity } from 'react-native'


const LinkItem = ({text, onPress, isActive }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[style.link, isActive && style.active]}>{text}</Text>
  </TouchableOpacity>
)

const style = StyleSheet.create({
  link: {
    borderRadius: 10, 
    borderColor: "#fff", 
    borderStyle: "solid", 
    borderWidth: 1, 
    paddingVertical: 5, 
    paddingHorizontal: 10,
    color: "#f8fafc",
    fontWeight: "700"
  },
  active: {
    borderColor: '#27272a',
    color: "#27272a"
  }
})


export default LinkItem;