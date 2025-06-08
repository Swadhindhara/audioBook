import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import avatar from '../assets/graphics/avatar.svg'
import b3 from '../assets/images/b4.jpg'
import {
  BookAudio,
  LockIcon,
  LogOutIcon,
  LucideArrowRightSquare,
  LucideCamera,
  LucideSettings2,
  Settings,
  Settings2Icon,
  UserCog2,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/Auth/authSlice";
import { fetchProfile, updateUser } from "@/features/User/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  // const [profile, setProfile] = useState(null);
  const [step, setStep] = useState(1);
  // const password = watch("password");
  
  const { user, isLoading } = useSelector((state) => state.LogProfile)
  const navigate = useNavigate()
  const handleLogout = () =>{
    dispatch(logout())
    navigate('/')
  }

  useEffect(() => {
    dispatch(fetchProfile());    
  }, [dispatch]);

   const handleUpdate = (data) => {
    dispatch(
      updateUser({ name: data.name, email: data.email, number: data.number })
    );
  };

  // useEffect(() => {
  //   if (user && step === 1) {
  //     reset({ name: user.name, email: user.email, number: user.phoneNumber });
  //   }
  // }, [user, step]);


  return (
    <AlertDialog>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will logout your
            account and remove your data from the session.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={`cursor-pointer border-orange-400 border text-amber-600 hover:bg-amber-600 hover:text-white`}>Cancel</AlertDialogCancel>
          <AlertDialogAction className={`cursor-pointer bg-amber-600 hover:bg-black hover:text-white`} onClick={handleLogout}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      <div className="main px-4">
        <Sheet>
          <div className="container mx-auto">
            <div className="profile w-full md:py-10 py-4 flex items-start md:items-center justify-center">
              <div className="card w-full md:w-3/4 border rounded-md flex flex-col items-start p-4 gap-7">
                <h3 className="font-bold text-xl md:text-3xl lg:text-3xl flex items-center justify-center gap-2">
                  Account Setting
                  <span className={`block lg:hidden mt-3`}>
                    <SheetTrigger>
                      <Settings2Icon className="cursor-pointer" />
                    </SheetTrigger>
                  </span>
                </h3>
                <div className="boxes flex items-start w-full">
                  <div className="hidden lg:block left w-1/3">
                    <div className="tabs flex flex-col gap-4 items-start w-full">
                      <div
                        onClick={() => setStep(1)}
                        className={`tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-orange-50 w-3/4 px-2 py-2 transition-all duration-300 ease ${
                          step === 1 ? "bg-orange-50 text-amber-600" : ""
                        }`}
                      >
                        <div
                          className={`icon p-2 border rounded-sm ${
                            step === 1 ? "border-orange-300" : ""
                          } `}
                        >
                          <UserCog2 />
                        </div>
                        <p>Profile Setting</p>
                      </div>
                      <div
                        onClick={() => setStep(2)}
                        className={`tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-orange-50 w-3/4 px-2 py-2 transition-all duration-300 ease ${
                          step === 2 ? "bg-orange-50 text-amber-600" : ""
                        }`}
                      >
                        <div
                          className={`icon p-2 border rounded-sm ${
                            step === 2 ? "border-orange-300" : ""
                          } `}
                        >
                          <BookAudio />
                        </div>
                        <p>My Subscriptions</p>
                      </div>
                      <div
                        // onClick={handleLogout}
                        className="tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-orange-50 w-3/4 px-2 py-2 transition-all duration-300 ease"
                      >
                        <AlertDialogTrigger className='flex items-center gap-4 cursor-pointer w-full' >
                          <div className="icon p-2 border-red-600 border rounded-sm">
                            <LogOutIcon className="text-red-600" />
                          </div>
                          <p className="text-red-600">Logout</p>
                        </AlertDialogTrigger>
                      </div>
                    </div>
                  </div>
                  {step === 1 && (
                    <div className="lg:w-2/3 w-full">
                      <p className="text-lg font-semibold mb-3">Edit Profile</p>
                      <form
                        className="box w-full"
                        onSubmit={handleSubmit((data) => console.log(data))}
                      >
                        <div className="right w-full lg:w-full flex gap-5 items-center lg:items-start flex-col-reverse lg:flex-row">
                          <div className="left w-full lg:w-2/3 flex flex-col items-start gap-4">
                            <div className="box flex flex-col gap-2 w-full">
                              <label htmlFor="name">Full Name</label>
                              <Input
                                type="text"
                                {...register("name", {
                                  pattern: {
                                    value: /^[a-zA-Z\s]+$/,
                                    message: "Please enter a valid name.",
                                  },
                                })}
                              />
                              {errors.name && (
                                <small className="text-red-600">
                                  {errors.name.message}
                                </small>
                              )}
                            </div>
                            <div className="box flex flex-col gap-2 w-full">
                              <label htmlFor="number">Mobile Number</label>
                              <Input
                                type="number"
                                {...register("number", {
                                  pattern: {
                                    value: /^[a-zA-Z\s]+$/,
                                    message: "Please enter a mobile number.",
                                  },
                                })}
                              />
                              {errors.name && (
                                <small className="text-red-600">
                                  {errors.name.message}
                                </small>
                              )}
                            </div>
                            <div className="box flex flex-col gap-2 w-full">
                              <label htmlFor="email">Email</label>
                              <Input
                                type="text"
                                {...register("email", {
                                  pattern: {
                                    value:
                                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message:
                                      "Please enter a valid email address.",
                                  },
                                })}
                              />
                              {errors.email && (
                                <small className="text-red-600">
                                  {errors.email.message}
                                </small>
                              )}
                            </div>
                            <Button className="self-center bg-amber-600 cursor-pointer text-white hover:bg-black mt-5">
                              Save Changes
                            </Button>
                          </div>
                          <div className="right w-1/3 flex flex-col items-center gap-3">
                            <img
                            src={avatar}
                              className="md:w-32 md:h-32 w-28 h-28 rounded-md"
                              alt="avatar_icon"
                            />
                            <Button
                              variant="outline"
                              className="cursor-pointer border-orange-300 border"
                            >
                              <LucideCamera />
                              Change Avatar
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="right w-2/3 flex gap-4 items-start flex-col">
                      {/* <p className="font-semibold">Change Password</p>
                      <form
                        className="w-full flex flex-col gap-6"
                      >
                        <div className="box w-full flex flex-col gap-2">
                          <label htmlFor="password">New Password</label>
                          <Input
                            type="text"
                            placeholder="Type here new password"
                            {...register("password", {
                              required: "Please enter a valid password",
                              minLength: {
                                value: 8,
                                message:
                                  "Password should be at least 8 characters",
                              },
                            })}
                            className="w-full"
                          />
                          {errors.password && (
                            <small className="text-red-600">
                              {errors.password.message}
                            </small>
                          )}
                        </div>

                        <div className="box w-full flex flex-col gap-2">
                          <label htmlFor="confirmPassword">
                            Confirm Password
                          </label>
                          <Input
                            type="text"
                            placeholder="Type here to confirm password"
                            {...register("confirmPassword", {
                              required: "Please confirm your password",
                              validate: (value) =>
                                value === password || "Passwords do not match",
                            })}
                            className="w-full"
                          />
                          {errors.confirmPassword && (
                            <small className="text-red-600">
                              {errors.confirmPassword.message}
                            </small>
                          )}
                        </div>

                        <Button className="bg-amber-600 text-white w-fit self-center cursor-pointer hover:bg-black">
                          Change Password
                        </Button>
                      </form> */}
                      
                      <p>All Subscriptions</p>
                      <div className="boxes Subscriptions_boxes w-full h-77 overflow-y-auto flex flex-col gap-5 p-1">
                        <div className="box relative border border-zinc-300 shadow rounded-lg flex items-center gap-4">
                          <div className="left w-1/5">
                            <img src={b3} alt="" className="w-full block h-[120px] object-cover rounded-lg shadow-xl"/>
                          </div>
                          <div className="right w-4/5">
                            <p className="font-[Nunito] font-semibold text-xl">Lorem ipsum dolor sit amet.</p>
                            <p className="font-[Rubik] text-md text-zinc-500">Genre: <span className="uppercase">FICTION</span></p>
                            <p className="text-sm text-amber-600">Price : <span>780.00</span></p>
                          </div>
                          <div className="badge absolute text-xs top-2 text-zinc-400 right-3">27 April, 2025</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <SheetContent side="left">
            <SheetHeader>
              <SheetDescription>
                <div className="left">
                  <div className="tabs flex flex-col gap-4 items-start w-full">
                    <div
                      onClick={() => setStep(1)}
                      className={`tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-blue-50 w-3/4 px-2 py-2 transition-all duration-300 ease ${
                        step === 1 ? "bg-blue-50 text-blue-400" : ""
                      }`}
                    >
                      <div
                        className={`icon p-2 border rounded-sm ${
                          step === 1 ? "border-blue-200" : ""
                        }`}
                      >
                        <UserCog2 />
                      </div>
                      <p>Profile Setting</p>
                    </div>
                    <div
                      onClick={() => setStep(2)}
                      className={`tab flex items-center gap-4 cursor-pointer rounded-md hover:bg-blue-50 w-3/4 px-2 py-2 transition-all duration-300 ease ${
                        step === 2 ? "bg-blue-50 text-blue-400" : ""
                      }`}
                    >
                      <div
                        className={`icon p-2 border rounded-sm ${
                          step === 2 ? "border-blue-200" : ""
                        } `}
                      >
                        <LockIcon />
                      </div>
                      <p>Password</p>
                    </div>
                    <div
                      // onClick={handleLogout}
                      className="tab border flex items-center gap-4 cursor-pointer rounded-md hover:bg-blue-50 w-3/4 px-2 py-2 transition-all duration-300 ease"
                    >
                      <AlertDialogTrigger className='flex items-center gap-4 cursor-pointer w-full'>
                        <div className="icon p-2 border-red-600 border rounded-sm">
                          <LogOutIcon className="text-red-600" />
                        </div>
                        <p className="text-red-600">Logout</p>
                      </AlertDialogTrigger>
                    </div>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </AlertDialog>
  );
};

export default Profile;
