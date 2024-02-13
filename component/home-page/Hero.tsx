import React from 'react'
import classes from "./hero.module.css"
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero} >
        <div className={classes.image}>
            <Image src="/images/site/IMG_20200216_103948_282.jpg" alt={''} width={300} height={300}/>
        </div>
        <h1>
            Hi I'm Sasan
        </h1>
        <p>
            I blog about web
        </p>
    </section>
  )
}

export default Hero