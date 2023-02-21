import React, { useContext } from "react"
import {
  Button,

} from "native-base"
import { AppContext } from "../../context/AppContext"

export const GetNicknameButton = () => {
  const { getNewRandomNickname } = useContext(AppContext)
  return (
    <Button
      size='lg'
      _text={{
        color: "muted.700",
        fontWeight: "bold",
      }}
      p={4}
      _pressed={{
        backgroundColor: "muted.50",
        borderColor: "muted.400",
        _text: { color: "muted.500" },
      }}
      bg='muted.200'
      variant='ghost'
      borderWidth={1}
      onPress={() => getNewRandomNickname()}>
      Get NickName
    </Button>
  )
}
