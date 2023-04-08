"use client";

import React, { useState } from 'react'
import { Button } from './ui/Button';
import { signIn } from 'next-auth/react';

type Props = {}

const SignOutBotton = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUserOut = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
    }
  }

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>SignOutBotton</Button>
  )
}

export default SignOutBotton