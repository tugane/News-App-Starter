import { SafeAreaView, StyleSheet, Text} from 'react-native'
import useColors from '../hooks/useColors'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackType } from '../types'
import { useState } from 'react'
import { News, NewsList } from '../data'
import {  } from '@expo/vector-icons'

const NewsScreen:React.FC = () => {
  const colors = useColors()
  const  {navigate} = useNavigation<NativeStackNavigationProp<RootStackType>>()

  const [news, setNews] = useState<News[]>(NewsList)
  
  return (
   <SafeAreaView>
      <Text>
      NewsScreen
      </Text>
   </SafeAreaView>
  )
}

export default NewsScreen

const styles = StyleSheet.create({})