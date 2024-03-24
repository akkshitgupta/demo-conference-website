import Button from "@/components/Button";
import FormInput from "../components/FormInput";

export default function Form() {
  return (
    <div className="mt-8">
      <h1 className="text-white text-center text-3xl">
        Register as speaker for the Conference
      </h1>
      <div className="min-h-screen flex flex-col md:flex-row gap-x-2 items-center justify-around">
        <div>
          <img
            alt=""
            src={
              "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800"
            }
            className="max-w-5/6 w-full"
          />
        </div>
        <div className="w-[560px]">
          <form
            action={process.env.FORM_LINK}
            method="post"
            className="w-5/6 h-4/6 border border-gray-300 rounded-md px-4 py-6">
            {/* speaker name */}
            <FormInput
              name={process.env.FULL_NAME}
              label="Full Name"
              required
            />
            {/* email field */}
            <FormInput
              name={process.env.EMAIL}
              type="email"
              label="Email"
              required
            />
            <FormInput name={process.env.TWITTER} label="Twitter" required />
            <div className="mt-14 flex justify-between">
              <Button type="submit" primary>
                Complete the registration
              </Button>
              <Button type="submit">Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
