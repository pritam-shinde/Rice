import React from 'react'

const ContactForm = () => {
  return (
    <>

      <form>
        <div className="mb-3">
          <input type="text" className="form-control" id="name" placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" id="email" placeholder="email" required />
        </div>
        <div className="mb-3">
          <input type="number" className="form-control" id="phone" placeholder="phone" required />
        </div>
        <div className="mb-3">

          <input type="text" className="form-control" id="phone" placeholder="subject" required />
        </div>
        <div className="mb-3">
          <textarea class="form-control z-depth-1" id="message" rows="4" placeholder="Message"></textarea>

        </div>
        <button type="submit" className="btn btn-md" style={{ backgroundColor: `var(--Coper)`, color: `var(--White)` }}>Submit</button>
      </form>
    </>
  )
}

export default ContactForm
