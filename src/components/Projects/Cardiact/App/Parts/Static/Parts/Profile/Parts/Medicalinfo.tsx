import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const InfoWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '#151515',
  border: '1px solid #212121',
  borderRadius: '$r1',
})

const InfoContent = styled('div', {
  position: 'relative',
  width: '85%',
  margin: '0 auto',
  padding: '20px 0',
  '> *:not(:last-child)': { marginBottom: 12 }
})

const InfoList = styled('div', {

  ul: {
    listStyle: 'none',
    fontSize: 13,
    '> li:not(:last-child)': { borderBottom: '1px solid #212121' }
  }
})

const LineItem = styled('div', {
  display: 'flex',
  padding: '12px 0',
  lineHeight: 1.5,
  '> *:first-child': { marginTop: 2 },
  '> *:not(:last-child)': { marginRight: 12 }
})

export const MedicalInfo = () => {
  return(

    <InfoWrap>
      <InfoContent>
        <Heading heavy size="l0" title="Medical Information" />

        <InfoList>
          <ul>
            <li>
              <LineItem>
                <Icon size="l0" icon="pill" />
                <div>Takes 50mg of Lipitor daily</div>
              </LineItem>
            </li>

            <li>
              <LineItem>
                <Icon size="l0" icon="leaf" />
                <div>Has seasonal allergies</div>
              </LineItem>
            </li>

            <li>
              <LineItem>
                <Icon size="l1" icon="graduation-cap" />
                <div>
                  <div>Primary Care Physician:</div>
                  <div>William Hatteclyffe</div>
                </div>
              </LineItem>
            </li>

            <li>
              <LineItem>
                <Icon size="l0" icon="cross" />
                <div>
                  <div>Preferred Hospital:</div>
                  <div>University Hospital</div>
                </div>
              </LineItem>
            </li>
          </ul>
        </InfoList>
      </InfoContent>
    </InfoWrap>

  )
}
