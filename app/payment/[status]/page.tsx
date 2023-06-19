import OrderConfirmed from "@/components/OrderConfirmed";

export default function Payment({ params }: { params: { status: string } }) {
  const { status } = params
  if (status === 'success')
    return (<OrderConfirmed />)
  
}