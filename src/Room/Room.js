import React, { Component } from 'react';
import './Room.css'


class Room extends Component {
  render() {
    return (
      <div className="App">
      {/* Using this.props.match.params.id !
                                           !
                                           V */}
        <div id="keyframe"></div>
      <p>You're in {this.props.match.params.id}</p>
      <div className="boxModel">This is me boxmodel </div> 
      <div id="bigPapa">
          <div id="floatLeft">left </div>
          <div id="floatRight">right </div>
        </div>
        <div className="flexView">
        <div>
            A B C
        </div>
        <div>
            B
        </div>
        <div>
            B
        </div>
        <div>
            B
        </div>
        <div>
            B
        </div>
        <div>
            B
        </div>
        <div>
            B
        </div>
        <div>
            B
        </div>
        <div>
            B
        </div>
        <div>
            B
        </div>
            </div>
            <div className="wrapper"> 
            <span classname="one top"></span>
            <span classname="two top"></span>
            <span classname="three"></span>
            <span classname="four"></span>
            <span classname="five"></span>
            <span classname="six"></span>
            </div>
            <button> CLICK ME</button>
            <input type="text"/>
            <ul>
                <li>Раз </li>
                <li>Два  </li>
                <li>Три  </li>
                </ul>
                {/* section */}
                <section className="tesla">
                {/* alt tag */}
                <img src="http://www.stickpng.com/assets/images/5852e277394e280271f3b498.png" alt="tesla"/>
                {/* h1, h2, image and lists, link */}
                <h1> Никола </h1>
                <h2> Тесла </h2>
                {/* article and ARIA */}
                <article aria-hidden>

Nikola Tesla
Photograph of Nikola Tesla, a slender, moustachioed man with a thin face and pointed chin.
Nikola Tesla, c. 1896
Born	10 July 1856
Smiljan, Austrian Empire (modern-day Croatia)
Died	7 January 1943 (aged 86)
New York City, New York, United States
Cause of death	Coronary thrombosis
Resting place	Nikola Tesla Museum, Belgrade, Serbia
Citizenship	Austrian (1856–1891)
American (1891–1943)
Education	Graz University of Technology (abandoned)
Engineering career
Discipline	Electrical engineering,
Mechanical engineering
Projects	Alternating current,
high-voltage, high-frequency power experiments
Significant design	Induction motor
Rotating magnetic field
Tesla coil
Radio remote control vehicle (torpedo)[1]
Awards	
 [show]
Signature
Nikola Tesla signature 1900.svg
Nikola Tesla (/ˈtɛslə/;[2] Serbian Cyrillic: Никола Тесла Serbo-Croatian pronunciation: [nikoːla tesla]; 10 July 1856 – 7 January 1943) was a Serbian-American[3][4][5] inventor, electrical engineer, mechanical engineer, physicist, and futurist who is best known for his contributions to the design of the modern alternating current (AC) electricity supply system.[6]

Born and raised in the Austrian Empire, Tesla received an advanced education in engineering and physics in the 1870s and gained practical experience in the early 1880s working in telephony and at Continental Edison in the new electric power industry. He emigrated to the United States in 1884, where he would become a naturalized citizen. He worked for a short time at the Edison Machine Works in New York City before he struck out on his own. With the help of partners to finance and market his ideas, Tesla set up laboratories and companies in New York to develop a range of electrical and mechanical devices. His alternating current (AC) induction motor and related polyphase AC patents, licensed by Westinghouse Electric in 1888, earned him a considerable amount of money and became the cornerstone of the polyphase system which that company would eventually market.

Attempting to develop inventions he could patent and market, Tesla conducted a range of experiments with mechanical oscillators/generators, electrical discharge tubes, and early X-ray imaging. He also built a wireless-controlled boat, one of the first ever exhibited. Tesla became well known as an inventor and would demonstrate his achievements to celebrities and wealthy patrons at his lab, and was noted for his showmanship at public lectures.

Throughout the 1890s, Tesla pursued his ideas for wireless lighting and worldwide wireless electric power distribution in his high-voltage, high-frequency power experiments in New York and Colorado Springs. In 1893, he made pronouncements on the possibility of wireless communication with his devices. Tesla tried to put these ideas to practical use in his unfinished Wardenclyffe Tower project, an intercontinental wireless communication and power transmitter, but ran out of funding before he could complete it.[7]

After Wardenclyffe, Tesla went on to try to develop a series of inventions in the 1910s and 1920s with varying degrees of success. Having spent most of his money, he lived in a series of New York hotels, leaving behind unpaid bills. Tesla died in New York City in January 1943.[8] His work fell into relative obscurity following his death, but in 1960, the General Conference on Weights and Measures named the SI unit of magnetic flux density the tesla in his honor.[9] There has been a resurgence in popular interest in Tesla since the 1990s
                    </article>
                </section>
                <a href="http://blizzteam.com/#/"  >My site</a>
                <video width="320" height="240" controls>
  <source src="../media/nirvana.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
    </video>
                {/* footer and HTML, head etc look in index.html=) SCRIPT TAG also there */}

                <footer>Made as fast as i could </footer>

      </div>
    );
  }
}

export default Room;
