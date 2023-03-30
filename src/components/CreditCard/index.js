// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CreditCardContainer,
  InputCardContainer,
  CcHeading,
  Hline,
  CardImageContainer,
  CardNumber,
  CardHolderName,
  CardName,
  InputContainer,
  MethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')

  const cardNumberHandler = event => {
    setCardNumber(event.target.value)
  }

  const nameHanlder = event => {
    setName(event.target.value)
  }

  const cardName = name.toUpperCase()

  return (
    <MainContainer>
      <CreditCardContainer>
        <CcHeading>CREDIT CARD</CcHeading>
        <Hline />
        <CardImageContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <CardName>{cardName}</CardName>
        </CardImageContainer>
      </CreditCardContainer>
      <InputCardContainer>
        <InputContainer>
          <MethodHeading>Payment Method</MethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={cardNumberHandler}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={nameHanlder}
          />
        </InputContainer>
      </InputCardContainer>
    </MainContainer>
  )
}

export default CreditCard
