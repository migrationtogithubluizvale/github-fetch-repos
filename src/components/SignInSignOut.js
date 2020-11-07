import Link from 'next/link'

const SignInSignOut = () => (
  <>
    <p>
      You are not signed in.{' '}
      <Link href={'/auth'}>
        <a>Sign in</a>
      </Link>
    </p>
  </>

)

export default SignInSignOut