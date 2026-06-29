import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form Data:", data);
    alert("Message Sent Successfully!");
    reset();
  };

  return (
    <section id="contact" className="section-separator bg-darkCard">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl text-center mb-12">Get In Touch</h2>
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit(onSubmit)} 
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <input 
                {...register('name')} 
                placeholder="Your Name" 
                className="w-full p-4 bg-darkBg border border-gray-700 rounded-lg focus:border-primary outline-none transition-colors"
              />
              {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
            </div>
            <div className="space-y-2">
              <input 
                {...register('email')} 
                placeholder="Your Email" 
                className="w-full p-4 bg-darkBg border border-gray-700 rounded-lg focus:border-primary outline-none transition-colors"
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>
          </div>
          <div className="space-y-2">
            <textarea 
              {...register('message')} 
              placeholder="Your Message" 
              rows={5}
              className="w-full p-4 bg-darkBg border border-gray-700 rounded-lg focus:border-primary outline-none transition-colors"
            />
            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
          </div>
          <div className="text-center">
            <Button type="submit" className="w-full md:w-auto px-12">Send Message</Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};
