// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`

export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
`

export const InputCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 2px 2px 2px 2px #d3d9e0;
`
export const CcHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  margin-bottom: 12px;
`

export const Hline = styled.hr`
  color: #ffd773;
  border: 2px solid;
  width: 160px;
  margin-top: 0px;
`

export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 32px;
  width: 80%;
  height: 50%;
  background-repeat: no-repeat;
  padding-left: 58px;
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
`

export const CardHolderName = styled.p`
  color: #c3cad9;
  font-size: 18px;
`

export const CardName = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`
export const MethodHeading = styled.h1`
  color: #344e7a;
`

export const Input = styled.input`
  width: 75%;
  padding: 12px;
  border: 1px solid #c3cad9;
  color: #475569;
  margin-bottom: 12px;
  margin-top: 12px;
  border-radius: 5px;
`
