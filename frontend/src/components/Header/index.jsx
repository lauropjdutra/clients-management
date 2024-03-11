import * as H from "./style"

export const Header = () => {
  const imgUrl = "https://facilitajuridicoweb.com/wp-content/uploads/2022/04/logo-horizontal-esp-2.png"

  return (
    <H.Container>
      <H.Logo src={imgUrl} alt="Logo Facilita Jurídico" title="Facilita Jurídico" />
    </H.Container>
  )
}