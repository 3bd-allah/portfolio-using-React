import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image ,Stack ,Heading , Text , Divider , Button, ButtonGroup } from '@chakra-ui/react'
import '../../styles/ProjectSection.css'

const ProjectCard2 = ({title , img, url ,description, ...props }) => {
  return (
<Card maxW='sm' spacing={24} className='card m-4 border border-2 ' > 
  <CardBody>
    <Image
      src={img}
      alt='Logo of the project'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text className='text-start '>
       {description}
      </Text>
    
    </Stack>
  </CardBody>
  <Divider/>
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        <a href={url}>
            Read more...
        </a>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>  )
}

export default ProjectCard2