import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import '../styles/LandingPage.css'

export default function LandingPage(){
    return(
        <div className='landing-page'>
            <Header />
            <div className='content'>
                <HeroSection />  
            </div>

        </div>
    )
}