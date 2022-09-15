import Label from '@/Components/Label'
import Input from '@/Components/Input'
import Button from '@/Components/Button'
import { Link, Head } from '@inertiajs/inertia-react'

export default function Register() {
  return (
    <>
      <Head title="Sign Up" />
      <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
          <img
            src="/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
            alt=""
          />
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
          <div>
            <img src="/images/moonton-white.svg" alt="" />
            <div className="my-[70px]">
              <div className="font-semibold text-[26px] mb-3">Sign Up</div>
              <p className="text-base text-[#767676] leading-7">
                Explore our new movies and get <br />
                the better insight for your life
              </p>
            </div>
            <form className="w-[370px]">
              <div className="flex flex-col gap-6">
                <div>
                  {/* <label className="text-base block mb-2">Full Name</label> */}
                  <Label forInput="fullname" value="Full name" />
                  {/* <input type="text" name="fullname"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your fullname..." value="Angga React" /> */}
                  <Input
                    type="text"
                    name="fullname"
                    placeholder="Your Full Name..."
                  />
                </div>
                <div>
                  {/* <label className="text-base block mb-2">Email Address</label> */}
                  <Label forInput="email" value="Email address" />
                  {/* <input type="email" name="email"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your Email Address" value="anggaforreact@fb.com" /> */}
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                  />
                </div>
                <div>
                  {/* <label className="text-base block mb-2">Password</label> */}
                  <Label forInput="password" value="Password" />
                  {/* <input type="password" name="password"
                                        className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                        placeholder="Your Password" value="eeeeeeeeeeeeeee" /> */}
                  <Input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                  />
                </div>
              </div>
              <div className="grid space-y-[14px] mt-[30px]">
                {/* <a href="/" className="rounded-2xl bg-alerange py-[13px] text-center">
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </a> */}
                <Link href={route('prototype.d ashboard')}>
                  <Button type="button" variant="primary">
                    <span className="text-base font-semibold">Sign Up</span>
                  </Button>
                </Link>
                {/* <a href="sign_in.html" className="rounded-2xl border border-white py-[13px] text-center">
                                    <span className="text-base text-white">
                                        Sign In to My Account
                                    </span>
                                </a> */}
                <Link href={route('prototype.login')}>
                  <Button type="button" variant="light-outline">
                    <span className="text-base text-white">
                      Sign In to My Account
                    </span>
                  </Button>
                </Link>
                {/* <!-- <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </button> --> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
