import { View, Text, StyleSheet } from 'react-native';
import { formatMillisecondsToTime } from '../helpers/formatMillisecondsToTime';
const Card = ({
  timer
}) => { 
 
  return (
    <View style={style.content}>
      <Text style={style.text}>
        {
          formatMillisecondsToTime(timer)
        }
      </Text>
    </View>
  )
}


const style = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    width: "100%",
    height: 200,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  text: {
    fontSize: 128,
    fontFamily: 'font-timer',
    color: "#3f3f46"
  }
})

export default Card