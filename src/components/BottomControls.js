import React from 'react'
import { ControlContainer, ControlBox, ButtonText } from './styled'

const tappedOptions = {
  scale: 0.9,
  color: '#9BD6E8',
}

const BottomControls = props => {
  return (
    <>
      <ControlContainer>
        <ControlBox
          whileTap={tappedOptions}
          onClick={() => {
            props.toggleStoryMenu()
          }}>
          <ButtonText>mode</ButtonText>
        </ControlBox>
        <ControlBox whileTap={tappedOptions}>
          <ButtonText>test</ButtonText>
        </ControlBox>
        <ControlBox whileTap={tappedOptions}>
          <ButtonText>cmnts</ButtonText>
        </ControlBox>
        <ControlBox whileTap={tappedOptions} onClick={() => props.updatePosts('rev')}>
          <ButtonText>prev</ButtonText>
        </ControlBox>
        <ControlBox whileTap={tappedOptions} onClick={() => props.updatePosts('fwd')}>
          <ButtonText>next</ButtonText>
        </ControlBox>
      </ControlContainer>
    </>
  )
}

export default BottomControls
