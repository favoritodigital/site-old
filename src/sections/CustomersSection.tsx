import SlidesCustomers from '../components/SlidesCustomers'

export default function CustomersSection() {
  return (
    <div id='clientes-section' className='section_half'>
      <div id='clientes'></div>
      <h1 className='section_title'>clientes</h1>
      <div className='section_content_half'>
        <SlidesCustomers />
      </div>
    </div>
  )
}
