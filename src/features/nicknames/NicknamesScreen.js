import { Box, FlatList, Text } from "native-base"
import React from "react"
import DATA from "../../data/names.json"

export const NicknamesScreen = () => {
  return (
    <Box flex={1} p={4} bg='muted.50'>
      <FlatList
        removeClippedSubviews
        data={DATA}
        renderItem={({ item }) => (
          <Box borderBottomWidth='1' borderColor='muted.200' py='3'>
            <Text
              pl='2'
              _dark={{
                color: "warmGray.50",
              }}
              color='coolGray.800'
              bold>
              {item.content}
            </Text>
          </Box>
        )}
        keyExtractor={(item) => `${item.timestamp_ms}`}
      />
    </Box>
  )
}
