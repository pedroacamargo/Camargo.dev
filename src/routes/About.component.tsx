import React from 'react'
import '../Styles/about/About.styles.scss';
import { TransitionAbout } from '../components/about/TransitionAbout.component';
import { SectionDecorations } from '../components/about/SectionDecorations.component';

const About = () => {
    return (
            <section className='about-container'>
                <SectionDecorations />

                <article>

                    <div className='about-captions'>
                        <p>
                            My first contact with programming was when I was 17 years old, I studied by my own web development while I was at school. In school I studied economics and I had the uncontrollable desire to study programming, because I felt in love with this world and since 17 years, I never stopped.
                            Nowadays I'm studying Computer Science at University of Minho - Portugal, still 1st year. 
                            Besides the academic career, I'm a high performance waterpolo athlete, actually playing at Vitoria SC as a goalkeeper in 1st Division.
                        </p>
                        <p>
                            Now talking about knowledge I got by myself:
                            <ul>
                                <li>Haskell and C.</li>
                                <li>HTML, CSS and JavaScript. I have projects in my repository at github (https://github.com/pedroacamargo).</li>
                                <li>Experience with Tailwind and Bootstrap.</li>
                                <li>React</li>
                                <li>Git and GitHub versioning.</li>
                                <li>I'm currently deepening myself at NestJS and Typescript.</li>
                            </ul>
                        </p>
                        <br/>

                        Academic experience:
                        - I'm participating at JOIN (Jornadas de Informática) as a front-end developer.
                        - Collaborator AT NECC (Núcleo de estudantes de Ciências da Computação).
                        <br/>
                        Waterpolo achievements:
                        - 2 appearances at Champions League (2021/2022 & 2022/2023) 
                        - U13 Best Brazilian goalkeeper & U16 Best Portuguese goalkeeper.
                        - U14 2nd place (Portugal), U15 state champion (Rio de Janeiro), U13 state 2nd place (Rio de Janeiro)
                        - U16 Champion (Portugal)
                        - 2nd place at 2021/2022 Gauteng Tournament (South Africa)
                        - 4 times national champion (Portugal 1st division)
                        - 2 times Portugal Cup champion
                        - 1 time Portugal Supercup champion 
                    </div>
                    <div className='about-aside'>

                        <div className='aside-img'></div>
                        <div className='divider'></div>

                    </div>

                </article>
                
                <TransitionAbout />
            </section>
    );
}

export default About;