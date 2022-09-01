//REACT
import { useEffect, useState } from 'react'

//SWIPER
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

//COMPONENTS
import CustomerItem from '../components/CustumerItem'

//TYPES
import { Customer } from '../types/Customer'

//REPOSITORY
import { rawCustomers } from '../Repository'

//CUSTOMERS CHUNK ARRAY - SWIPER MOBILE
const chunk = (chunkSize: number, array: Customer[]) => {
  let customers: Customer[][] = []

  for (let i = 0; i < rawCustomers.length; i += chunkSize) {
    const chunk = rawCustomers.slice(i, i + chunkSize)
    customers[i] = chunk
  }

  return customers
}

//CLIENTES SECTION
export default function ClientesSection() {
  const [customers, setCustomers] = useState<Customer[][]>([])

  useEffect(() => {
    const customers = chunk(2, rawCustomers)

    setCustomers(customers)
  }, [])

  return (
    <div id="clientes-section" className="section_half">
      <div id="clientes"></div>
      <h1 className="section_title">clientes</h1>
      <div className="section_content_half">
        <div className="swiper_wrapper">
          <Swiper className="mobile" slidesPerView={2.33}>
            {customers.map(customer => {
              return (
                <SwiperSlide key={customer[0].name}>
                  <CustomerItem
                    customer1={customer[0]}
                    customer2={customer.length === 2 ? customer[1] : undefined}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Swiper className="tablet" slidesPerView={5.33}>
            {customers.map(customer => {
              return (
                <SwiperSlide key={customer[0].name}>
                  <CustomerItem
                    customer1={customer[0]}
                    customer2={customer.length === 2 ? customer[1] : undefined}
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
