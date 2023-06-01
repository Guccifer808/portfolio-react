import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (formData, e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_y0i6p7j',
        'template_b22amot',
        e.target,
        'wHKDnOuPASssRRaFd'
      );

      // console.log(result.text);
      setSuccessMessage('Message sent successfully!');
      e.target.reset();
      setTimeout(() => setSuccessMessage(''), 5000); // Clear success message after 5 seconds
    } catch (error) {
      console.log(error.text);
    }
  };
  return (
    <>
      <form className='contactform' onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <div className='form-group'>
              <input
                {...register('name', { required: true })}
                type='text'
                name='name'
                placeholder='YOUR NAME'
              />
              {errors.name && errors.name.type === 'required' && (
                <span className='invalid-feedback'>Name is required</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className='col-12 col-md-6'>
            <div className='form-group'>
              <input
                {...register(
                  'email',
                  {
                    required: 'Email is Required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Entered value does not match email format',
                    },
                  },
                  { required: true }
                )}
                type='email'
                name='email'
                placeholder='YOUR EMAIL'
              />
              {errors.email && (
                <span className='invalid-feedback'>{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className='col-12 col-md-12'>
            <div className='form-group'>
              <input
                {...register('subject', { required: true })}
                type='text'
                name='subject'
                placeholder='YOUR SUBJECT'
              />
              {errors.subject && (
                <span className='invalid-feedback'>Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className='col-12'>
            <div className='form-group'>
              <textarea
                {...register('message', { required: true })}
                name='message'
                placeholder='YOUR MESSAGE'
              ></textarea>
              {errors.message && (
                <span className='invalid-feedback'>Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className='col-12'>
            <ReCAPTCHA
              sitekey='6Ld5WeUkAAAAAPQdBYMEhzad4fzlwiTO2z2YRlkf'
              className='captcha'
            />
            <button type='submit' className='button'>
              <span className='button-text'>Send Message</span>
              <span className='button-icon fa fa-send'></span>
            </button>
          </div>
        </div>
      </form>

      {successMessage && (
        <div className='alert alert-success' role='alert'>
          {successMessage}
        </div>
      )}

      {/* End contact */}
    </>
  );
};

export default Contact;
