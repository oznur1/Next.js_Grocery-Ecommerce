import React from 'react'
import {FC} from "react"
import { Product } from "@/types";


interface Props{
    product:Product;}



const Card:FC<Props> =({product}) => {
  return (
    <div>
      CARD
    </div>
  )
}

export default Card
