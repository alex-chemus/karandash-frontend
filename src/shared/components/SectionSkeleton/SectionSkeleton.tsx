import { Skeleton } from "antd";
import './SectionSkeleton.scss'

export default function SectionSkeleton() {
  return (
    <Skeleton.Node
      active={true}
      className="section-skeleton"
    />
  )
}