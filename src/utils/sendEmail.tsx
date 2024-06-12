import { EmailData } from '@/types/apiTypes'
import { CourierClient } from '@trycourier/courier'

const authorizationToken = import.meta.env.VITE_COURIER_TOKEN

const courier = new CourierClient({
  authorizationToken,
})

export async function sendEmail(data: EmailData) {
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
