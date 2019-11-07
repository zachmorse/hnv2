import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ControlContainer = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  height: 75px;
  width: 100vw;
  color: #68a3b5;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
`

const ControlBox = styled(motion.div)`
  width: 20%;
  height: 100%;
  border: 1px dotted black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ButtonText = styled.span`
  transform: rotate(-45deg);
  font-weight: 200;
`

const BottomControls = props => {
  return (
    <>
      <ControlContainer>
        <ControlBox whileTap={{ scale: 0.95, color: '#9BD6E8' }}>
          <ButtonText>mode</ButtonText>
        </ControlBox>
        <ControlBox whileTap={{ scale: 0.95, color: '#9BD6E8' }}>
          <ButtonText>test</ButtonText>
        </ControlBox>
        <ControlBox whileTap={{ scale: 0.95, color: '#9BD6E8' }}>
          <ButtonText>cmnts</ButtonText>
        </ControlBox>
        <ControlBox whileTap={{ scale: 0.95, color: '#9BD6E8' }} onClick={() => props.updatePosts('rev')}>
          <ButtonText>prev</ButtonText>
        </ControlBox>
        <ControlBox whileTap={{ scale: 0.95, color: '#9BD6E8' }} onClick={() => props.updatePosts('fwd')}>
          <ButtonText>next</ButtonText>
        </ControlBox>
      </ControlContainer>
    </>
  )
}

export default BottomControls
