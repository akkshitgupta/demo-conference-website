import Button from "@/components/Button";
import FormInput from "../components/FormInput";
import Link from "next/link";

export default function Form() {
  return (
    <div className="mt-8">
      <h1 className="dark:text-gray-300 text-center text-3xl">
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
            className="w-5/6 h-4/6 border border-slate-700 dark:border-gray-300 rounded-md px-4 py-6">
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
              <Button type="reset">Cancel</Button>
            </div>
          </form>
          <aside className="bg-yellow-100 w-2/3 p-2  mt-12 text-black">
            Responses are being stored in a Google spreadsheet{" "}
            <Link
              href="https://docs.google.com/spreadsheets/d/1RT45LwIyGbEpuFllBgdtsnVfEAfOWXutYtx4PVJypkw/edit?usp=sharing"
              className="text-blue-800"
              target="_blank"
              rel="noopener noreferrer">
              Check here
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
