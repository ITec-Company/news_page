import { FC } from 'react'

import { SectionType } from 'store/types'

type SectionSelectorPropsType = {
  data: SectionType[]
}

export const SelectOptions: FC<SectionSelectorPropsType> = ({ data }) => (
  <>
    {data.map(({ name, id }) => (
      <option key={id} value={id}>
        {id} - {name}
      </option>
    ))}
  </>
)
