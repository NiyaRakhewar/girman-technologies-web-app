import React from 'react'
import {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent} from "./ui/card"
export const DetailsCard = () => {
  return (
    <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
   
    </CardContent>
    <CardFooter className="flex justify-between">
    
      {/* <Button>Deploy</Button> */}
    </CardFooter>
  </Card>
  )
}
