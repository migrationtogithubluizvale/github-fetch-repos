import styled from 'styled-components'

const Logout = styled.p`
    display: 'inline-block',
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer'
`
const SubTitle = styled.h2``

const Container = styled.div``

const SignIn = ({ logout, email }) => (
  <Container>
    <SubTitle>You're signed in. Email: {email}</SubTitle>
    <Logout onClick={() => logout()}> Log out </Logout>
  </Container>
)


export default SignIn