// REACT
import { useEffect, useState } from 'react'

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// COMPONENTS
import CustomerItem from '../components/CustomerItem'

// TYPES
import { Customer } from '../types/customer'

// REPOSITORY
import { rawCustomers } from '../utils/repository'

// CUSTOMERS CHUNK ARRAY - SWIPER MOBILE
const chunk = (chunkSize: number, array: Customer[]) => {
  const customers: Customer[][] = []

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    customers[i] = chunk
  }

  return customers
}

// CLIENTES SECTION
export default function CustomersSection() {
  const [customers, setCustomers] = useState<Customer[][]>([])

  useEffect(() => {
    const customers = chunk(2, rawCustomers)

    setCustomers(customers)
  }, [])

  return (
    <div id='clientes-section' className='section_half'>
      <div id='clientes'></div>
      <h1 className='section_title'>clientes</h1>
      <div className='section_content_half'>
        <div className='swiper_wrapper'>
          <Swiper className='mobile' slidesPerView={2.3}>
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
          <Swiper className='tablet' slidesPerView={5.3}>
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
          <Swiper className='web-large' slidesPerView={7.3}>
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
          <Swiper className='web-x-large' slidesPerView={9.3}>
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
