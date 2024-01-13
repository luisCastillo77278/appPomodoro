import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StyleSheet, Text, View } from 'react-native';
import LinkItem from './LinkItem';
import { Routes } from './links.route';

const Header = ({
  pageView,
  position
}) => {

  const handlePage = (page) =>{
    pageView.current.setPage(page)
  }

  return (
    <View style={style.header}>
      <View style={style.toolbar}>
        <MaterialIcons 
          name='timer'
          size={35}
          color="#f8fafc"
        />
        <Text style={style.title}>
          Pomodoro
        </Text>
      </View>
      <View style={style.links}>
        {
          Routes.map( route => (
            <LinkItem 
              key={route.numPage}  
              text={route.title} 
              isActive={position === route.numPage} 
              onPress={() => handlePage(route.numPage)} 
            />
          ))
        }
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    gap: 12
  },
  toolbar: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: "#f8fafc"
  },
  links: { 
    flexDirection: "row", 
    justifyContent: "space-between"
  },
})


export default Header;