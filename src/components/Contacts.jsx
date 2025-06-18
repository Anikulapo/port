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
                </div>

            </div>
        </div>
    </section>
    )}


export default Contacts;
