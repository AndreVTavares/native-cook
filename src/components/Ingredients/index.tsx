import { Image, Pressable, Text } from "react-native"

export default function Ingredient() {
  return (
    <Pressable>
      <Image source={require("@/assets/tomato.png")}/>
      <Text>Maçã</Text>
    </Pressable>
  )
}
