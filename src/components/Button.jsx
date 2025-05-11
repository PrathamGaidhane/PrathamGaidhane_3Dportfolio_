import React from 'react'

const Button = ({ text, className = '', id }) => {
  return (
    <a
    onClick={(e) => {
      e.preventDefault()
      const target = document.getElementById("counter")
      if (target && id) {
        const offset = window.innerHeight * 0.15;

        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behevior: 'smooth' })
    }}}
    id={id} className="inline-block">
      <div className={`cta-button group ${className}`}>
        {/* expanding circle */}
        <div className="bg-circle" />
        {/* your centered text */}
        <p className="text">{text}</p>
        {/* arrow in top layer */}
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button
