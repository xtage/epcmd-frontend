import { Flex, Paper } from '@mantine/core'
import React from 'react'
import SearchBar from '../../../common/component/SearchBar/SearchBar'

 const PastEvents = () => {
  return (
    <Paper>
        <Flex>
          <SearchBar placeholder='Search events'/>
        </Flex>
    </Paper>
  )
}
export default PastEvents