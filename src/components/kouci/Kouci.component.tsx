import { ArrowUpRight, Instagram } from 'lucide-react';
import '../../Styles/kouci/Kouci.scss';

export const Kouci = () => (
    <section className='kouci-showcase' aria-labelledby='kouci-title'>
        <div className='kouci-card'>
            <div className='kouci-copy'>
                <span className='kouci-eyebrow'>Co-founded by me</span>
                <p className='kouci-wordmark'>Kouci<span>.</span></p>
                <h2 id='kouci-title'>See the game<br /><span>differently.</span></h2>
                <p className='kouci-description'>Water polo analytics. Built from inside the pool.</p>
                <div className='kouci-links'>
                    <a className='kouci-cta' href='https://www.kouci.app/' target='_blank' rel='noopener noreferrer'>
                        Explore Kouci <ArrowUpRight size={20} aria-hidden='true' />
                    </a>
                    <a className='kouci-instagram' href='https://www.instagram.com/kouci.wp/' target='_blank' rel='noopener noreferrer'>
                        <Instagram size={18} aria-hidden='true' /> Instagram
                    </a>
                </div>
            </div>
            <div className='kouci-visual'>
                <span className='kouci-preview-caption'>Every shot tells a story.</span>
                <a className='kouci-preview' href='https://www.kouci.app/' target='_blank' rel='noopener noreferrer' aria-label='Explore Kouci water polo analytics'>
                    <img src='/assets/kouci/shot-analysis.png' width='1229' height='762' alt='Kouci shot analysis showing goal targets, match situations, and shot locations on a water polo pitch' loading='lazy' />
                    <span className='kouci-preview-arrow' aria-hidden='true'><ArrowUpRight size={22} /></span>
                </a>
                <img className='kouci-mascot' src='/assets/kouci/coach.png' width='835' height='1057' alt='' loading='lazy' aria-hidden='true' />
            </div>
        </div>
    </section>
);
