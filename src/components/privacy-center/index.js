import React from 'react'
import AboutPrivacy from './about-privacy'
import ContactForm from '../contact/contact-form'
import Audits from './audits'
import PrivacyList from './privacy-list'

const PrivacyCenter = () => {
  return (
    <>
      <AboutPrivacy />
      <Audits />
      <PrivacyList />
      <ContactForm />
    </>
  )
}

export default PrivacyCenter;