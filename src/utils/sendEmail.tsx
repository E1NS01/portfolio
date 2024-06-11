import { CourierClient } from '@trycourier/courier'
import dotenv from 'dotenv'

dotenv.config()

const courier = new CourierClient({
  authorizationToken: process.env.REACT_APP_COURIER_TOKEN,
})

export async function sendEmail(data: {
  name: string
  email: string
  message: string
}) {
  const { requestId } = await courier.send({
    message: {
      to: {
        email: 'jl_fischer@icloud.com',
      },
      template: 'ZGD3S4WAAGMDAFNHRJJ2CFD64BXN',
      data,
    },
  })
  if (requestId) {
    return true
  } else return false
}
