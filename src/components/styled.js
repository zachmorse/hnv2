import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainContainer = styled.div`
  margin-bottom: 75px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`

export const ControlContainer = styled.div`
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

export const ControlBox = styled(motion.div)`
  width: 20%;
  height: 100%;
  border: 1px dotted black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const ButtonText = styled.span`
  transform: rotate(-45deg);
  font-weight: 200;
`

export const CardStyleProvider = styled.div`
  font-weight: 100;
  font-size: 12px;
  margin: 20px 20px;
  border-bottom: 1px dotted black;
  color: #68a3b5;

  h1 {
    font-size: 16px;
    font-weight: 200;
    padding-right: 50px;
  }

  a {
    text-decoration: none;
    color: #68a3b5;
  }
`
