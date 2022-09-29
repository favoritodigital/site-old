import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import CustomerItem from '../components/CustomerItem'

import { Customer } from '../types/customer'

import { rawCustomers } from '../utils/repository'

export default function SlidesCustomers() {
  const chunk = (chunkSize: number, array: Customer[]) => {
    const customers: Customer[][] = []

    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize)
      customers[i] = chunk
    }

    return customers
  }
  const [customers, setCustomers] = useState<Customer[][]>([])

  useEffect(() => {
    const customers = chunk(2, rawCustomers)

    setCustomers(customers)
  }, [])

  return (
    <div className='slide-wrapper'>
      <Swiper className='mobile' slidesPerView={3.3}>
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
  )
}
