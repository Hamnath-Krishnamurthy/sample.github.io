import React, { useEffect, useState } from 'react'
import linkdin from '../../../assets/careers/linkedin.svg'
import Paper from '../../../assets/careers/Paper.svg'
import X from '../../../assets/careers/X.svg'

const ApplyNow = ({ success }) => {
  const [attach, setAttach] = useState(null)

  useEffect(() => {
    console.log('files', attach)
  }, [attach])

  return (
    <div className='container applyNow'>
      <div className='d-md-flex justify-content-between py-lg-5 pt-5 pb-3'>
        <p className='fnt-500 fnt-20-fixed txt-primary'>
          SUBMIT YOUR APPLICATION
        </p>
        <p className='indication fnt-400 fnt-16'>
          <span className='pe-1'>*</span>indicates a required field
        </p>
      </div>
      <div className='applyLinkdin'>
        <div className='applyLinkdin__container'>
          <button className='btn btn-pri w-auto fnt-600 fnt-16 text-white text-uppercase'>
            <img alt='' src={linkdin} className='pe-2' /> apply with linkedin
          </button>
          <p className='fnt-400 fnt-16 txt-061 ps-lg-5'>
            Your full linkedin profile will be shared
          </p>
        </div>
      </div>
      <form className='forms'>
        <div className='row firstDiv w-100 d-flex justify-content-center'>
          <div className='col-md-5 mb-4'>
            <label htmlFor='fullname' className='form-label'>
              Full name
              <span className='txt-red ms-1'>*</span>
            </label>
            <input type='text' className='form-control' id='fullname' />
          </div>
          <div className='col-md-5 mb-4'>
            <label htmlFor='email' className='form-label'>
              Email ID
              <span className='txt-red ms-1'>*</span>
            </label>
            <input type='email' className='form-control' id='email' />
          </div>
          <div className='col-md-5 mb-4'>
            <label htmlFor='country' className='form-label'>
              Location(City)
              <span className='txt-red ms-1'>*</span>
            </label>
            <select className='form-select select' id='country'>
              <option selected>India</option>
              <option value='1'>Australia</option>
              <option value='2'>Russia</option>
              <option value='3'>Dubai</option>
            </select>
          </div>
          <div className='col-md-5  mb-4'>
            <label className='form-label'>Mobile Number</label>
            <div className='row'>
              <div className='col-3 countyCode col-lg-3'>
                <select className='form-select text-center'>
                  <option selected>91</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
              </div>
              <div className='col-9 col-lg-9'>
                <input type={'tel'} className='form-control' />
              </div>
            </div>
          </div>
          <div className='col-md-10 my-4 d-flex'>
            <label className='fnt-500 fnt-16 d-flex'>
              Resume/CV <span className='txt-red ms-1'>*</span>
            </label>
            <div className='row ps-md-5 ps-3 w-50 cvMobile'>
              <div className='col-4 '>
                <div className='fileContainer'>
                  {attach === null ? (
                    <>
                      <input
                        accept='image/*,.png, .txt, .docx'
                        type='file'
                        className='d-none'
                        id='attachResumeFile'
                        onChange={(e) => setAttach(e.target.files[0].name)}
                      />
                      <label
                        className='fnt-500 fnt-16 txt-primary cursor-pointer'
                        htmlFor='attachResumeFile'
                      >
                        Attach
                      </label>
                    </>
                  ) : (
                    <>
                      <div className='fileName'>
                        <img src={Paper} alt='' />
                        <span className='fnt-500 fnt-16 txt-blue-700'>
                          {attach}
                        </span>
                        <button onClick={() => setAttach(null)}>
                          <img src={X} alt='' className='imgfluid' />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className='col-4'>
                <div className='fileContainer'>
                  <label className='fnt-500 fnt-16 txt-primary'>DropBox</label>
                </div>
              </div>
              <div className='col-4'>
                <div className='fileContainer'>
                  <label className='fnt-500 fnt-16 txt-primary'>
                    GoogleDrive
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-10 d-flex'>
            <label className='fnt-500 fnt-16'>Cover letter</label>
            <div className='row PaddingLeft w-50 cvMobile'>
              <div className='col-4'>
                <div className='fileContainer'>
                  <input type='file' className='d-none' id='attachCVFile' />
                  <label
                    className='fnt-500 fnt-16 txt-primary cursor-pointer'
                    htmlFor='attachCVFile'
                  >
                    Attach
                  </label>
                </div>
              </div>
              <div className='col-4'>
                <div className='fileContainer'>
                  <label className='fnt-500 fnt-16 txt-primary'>DropBox</label>
                </div>
              </div>
              <div className='col-4'>
                <div className='fileContainer'>
                  <label className='fnt-500 fnt-16 txt-primary'>
                    GoogleDrive
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row secondDiv w-100 d-flex justify-content-center'>
          <div className='col-md-5 mb-4'>
            <label htmlFor='fullname' className='form-label'>
              Linkedin profile URL
              <span className='txt-red ms-1'>*</span>
            </label>
            <input type='text' className='form-control' id='fullname' />
          </div>
          <div className='col-md-5 mb-4'>
            <label htmlFor='email' className='form-label'>
              Website
              {/* <span className='txt-red ms-1'>*</span> */}
            </label>
            <input type='email' className='form-control' id='email' />
          </div>
          <div className='col-md-5 mb-4'>
            <label htmlFor='country' className='form-label'>
              How did you hear about this job?
              <span className='txt-red ms-1'>*</span>
            </label>
            <div class='dropdown'>
              <button
                className='btn   dropdown-toggle'
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
               Select the option
              </button>
              <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                <li>
                  <a className='dropdown-item' href='#'>
                  Compnay Website(Pecto Careers)
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                  Social media (Instagram, Facebook, Twitter, Linkedin)
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                  Pecto Employee
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                  Third party website
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                  Friend, family, colleague
                  </a>
                </li>
                <li>
                  <div className='dropdown-item others'>
                    <label>Other:</label>
                    <input type={'text'} className='form-control' placeholder='Type' />
                  </div>
                </li>
              </ul>
            </div>
            {/* <select className='form-select select' id='country'>
              <option selected>
                <p className='fnt-16 fnt-400 txt-grey'>select option</p>
              </option>
              <option value='1'>
                <p className='txt-061 fnt-400 fnt-16'>
                  Compnay Website(Pecto Careers)
                </p>
              </option>
              <option value='2'>Russia</option>
              <option value='3'>Dubai</option>
            </select> */}
          </div>
          <div className='col-md-5 mb-4'></div>
          <div className='submit'>
            <button
              className='fnt-600 fnt-16 text-white text-uppercase btn btn-pri w-auto'
              onClick={() => success(true)}
            >
              Submit the application
            </button>
            <div className='form-check py-4 d-none d-md-block'>
              <input
                className='form-check-input cursor-pointer'
                type='checkbox'
                value=''
                id='conditions'
                required
              />
              <label
                className='form-check-label text-clr-cont'
                for='conditions'
              >
                I have read and accept the
                <a
                  href='#'
                  className='text-decoration-underline txt-primary px-1'
                >
                  Terms & Conditions
                </a>
                of the Privacy Policy
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ApplyNow
