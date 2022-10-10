import Image from 'next/image'
import { Customer } from '../../types/customer'
import styles from './CustomerItem.module.css'
interface Props {
  customer1: Customer
  customer2?: Customer
}

export default function CustomerItem({ customer1, customer2 }: Props) {
  return (
    <>
      <div className={styles.customer}>
        <div className={styles.customerImage}>
          <Image
            layout='fill'
            src={customer1.imageUrl}
            alt={`imagem do cliente ${customer1.name}`}
          />
        </div>
        <h1 className={styles.title}>{customer1.name}</h1>
      </div>
      {customer2 && (
        <div className={styles.customer}>
          <div className={styles.customerImage}>
            <Image
              layout='fill'
              src={customer2.imageUrl}
              alt={`imagem do cliente ${customer2.name}`}
            />
          </div>
          <h1 className={styles.title}>{customer2.name}</h1>
        </div>
      )}
    </>
  )
}
