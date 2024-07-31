import { useState } from 'react'
import { SafeAreaView, Text, TextInput } from 'react-native'
export default function AddDeckScreen() {
    const [deckName, setDeckName] = useState('')
    return (
        <SafeAreaView>
            <TextInput
                placeholder='name of the deck'
                onChangeText={value => setDeckName(value)}
            />
        </SafeAreaView>
    )
}
