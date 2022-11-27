import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const Details = ({ word }: { word: string }) => {
  const [newWord, setNewWord] = useState('')
  useEffect(() => {
    setNewWord(word)
    console.log(word)
  }, [word])
  const { isLoading, error, data }: { isLoading: boolean, error: any, data: any } = useQuery({
    queryKey: ['wordMeaning'],
    queryFn: () =>
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`)
        .then(res => res.json)
  })

  if (isLoading) return <>Loading....</>
  if (error) return <>An error has occured</>
  return <>{data[0]}</>
}

export default Details