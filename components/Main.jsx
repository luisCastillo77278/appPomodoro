import { useEffect, useRef, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native'
import PagerView from 'react-native-pager-view'
import Card from './Card'
import Button from './Button'
import Header from './Header'

const initialState = [
  { key: 0, timer: 1500000 },
  { key: 1, timer: 300000 },
  { key: 2, timer: 900000 }
]

export default function Main(){
  const refPage = useRef(null)
  const [position, setPosition] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(initialState)

  const handleClick = () => setIsRunning(!isRunning);
  const handlePage = (e) => setPosition(e.nativeEvent.position)
  
  useEffect(() => {
    let interval;
    if(isRunning){
      interval = setInterval(() => {
        const updateTimers = [...timer];
        updateTimers[position] = { 
          ...updateTimers[position], 
          timer: updateTimers[position].timer - 1000 
        };
        setTimer(updateTimers)  
      }, 1000)
    
      if(timer[position].timer === -1000){
        setTimer(initialState)
        setIsRunning(false)
      }
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
    
  }, [isRunning, timer])


  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <Header pageView={refPage} position={position} />
        <PagerView 
          ref={refPage}
          onPageSelected={handlePage}
          style={styles.pageView} 
          pageMargin={6}
          scrollEnabled={false}
        >
          {
            timer.map( item => (
              <View key={item.key}>
                <Card timer={item.timer} />
              </View>
            ))
          }
        </PagerView> 
        <Button onClick={handleClick}>{isRunning ? 'stop' : 'start'}</Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  view: { 
    paddingHorizontal: 10,
    flex: 2 / 4,
    justifyContent: 'space-between'
  },
  pageView: {
    width: '100%',
    height: 200
  },
  button: {
    backgroundColor: 'red',
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