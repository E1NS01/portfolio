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
        email: import.meta.env.VITE_COURIER_EMAIL,
      },
      template: import.meta.env.VITE_COURIER_TEMPLATE_ID,
      data,
    },
  })
  if (requestId) {
    return true
  } else return false
}
