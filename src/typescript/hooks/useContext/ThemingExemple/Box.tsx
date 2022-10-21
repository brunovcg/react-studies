import { useTheming } from '.'

const Box = () => {
  const { primary, secondary } = useTheming()

  return (
    <>
      <div
        style={{
          backgroundColor: primary.main,
          color: primary.text,
          width: 'fit-content',
        }}
      >
        Theme context Primary
      </div>
      <div
        style={{
          backgroundColor: secondary.main,
          color: secondary.text,
          width: 'fit-content',
        }}
      >
        Theme context Secondary
      </div>
    </>
  )
}

export default Box
