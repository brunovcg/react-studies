import { Primary } from '../button/Button.stories'
import { Regular } from '../input/Input.stories'

export default {
  title: 'form/Subscription',
}

//! STORY IN STORY

export function PrimarySubscription() {
  return (
    <>
      <Primary />
      <Regular />
    </>
  )
}
