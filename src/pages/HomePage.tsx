import { Navbar }      from '../components/layout/Navbar'
import { Footer }      from '../components/layout/Footer'
import { Hero }        from '../components/sections/Hero'
import { WaveReveal }  from '../components/sections/WaveReveal'
import { Clients }     from '../components/sections/Clients'
import { WhyBlueit }   from '../components/sections/WhyBlueit'
import { WaterCrisis } from '../components/sections/WaterCrisis'
import { Features }    from '../components/sections/Features'
import { Stats }       from '../components/sections/Stats'
import { Industries }  from '../components/sections/Industries'
import { WaterUniverse } from '../components/sections/WaterUniverse'
import { About }       from '../components/sections/About'
import { Press }       from '../components/sections/Press'
import { Contact }     from '../components/sections/Contact'
import { CTA }         from '../components/sections/CTA'

export function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: '#020B18' }}>
      <Navbar />
      <main>
        <Hero />
        <WaveReveal />
        <Clients />
        <WaterCrisis />
        <WhyBlueit />
        <Features />
        <Stats />
        <Industries />
        <WaterUniverse />
        <About />
        <Press />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
