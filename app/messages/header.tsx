'use client'
import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ["200","400","600"],
    subsets: ['latin'] ,})

type Props = {}

const Header: React.FC = (props: Props) => {
  return (
    <>
    <h3>Conversations</h3>
    </>
  )
}

export default Header;