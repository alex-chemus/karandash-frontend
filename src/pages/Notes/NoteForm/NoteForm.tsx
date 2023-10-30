import { Typography } from "antd";

type Props = {
  mode: 'add' | 'edit'
}

export default function NoteForm({ mode }: Props) {
  return <Typography>{mode} note</Typography>
}