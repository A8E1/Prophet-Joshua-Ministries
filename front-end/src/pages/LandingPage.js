import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import QuoteSection from '../components/QuoteSection'
import '../styles/test.css'

export default function LandingPage(){
    return(
        <div className='landing-page'>
            <Header />
            <div className='content'>
                <HeroSection />
                <QuoteSection />
            </div>

        </div>
    )
}