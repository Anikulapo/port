import { Mail, MapPin, Phone, Linkedin, Twitter,  } from "lucide-react";

const Contacts = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Whether you have a question,
          want to collaborate, or just want to say hi, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">


                {/* Email Contact */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-lg">Email</h4>
                  <a
                    className="hover:text-primary transition-colors duration-300 text-muted-foreground"
                    href="mailto:tobialassoadura200@gmail.com"
                  >
                    tobialassoadura200@gmail.com
                  </a>
                  <p className="text-muted-foreground"></p>
                </div>
              </div>


                {/* Telephone Number */}
              <div className="flex items-start space-x-4">
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
              <div className="flex items-start space-x-4">
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



              <div className="pt-8">
                <h4>Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                    <a href="">
                        Linked
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
