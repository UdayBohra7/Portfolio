import React from 'react'
import useRoot from '../hooks/useRoot'

const About = () => {
  const { visitCount, setVisitCount } = useRoot();

  return (
    <section className="md:py-20 py-10">
      <div className='container'>
        <h4 className="font-semibold text-2xl text-center flex gap-2">
          <span>Visitors:</span>
          <span>{visitCount}</span>
        </h4>
        <button
          onClick={() => setVisitCount(visitCount + 1)}
          className="px-4 py-1 bg-primary border">
          <span>Next Count:</span>
          <span>{visitCount + 1}</span>
        </button>
      </div>
    </section>
  )
}

export default About;