import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import SimpleBar from "simplebar-react"
import Code from '@/components/Code'

type Props = {}

const DocumentationTabs = (props: Props) => {
  return (
    <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
      <TabsList>
        <TabsTrigger value='nodejs'> NodeJS </TabsTrigger>
        <TabsTrigger value='python'> Python</TabsTrigger>
      </TabsList>
      <TabsContent value='nodejs'>
        {/* <SimpleBar></SimpleBar> */}
        <Code></Code>
      </TabsContent>
      <TabsContent value='python'></TabsContent>
    </Tabs>
  )
}

export default DocumentationTabs