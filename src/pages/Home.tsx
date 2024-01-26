import { Image,Box, Text, Card, CardBody, Heading, SimpleGrid, Stack, Button, HStack, Spinner } from '@chakra-ui/react'
import './Home.module.css'
import { useEffect, useState } from 'react';
import catFactsApi from '../services/catFactsApi';
import catImagesApi from '../services/catImagesApi';

type CatFact = {
    fact: string,
    length: number
}


type Cat = {
    facts: CatFact;
    image: string;
}



function Home() {


    const [cat, setCat] = useState<Cat[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        getCat();
    }, []);

    const getCat = async () => {
        setLoading(true)
        try {

            for (let i = 0; i < 3; i++) {

                
            const factResponse = await catFactsApi.get<CatFact>('/fact');
            const imageResponse = await catImagesApi.get<Blob>('/cat', { responseType: 'blob' });

            const imageUrl = URL.createObjectURL(imageResponse.data);

            setCat(prevCats => [
                ...prevCats,
                {
                    facts: factResponse.data,
                    image: imageUrl
                }
            ]);
            }

        } catch (error) {
            console.error(error);
        }

        setLoading(false)
    };




    return (

        <>
            <Stack mt={13} justify={'center'}>



                <SimpleGrid columns={3} spacing={10}>
                    {cat.map((catItem, index) => (
                        <Card key={index} maxW='sm' variant={'filled'}>
                            <CardBody>
                                <Image
                                    maxH={260}
                                    w={'100%'}
                                    src={catItem.image}
                                    alt='Cat'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Cat Fact</Heading>
                                    <Text>
                                        {catItem.facts.fact}
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    ))}
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}> 
                        {loading && <Spinner />}
                    </Box>
                </SimpleGrid>


                <HStack my={16} justify={'center'}>
                    <Button onClick={getCat}>Carregar mais</Button>
                </HStack>
            </Stack>

        </>
    )
}

export default Home
