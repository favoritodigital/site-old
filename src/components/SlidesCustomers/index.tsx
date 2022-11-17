import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import CustomerItem from '../CustomerItem'

import { Customer } from '../../types/customer'

import { rawCustomers } from '../../repositories/rawCustomers'

import styles from './styles.module.css'

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
    <div className={styles.slideWrapper}>
      <Swiper className={styles.mobile} slidesPerView={3.3}>
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
      <Swiper className={styles.tablet} slidesPerView={5.3}>
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
      <Swiper className={styles.webLarge} slidesPerView={7.3}>
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
      <Swiper className={styles.webXLarge} slidesPerView={9.3}>
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
