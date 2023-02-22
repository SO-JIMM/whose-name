import { Box, FlatList, Text } from "native-base"
import React from "react"
import DATA from "../../data/names.json"

const renderItem = ({ item: { content } }) => (
  <Box
    borderBottomWidth='1'
    _dark={{
      borderColor: "muted.50",
    }}
    borderColor='muted.800'
    pl={["0", "4"]}
    pr={["0", "5"]}
    py='2'>
    <Text
      w='300'
      my='2'
      pl='4'
      _dark={{
        color: "warmGray.50",
      }}
      color='coolGray.800'
      bold>
      {content}
    </Text>
  </Box>
)

export const NicknamesScreen = () => {
  const data = DATA
  return (
    <Box flex={1} alignItems='center' marginTop={12}>
      <Box
        w='sm'
        height='md'
        bg='muted.200'
        alignItems='center'
        borderColor='black'
        borderWidth={1}
        p={4}
        borderRadius={8}>
        <FlatList
          _contentContainerStyle={{
            bg: "muted.50",
          }}
          initialNumToRender={12}
          data={data}
          renderItem={renderItem}
        />
      </Box>
    </Box>
  )
}
