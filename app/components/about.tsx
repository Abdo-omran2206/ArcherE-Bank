'use client';
import styles from '../css/about.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';

function About(){
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);
    return(
        <section className={styles.about_sec} id="About">
          <div className={styles.about_sec_contener}>
            <div className={styles.about_sec_text} data-aos="fade-right" >
                <h2>About Archer Bank</h2>
                <p>Archer Bank is redefining digital banking with innovative technology, robust security, and a customer-first approach. We empower you to manage your finances effortlessly—anytime, anywhere.</p>
                <ul>
                  <li>Intuitive digital platform</li>
                  <li>Fast, secure transactions</li>
                  <li>24/7 expert support</li>
                  <li>Exclusive rewards and offers</li>
                  <li>Trusted by thousands</li>
                  <li>Seamless mobile and web experience</li>
                  <li>Advanced privacy and fraud protection</li>
                  <li>Personalized financial insights</li>
                  <li>Global access, multi-currency support</li>
                  <li>Committed to community and sustainability</li>
                </ul>
                <p>Join Archer Bank today and experience the future of banking—secure, smart, and designed for you.</p>
            </div>
          </div>
          
          
        </section>
    )
}

export default About;