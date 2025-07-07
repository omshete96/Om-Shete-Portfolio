import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer and a quick learner creating impactful digital solutions
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern tech setup in dark environment"
              className="rounded-2xl shadow-xl w-full h-auto card-glow"
            />
          </motion.div>
          
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Engineering student at Nutan Maharashtra Institute of Engineering and Technology, Pune, 
              with an aggregate CGPA of 8.53 (Till Semester VI). My journey is driven by a strong enthusiasm for 
              Full Stack Development, AI/ML, and Data Science technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in Next.js, React, Node.js, Python, and C++, with experience in both frontend 
              and backend development. I believe in building applications that not only solve problems but 
              also provide exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-dark-tertiary rounded-xl border border-glass-border card-glow">
                <div className="text-3xl font-bold gradient-text mb-2">375+</div>
                <div className="text-gray-400">DSA Problems Solved</div>
              </div>
              <div className="text-center p-6 bg-dark-tertiary rounded-xl border border-glass-border card-glow">
                <div className="text-3xl font-bold gradient-text mb-2">8.53</div>
                <div className="text-gray-400">CGPA Till Sem VI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
