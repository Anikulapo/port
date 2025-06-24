import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Send
} from "lucide-react";

const Contacts = () => {


  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-7 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Whether you have a question,
          want to collaborate, or just want to say hi, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-8 flex flex-col justify-center items-center ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="gap-6 justify-center items-center flex flex-col lg:flex-row  max-w-full ">
              {/* Email Contact */}
              <div className="flex   items-start justify-start space-x-4 w-sm px-15 lg:px-0 lg:pl-7">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg">Email</h4>
                  <a
                    className="hover:text-primary transition-colors duration-300 text-muted-foreground"
                    href="mailto:tobialasoadura200@gmail.com"
                  >
                    tobialassoadura200@gmail.com
                  </a>
                  <p className="text-muted-foreground"></p>
                </div>
              </div>

              {/* Telephone Number */}
              <div className="flex   items-start justify-start space-x-4 w-sm px-15 lg:pr-0 md:pt-2 lg:pl-10">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg">Phone Number</h4>
                  <a
                    className="hover:text-primary transition-colors duration-300 text-muted-foreground"
                    href="tel:+2349039646341"
                  >
                    +2349039646341
                  </a>
                  <p className="text-muted-foreground"></p>
                </div>
              </div>

              {/* Location */}
              <div className="flex   items-start justify-start space-x-4 w-sm px-15 xl:pl-20 lg:pr-0 lg:pl-10">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg">Location</h4>
                  <a className="hover:text-primary transition-colors duration-300 text-muted-foreground">
                    Ibadan, Oyo, Nigeria
                  </a>
                  <p className="text-muted-foreground"></p>
                </div>
              </div>

              
            </div>

            <div className="pt-8">
                <h4>Connect With Me</h4>
                <div className="flex space-x-4 justify-center pt-4">
                  <a href="https://www.linkedin.com/in/oluwatobi-alasoadura-699aa21b6/" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="https://x.com/Greatalash1" target="_blank">
                    <Twitter />
                  </a>
                </div>
              </div>


            <div className="space-y-6 w-full flex justify-center items-center mt-6">
              <button className=" cosmic-button px-10 py-4 transition-all duration-500 flex items-center justify-center cursor-pointer">
                <a href="mailto:tobialasoadura200@gmail.com">Let's Get In Touch</a>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contacts;
