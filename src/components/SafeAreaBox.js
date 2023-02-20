import { Box } from "native-base"

import React from "react"

export const SafeAreaBox = ({ children }) => {
  return (
    <Box flex={1} safeArea>
      {children}
    </Box>
  )
}
