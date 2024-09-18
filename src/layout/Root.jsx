import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import HitMe from '../use-me/hitMe';

const Root = () => {
  const [visitCount, setVisitCount] = useState(0);

  return (
    <main className="bg-background text-background-foreground text-center space-y-4 py-20 container">
      <h1 className='text-5xl font-bold'>VisitCount: {visitCount}</h1>
      <HitMe type="border"
        onClick={() => setVisitCount(visitCount + 1)}>
        Next count : {visitCount + 1}
      </HitMe>
      <Outlet context={{ visitCount, setVisitCount }} />
    </main>
  )
}

export default Root;