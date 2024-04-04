import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import classNames from 'classnames';
import { Card } from 'primereact/card';
import background from '../../../assets/image/3383078.jpg';

export default function LoginForm() {
  
  const navigate = useNavigate();

  const toast = React.useRef(null);
  
  const form = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const myStyle = {
      backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

  const onSubmit = data => {
    console.log(data);
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Login successful' });
    // Navigate to '/dashboard' after a short delay to allow the toast to be seen
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500); // Delay can be adjusted based on user experience preference
  };

  const getFormErrorMessage = (name) => {
    return form.formState.errors[name] && <small className="p-error text-red-500">{form.formState.errors[name].message}</small>;
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="h-screen flex justify-center items-center" style={myStyle}>
      <Card title="Log In" className="w-full max-w-md rounded-lg shadow-xl bg-white p-6">
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <Toast ref={toast} />
          <div className="space-y-6">
            <div>
              <Controller
                name="username"
                control={form.control}
                rules={{ required: 'Username is required.' }}
                render={({ field, fieldState }) => (
                <>
                  <InputText id={field.name} {...field} inputRef={field.ref} className={classNames('w-full p-3 rounded-md border-2', {'border-red-500 shadow-sm': fieldState.error, 'border-gray-300': !fieldState.error})} placeholder='Username'/>
                  {getFormErrorMessage(field.name)}
                </>
                )}
              />
            </div>
            <div>
            <Controller
        name="password"
        control={form.control}
        rules={{ required: 'Password is required.' }}
        render={({ field, fieldState }) => (
                <div className="password-field-wrapper relative"> {/* Add relative positioning */}
                <InputText
                    id={field.name}
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    className={classNames(
                    'border-2 w-full p-3 rounded-md pr-10', // Add padding to the right to make room for the button
                    {
                        'border-red-500 shadow-sm': fieldState.error,
                        'border-gray-300': !fieldState.error,
                    }
                    )}
                    placeholder='Password'
                />
                <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="toggle-password-visibility absolute inset-y-0 right-0 pr-3 flex text-center items-center text-sm leading-5"
                >
                    {/* Icon can be used here instead of text */}
                    {showPassword ? 'Hide' : 'Show'}
                </button>
                {getFormErrorMessage(field.name)}
                </div>
                )}
            />
            </div>
            <div className="pt-4 flex justify-center">
              <Button label="Submit" type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" />
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}
