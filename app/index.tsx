import { useEffect, useState, useReducer } from 'react'
import { SafeAreaView, View } from 'react-native'
import Search from '../components/Search'
import DecksList from '../components/DecksList'
import Button from '@/components/Button'
import { DecksProvider, useDecks, useDecksDispatch } from '@/context/DecksContext'
import AddDeck from '@/components/AddDeck'

export default function HomeScreen() {
  const [query, setQuery] = useState('')

  return (
    <SafeAreaView>
      <DecksProvider>
        <View style={{ flexDirection: 'row' }}>
          <Search setQuery={setQuery} />
          <AddDeck text='Add' deckName={query} />
        </View>
        <DecksList filter={query} />
      </DecksProvider>
    </SafeAreaView>
  )
}
