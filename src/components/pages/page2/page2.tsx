
import './page2.css'

function  Page2() {


  return (
    <>
      <section className='p2' id="about">
        <div className='up'>
          <img src="/p2num.png" alt="" />
          <img src="/line.png" alt="" />
          <h1 className='white changefont'>WHO ARE WE ?</h1>
        </div>

        <div className='down'>
          <div className='leftp2'>
            <div className='sub1'>
              <h1 className='white subtitle'>A shared curiosity. <br />
              A stronger cyber community.</h1>
            </div>

            <div className='sub2'>
              <h3 className='white description'>We’re a student club at ESI Algiers, founded in 2011 as OWASP. We promote cybersecurity awareness in Algeria by learning together and turning knowledge into practice.</h3>
            </div>

            <div className='sub3'>
              <div className='sub3div'>
                <img src="/flecheGR.png" alt="" />
                <p className='white'>Share knowledge, openly.</p>
              </div>
              <div className='sub3div'>
                <img src="/flecheGR.png" alt="" />
                <p className='white'>Make cybersecurity basics accessible.</p>
              </div>
              <div className='sub3div'>
                <img src="/flecheGR.png" alt="" />
                <p className='white'>Build international recognition.</p>
              </div>
            </div>
          </div>

          <img src="/comm.png" alt="" className='p2img'/>
        </div>
      </section>
    </>
  )
}

export default Page2