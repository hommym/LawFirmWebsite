import Header from "../components/molecules/Header";

const Contact = () => {
  return (
    <>
      <Header sx="!relative" />
      <div id="contacts" className="">
        <div id="middle-section">
          <h4 id="first-text" className="">
            CONTACT US
          </h4>

          <h2 id="second-text" className="text-xl md:mt-2 md:mb-6 md:text-5xl">
            Book a Consultation
          </h2>

          <form id="form-section" action="localhost:80/api/contact-us" className="max-w-[700px]  mx-auto py-4" method="post" aria-label="Contact form">
            <div className="contact-row gap-4 mt-2 md:mt-6 md:gap-8 flex-col md:flex-row">
              <div className="left-side">
                <div className="labels">FirstName*</div>
                <div>
                  <input className="text-field" placeholder="First Name" type="text" name="firstName"></input>
                </div>
              </div>
              <div className="right-side ml-0">
                <div className="labels">LastName*</div>
                <div>
                  <input className="text-field" placeholder="Last Name" type="text" name="lastName"></input>
                </div>
              </div>
            </div>
            <div className="contact-row gap-4 mt-2 md:mt-6 md:gap-8 flex-col md:flex-row">
              <div className="left-side">
                <div className="labels">Email*</div>
                <div>
                  <input className="text-field" placeholder="your@company.com" type="text" name="email"></input>
                </div>
              </div>
              <div className="right-side ml-0">
                <div className="labels">Phone*</div>
                <div>
                  <input className="text-field" placeholder="+1-212-555-2345" type="text" name="tel"></input>
                </div>
              </div>
            </div>
            <div className="contact-row gap-4 mt-2 md:mt-6 md:gap-8 flex-col md:flex-row">
              <div className="left-side">
                <div className="labels">Organisation*</div>
                <div>
                  <input className="text-field" placeholder="Your Organisation" type="text" name="orgName"></input>
                </div>
              </div>
              <div className="right-side ml-0">
                <div className="labels">Address*</div>
                <div>
                  <input className="text-field" placeholder="Your Address" type="text" name="address"></input>
                </div>
              </div>
            </div>
            <div className="contact-row gap-4 mt-2 md:mt-6 md:gap-8 flex-col md:flex-row">
              <div className="left-side">
                <div className="labels">Industry*</div>
                <div>
                  <input className="text-field" placeholder="Information" type="text" name="industryInfo"></input>
                </div>
              </div>
              <div className="right-side ml-0">
                <div className="labels">Position*</div>
                <div>
                  <input className="text-field" placeholder="your position" type="text" name="position"></input>
                </div>
              </div>
            </div>
            <div className="contact-row gap-4 mt-2 md:mt-6 md:gap-8 flex-col md:flex-row w-full">
              <div className="w-full">
                {/* <input id="message-box" placeholder="Leave us a message..." type="text" name="firstName"></input> */}
                <div className="left-side ">
                  <div className="labels">Message* </div>
                  <textarea name="message" id="" className="hover:outline-[#be9030] w-full p-4 h-48 rounded-[10px]  border-[1px] resize-none mx-auto"></textarea>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <button id="submit-button" className="w-full md:w-[200px]">
                {" "}
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
