import { ScrollView, Text, View } from "react-native"
import { styles } from './styles'
import { Ingredient } from "@/components/Ingredient"
import { useState } from "react"

export default function Index() {
    const [selected, setSelected] = useState<string[]>([])

    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected(state => state.filter((item) => item !== value))
        }

        setSelected(state => [...state, value])
        console.log(selected)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>

            <Text style={styles.message}>
                Descubra receitas baseadas nos produtos que você escolheu
            </Text>

            <ScrollView
                contentContainerStyle={styles.ingredientsContainer}
                showsVerticalScrollIndicator={false}
            >
                {
                    Array.from({ length: 50 }).map((item, index) => (
                        <Ingredient
                            key={index}
                            name="tomate"
                            image=""
                            selected={selected.includes(String(index))}
                            onPress={() => handleToggleSelected(String(index))}
                        />
                    ))
                }
            </ScrollView>


        </View>
    )
}