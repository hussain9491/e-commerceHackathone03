// FeedbackForm.js
import { useForm } from 'react-hook-form';

export default function FeedbackForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    // Submit to Formspree or your API
    fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <input
        {...register('email')}
        type="email"
        placeholder="Email (optional)"
        className="w-full p-2 border rounded"
      />
      <textarea
        {...register('message')}
        placeholder="Your feedback..."
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Submit Feedback
      </button>
    </form>
  );
}