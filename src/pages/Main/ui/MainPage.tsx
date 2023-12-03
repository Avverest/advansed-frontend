import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { AppLink } from 'shared/ui'

const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <div>
      <h1>Some shit</h1>
      <AppLink to='#'>Link</AppLink>
      <br />
      <p>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
        В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
        используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без
        заметных изменений пять веков, но и перешагнул в электронный дизайн.
        Его популяризации в новое время послужили публикация листов Letraset с
        образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы
        электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
      </p>
      <BugButton />
      {t('Главная')}
    </div>
  )
}

export default MainPage
