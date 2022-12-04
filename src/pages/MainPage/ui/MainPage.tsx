import { BugButton } from 'app/providers/ErrorBoundary'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = () => {
  const { t, i18n } = useTranslation()

  const [value, setValue] = useState('')

  const onChange = (value: string) => {
    setValue(value)
  }
  return (
      <div>
          <BugButton/>
          <Input placeholder={'Write a text'} value={value} onChange={onChange}/>
          {t('Main page')}
      </div>
  )
}

export default MainPage
