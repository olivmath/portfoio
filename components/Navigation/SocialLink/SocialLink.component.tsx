import Link from "next/link"

export interface Props {
  url: string,
  children: string
}

const SocialLink = ({url, children}: Props) => {
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  )
}


export default SocialLink