import { SubmitHandler, useForm } from "react-hook-form"
import '../style.css'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

const onsubmit: SubmitHandler<FormData> = data => {
  console.log(data)
}

const AdvancedForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>()
  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label htmlFor="firstname">First Name: </label>
          <input type="text" id="firstName" {...register('firstName', {required: 'First Name is required'})} />

          {errors.firstName && <p style={{color: 'red'}}>{errors.firstName.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" id="lastName" {...register('lastName', {required: 'Last Name is required'})} />

          {errors.lastName && <p style={{color: 'red'}}>{errors.lastName.message}</p>}
        </div>
        
        <div>
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" {...register('email', {required: 'Email Address is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid Email Address'
          }})} />
 
          {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="city">City: </label>
          <input type="text" id="city" {...register('city', {required: 'City is required'})} />

          {errors.city && <p style={{color: 'red'}}>{errors.city.message}</p>}
        </div>
        <div>
          <label htmlFor="state">State: </label>
          <input type="text" id="state" {...register('state', {required: 'State is required'})} />

          {errors.state && <p style={{color: 'red'}}>{errors.state.message}</p>}
        </div>
        <div>
          <label htmlFor="zip">ZIP: </label>
          <input type="text" id="zip" {...register('zip', {required: 'ZIP is required'})} />

          {errors.zip && <p style={{color: 'red'}}>{errors.zip.message}</p>}
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <input type="text" id="country" {...register('country', {required: 'Country is required'})} />

          {errors.country && <p style={{color: 'red'}}>{errors.country.message}</p>}
        </div>
        <div>
          <label htmlFor="completeLocation">Complete Location: </label>
          <input type="text" id="completeLocation" {...register('completeLocation', {required: 'Complete Location is required'})} />

          {errors.completeLocation && <p style={{color: 'red'}}>{errors.completeLocation.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AdvancedForm