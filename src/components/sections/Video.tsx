import React from 'react'
import Section from '../shared/Section'
import className from 'classnames/bind'
import styles from './Video.module.scss'

const cx = className.bind(styles)

function Video() {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster="/assets/poster.jpg"
      >
        <source src="/assets/원본.mp4" type="video/mp4"></source>
      </video>
    </Section>
  )
}

export default Video
