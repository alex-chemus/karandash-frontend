import { Select, SelectProps } from "antd"
import { HttpResponse, RequestParams } from "../../../api/Api"
import { useState } from "react"
import { IconChevronDown } from "@tabler/icons-react"
import './ComboBox.scss'

type Item = {
  title: string,
  id: number
}

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: (params?: RequestParams) => Promise<HttpResponse<Item[], any>>
} & SelectProps

export default function ComboBox({ dataSource, ...selectProps }: Props) {
  const [options, setOptions] = useState<Item[] | null>(null)

  const onDropdownChange = (isVisible: boolean) => {
    if (isVisible) {
      dataSource().then(res => setOptions(res.data))
    }
  }

  return (
    <Select
      {...selectProps}
      options={options ? options.map(option => ({ value: option.id, label: option.title })) : []}
      onDropdownVisibleChange={onDropdownChange}
      suffixIcon={<IconChevronDown />}
      className="combobox"
      defaultValue={options?.[0]}
    />
  )
}