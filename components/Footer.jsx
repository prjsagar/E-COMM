const footerDivData = {
  data1: {
    title: 'About',
    text: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
  data2: {
    title: 'Contact Us',
    text: 'E-Comm,4578\nMarmora Road,\nGlasgow D04 89GR',
  },
};

function FooterDiv2({ title }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="font-bold">{title}</div>
        <div>
          <ul className="text-xs">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </>
  );
}

function FooterDiv1({ title, text, font }) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="font-bold">{title}</div>
        <div className="text-xs w-1/2 {font}">{text}</div>
      </div>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="bg-cyan-200 w-full p-5 flex flex-col gap-4  ">
        <div className="flex flex-col sm:flex-row justify-between px-20 pt-20">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 ">
              <img src="assets/companyLogo.svg" alt="logo" className="h-8" />
              {/* <span className="font-bold"> E-Comm</span> */}
            </div>
            <div className="text-xs w-1/2">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </div>
          </div>
          <FooterDiv1
            title={footerDivData.data1.title}
            text={footerDivData.data1.text}
          />
          <FooterDiv1
            title={footerDivData.data2.title}
            text={footerDivData.data2.text}
          />
        </div>
        <div className="flex flex-row justify-between px-20 pb-12 pt-8 ">
          <FooterDiv2 title="Information" />
          <FooterDiv2 title="Service" />
          <FooterDiv2 title="My Account" />
          <FooterDiv2 title="Offers" />
        </div>
        <div className="px-20">
          <div className="h-[2px] bg-white w-full"></div>
        </div>
        <div className="flex flex-row justify-end px-20 py-4 gap-1">
          <img src="/assets/paypal.svg" alt="paypal" className="w-10 h-10 " />
          <img src="/assets/visa.svg" alt="visa" className="w-10 h-10" />
        </div>
      </footer>
    </>
  );
}
