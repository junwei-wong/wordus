import { useMemo, useState, useEffect } from 'react'
import Wordlist from './../words_dictionary.json'
import Select from 'react-select'

function SearchBox() {
  const wordListArray = Object.keys(Wordlist)
  const [count, setCount] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchTerm(inputValue)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [inputValue])

  const onInputChangeHandler = (value: string) => {
    if (value && value !== inputValue) {
      setInputValue(value)
      setIsLoading(true)
    }
  }

  const onChangeHandler = (value: any) => {
    if (value)
      console.log(value)
    setIsLoading(false)
  }

  const optionWordList = useMemo(() =>
    wordListArray
      .filter((word: string) => word.includes(searchTerm))
      .slice(0, count * 100)
      .map((word: string) => {
        return { value: word, label: word }
      }), [count, searchTerm])

  return (
    <Select
      autoFocus
      options={optionWordList}
      onMenuScrollToBottom={() => setCount(prevState => prevState + 1)}
      onInputChange={(e) => onInputChangeHandler(e)}
      onChange={(e) => onChangeHandler(e?.value)}
      isLoading={isLoading}
      isClearable
      placeholder={'Type to search'}
    />
  )
}

export default SearchBox
